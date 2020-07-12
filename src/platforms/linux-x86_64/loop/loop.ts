import { Loop, LoopTcpSocket, LoopTcpConnectOptions } from "../../types";
import { epoll_create1, socket, fcntl, connect, epoll_ctl } from '../syscalls';
import { AF, SOCK, FCNTL, O, ERROR } from "../specification";
import { epoll_event, Isockaddr_in, Iepoll_event } from "../structs";
import { hton16, Ipv4 } from "../../../socket";
import { EPOLL_EVENTS, EPOLL_CTL } from "../consts";
import { buffer } from "../../../util";

const MAX_EVENTS = 64;
const epollBuffer = buffer(epoll_event.size * MAX_EVENTS);

export class EpollLoop implements Loop {
    public readonly epfd: number;
    public maxEvents = 64;

    constructor () {
        this.epfd = epoll_create1(0);
        if (this.epfd < 0)
            throw new Error(`Could not create epoll [errno = ${this.epfd}].`);
        
    
        // struct epoll_event event;
        // event.data.fd = sockfd;
        // event.events = EPOLLIN | EPOLLET;
        // int epoll_ctl_res = epoll_ctl(epfd, EPOLL_CTL_ADD, sockfd, &event);
    
        // // events = calloc(MAX_EVENTS, sizeof event);
    
        // printf ("epfd: %i\n", epfd);
        // printf ("sockfd: %i\n", sockfd);
        // printf ("fcntl_res: %i\n", fcntl_res);
        // printf ("epoll_ctl_res: %i\n", epoll_ctl_res);
    
        // printf("allocating: %li\n", MAX_EVENTS * sizeof event);
        // struct epoll_event* events = malloc(MAX_EVENTS * sizeof event);
    }

    setTimeout() { throw new Error('not implemented'); }
    setImmediate() { throw new Error('not implemented'); }

    newTcpSocket(): EpollTcpSocket {
        const socket = new EpollTcpSocket(this);
        return socket;
    };
}

export class EpollTcpSocket implements LoopTcpSocket {
    public readonly fd: number;

    constructor(public readonly loop: EpollLoop) {
        this.fd = socket(AF.INET, SOCK.STREAM, 0);
        if (this.fd < 0) throw new Error(`Could not create socket [errno = ${this.fd}].`);
        const res = fcntl(this.fd, FCNTL.SETFL, O.NONBLOCK);
        if (res < 0) throw new Error(`Could not make socket non-blocking [errno = ${res}].`);
    }

    bind() {

    }

    connect({port, host}: LoopTcpConnectOptions) {
        const addr_in: Isockaddr_in = {
            sin_family: AF.INET,
            sin_port: hton16(port),
            sin_addr: {
                s_addr: new Ipv4(host),
            },
            sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
        };
        
        const res = connect(this.fd, addr_in);
        if (res < 0)
            if (res !== -ERROR.EINPROGRESS)
                throw new Error(`Could not connect socket [errno = ${res}].`);

        const event: Iepoll_event = {
            events: EPOLL_EVENTS.EPOLLIN | EPOLL_EVENTS.EPOLLOUT,
            data: [this.fd, 0],
        };
        const ctlRes = epoll_ctl(this.loop.epfd, EPOLL_CTL.ADD, this.fd, event);
        if (ctlRes < 0)
            throw Error(`Could not add epoll events [errno = ${ctlRes}].`);
    }

    getPeerName() { throw new Error('not implemented'); return null as any; }
    getSocketName() { throw new Error('not implemented'); return null as any; }
    keepalive() { throw new Error('not implemented'); }
    nodelay() { throw new Error('not implemented'); }
    open() { throw new Error('not implemented'); }
}
