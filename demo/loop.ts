require('libsys/shim');
import {EpollLoop} from '../src/loop/epoll';
import {
    socket, 
    AF, 
    SOCK, 
    fcntl, 
    FCNTL, 
    FLAG, 
    Isockaddr_in, 
    hton16, 
    Ipv4,
    connect,
    ERROR,
    Iepoll_event,
    EPOLL_EVENTS,
    epoll_ctl,
    EPOLL_CTL,
} from '../src';

const loop = new EpollLoop();

console.log(loop);

export class Socket {
    fd: number = 0; // Socket file descriptor.
    // created = false;

    start(port = 8099, host = '0.0.0.0') {
        this.fd = socket(AF.INET, SOCK.STREAM, 0);
        console.log('this.fd', this.fd);
        if (this.fd < 0) throw Error(`Could not create scoket: errno = ${this.fd}`);

        // Socket is not a file, we just created the file descriptor for it, flags
        // for this file descriptor are set to 0 anyways, so we just overwrite 'em,
        // no need to fetch them and OR'em.
        const res = fcntl(this.fd, FCNTL.SETFL, FLAG.O_NONBLOCK);
        if (res < 0) throw Error(`Could not make socket non-blocking: errno = ${fcntl}`);


        // on read check for:
        // EAGAINN and EWOULDBLOCK
        const addr_in: Isockaddr_in = {
            sin_family: AF.INET,
            sin_port: hton16(port),
            sin_addr: {
                s_addr: new Ipv4(host),
            },
            sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
        };
        const connectionRes = connect(this.fd, addr_in);

        // Everything is OK, we are connecting...
        if(connectionRes == -ERROR.EINPROGRESS) {
        } else if (connectionRes < 0) {
            throw Error(`Could no connect: ${connectionRes}`);
        }

        const event: Iepoll_event = {
            events: EPOLL_EVENTS.EPOLLIN | EPOLL_EVENTS.EPOLLOUT,
            data: [this.fd, 0],
        };
        const ctlRes = epoll_ctl(loop.epfd, EPOLL_CTL.ADD, this.fd, event);
        if(ctlRes < 0) throw Error(`Could not add epoll events: errno = ${ctlRes}`);

        loop.run();
    }
}

const s = new Socket();
s.start();
