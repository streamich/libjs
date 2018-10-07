require('libsys/shim');
import {EpollLoop} from '../src/loop/epoll';
import {socket, AF, SOCK, fcntl, FCNTL, FLAG} from '../src';

const loop = new EpollLoop();

console.log(loop);

export class Socket {
    fd: number = 0; // Socket file descriptor.
    // created = false;

    start() {
        this.fd = socket(AF.INET, SOCK.STREAM, 0);

        if (this.fd < 0) throw Error(`Could not create scoket: errno = ${this.fd}`);

        // Socket is not a file, we just created the file descriptor for it, flags
        // for this file descriptor are set to 0 anyways, so we just overwrite 'em,
        // no need to fetch them and OR'em.
        const res = fcntl(this.fd, FCNTL.SETFL, FLAG.O_NONBLOCK);
        if (res < 0) throw Error(`Could not make socket non-blocking: errno = ${fcntl}`);

        console.log('res', res);

        /*
        var event: libjs.epoll_event = {
            events: libjs.EPOLL_EVENTS.EPOLLIN | libjs.EPOLL_EVENTS.EPOLLOUT,
            data: [this.fd, 0],
        };
        var ctl = libjs.epoll_ctl(this.epfd, libjs.EPOLL_CTL.ADD, this.fd, event);
        if(ctl < 0) throw Error(`Could not add epoll events: errno = ${ctl}`);
        */
    }
}

const s = new Socket();
s.start();
