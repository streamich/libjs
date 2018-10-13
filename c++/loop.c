// gcc -Wall c++/loop.c -o tmp/loop && ./tmp/loop

#include <errno.h>
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/epoll.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>

#define MAX_EVENTS 64

int create_socket () {
    int sockfd = socket(AF_INET, SOCK_STREAM, 0);
    if (sockfd == -1) {
        fprintf(stderr, "socket: %s\n", strerror(errno));
        goto error;
    }

    struct sockaddr_in sin;
    sin.sin_family = AF_INET;
    sin.sin_addr.s_addr = INADDR_ANY;
    sin.sin_port = htons(8099);
    // int one = 1;
    // setsockopt(sockfd, SOL_SOCKET, SO_REUSEADDR, &one, sizeof(one));
    int bind_res = bind(sockfd, (struct sockaddr*)&sin, sizeof(sin));
    if (bind_res == -1) {
        fprintf(stderr, "bind: %s\n", strerror(errno));
        goto error;
    }

    int listen_res = listen(sockfd, 1);
    if (listen_res == -1) {
        fprintf(stderr, "listen: %s\n", strerror(errno));
        goto error;
    }

    return sockfd;

    error:
        if (sockfd != -1) close(sockfd);
        return -1;
}

int main (int argc, char *argv[]) {
    int epfd = epoll_create1(0);
    int sockfd = create_socket();
    int fcntl_res = fcntl(sockfd, F_SETFL, O_NONBLOCK);

    struct epoll_event event;
    event.data.fd = sockfd;
    event.events = EPOLLIN | EPOLLET;
    int epoll_ctl_res = epoll_ctl(epfd, EPOLL_CTL_ADD, sockfd, &event);

    // events = calloc(MAX_EVENTS, sizeof event);

    printf ("epfd: %i\n", epfd);
    printf ("sockfd: %i\n", sockfd);
    printf ("fcntl_res: %i\n", fcntl_res);
    printf ("epoll_ctl_res: %i\n", epoll_ctl_res);

    printf("allocating: %li\n", MAX_EVENTS * sizeof event);
    struct epoll_event* events = malloc(MAX_EVENTS * sizeof event);

    int i = 0;
    printf("starting loop...\n");
    for (i = 0; i < 10; i++) {
        printf("waiting...\n");
        int epoll_wait_res = epoll_wait(epfd, events, MAX_EVENTS, -1);
        printf("epoll_wait_res: %i\n", epoll_wait_res);
    }
}
