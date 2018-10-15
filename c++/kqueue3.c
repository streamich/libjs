// gcc -Wall c++/kqueue3.c -o tmp/kqueue3 && ./tmp/kqueue3

#include <sys/socket.h>
#include <sys/un.h>
#include <sys/event.h>
#include <netdb.h>
#include <assert.h>
#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>
#include <errno.h>
#include <sys/types.h>
#include <sys/stat.h>

int main(int argc, const char * argv[]) {
    
    // Macos automatically binds both ipv4 and 6 when you do this.
    struct sockaddr_in addr = {};
    addr.sin_len = sizeof(addr);
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = htonl(INADDR_ANY);
    addr.sin_port = htons(8099);
    
    int localFd = socket(AF_INET, SOCK_STREAM, 0);
    assert(localFd != -1);
    
    int on = 1;
    setsockopt(localFd, SOL_SOCKET, SO_REUSEADDR, &on, sizeof(on));
    if (bind(localFd, (struct sockaddr *)&addr, sizeof(addr)) == -1) {
        perror("bind");
        return 1;
    }
    assert(listen(localFd, 5) != -1);

    int kq = kqueue();
    
    struct kevent evSet;
    EV_SET(&evSet, localFd, EVFILT_READ, EV_ADD, 0, 0, NULL);
    assert(-1 != kevent(kq, &evSet, 1, NULL, 0, NULL));
    
    int junk = open("some.big.file", O_RDONLY);
    
    uint64_t bytes_written = 0;

    struct kevent evList[32];
    while (1) {
        // returns number of events
        int nev = kevent(kq, NULL, 0, evList, 32, NULL);
//        printf("kqueue got %d events\n", nev);
        
        for (int i = 0; i < nev; i++) {
            int fd = (int)evList[i].ident;
            
            if (evList[i].flags & EV_EOF) {
                printf("Disconnect\n");
                close(fd);
                // Socket is automatically removed from the kq by the kernel.
            } else if (fd == localFd) {
                struct sockaddr_storage addr;
                socklen_t socklen = sizeof(addr);
                int connfd = accept(fd, (struct sockaddr *)&addr, &socklen);
                assert(connfd != -1);
                
                // Listen on the new socket
                EV_SET(&evSet, connfd, EVFILT_READ, EV_ADD, 0, 0, NULL);
                kevent(kq, &evSet, 1, NULL, 0, NULL);
                printf("Got connection!\n");
                
                int flags = fcntl(connfd, F_GETFL, 0);
                assert(flags >= 0);
                fcntl(connfd, F_SETFL, flags | O_NONBLOCK);

                // schedule to send the file when we can write (first chunk should happen immediately)
                EV_SET(&evSet, connfd, EVFILT_WRITE, EV_ADD | EV_ONESHOT, 0, 0, NULL);
                kevent(kq, &evSet, 1, NULL, 0, NULL);

            } else if (evList[i].filter == EVFILT_READ) {
                // Read from socket.
                char buf[1024];
                size_t bytes_read = recv(fd, buf, sizeof(buf), 0);
                printf("read %zu bytes\n", bytes_read);
                
                
            } else if (evList[i].filter == EVFILT_WRITE) {
//                printf("Ok to write more!\n");
                
                off_t offset = (off_t)evList[i].udata;
                off_t len = 0;//evList[i].data;
                if (sendfile(junk, fd, offset, &len, NULL, 0) != 0) {
//                    perror("sendfile");
//                    printf("err %d\n", errno);
                    
                    if (errno == EAGAIN) {
                        // schedule to send the rest of the file
                        EV_SET(&evSet, fd, EVFILT_WRITE, EV_ADD | EV_ONESHOT, 0, 0, (void *)(offset + len));
                        kevent(kq, &evSet, 1, NULL, 0, NULL);
                    }
                }
                bytes_written += len;
                printf("wrote %lld bytes, %lld total\n", len, bytes_written);

            }
        }
    }
    
    return 0;
}
