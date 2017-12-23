// Sockets
import {SYS, AF, MSG, SOCK, SHUT, IP, IPV6, SO, sockaddr_in, Isockaddr_in, int32} from './platform';
import {Struct} from './typebase';


// ## socket
//
//     socket(domain: defs.AF, type: defs.SOCK, protocol: number): number
//
// In `libc`:
//
//     int socket(int domain, int type, int protocol);
//
// Create an endpoint for communication. On success, a file descriptor for the new socket is returned. On
// error, `errno` is returned.
//
// Useful references:
//  - [Linux socket implementation](https://github.com/torvalds/linux/blob/master/net/socket.c)
//  - [Asynchronous IO introduction](http://www.wangafu.net/~nickm/libevent-book/01_intro.html)
//  - [Asynchronous IO with `epoll` example](https://banu.com/blog/2/how-to-use-epoll-a-complete-example-in-c/epoll-example.c)
//
export function socket(domain: AF, type: SOCK, protocol: number): number {
    return process.syscall(SYS.socket, domain, type, protocol);
}
export function socketAsync(domain: AF, type: SOCK, protocol: number, callback: TCallback) {
    process.asyscall(SYS.socket, domain, type, protocol, callback);
}

// ## connect
//
//     connect(fd: number, sockaddr: defs.sockaddr_in): number
//
// In `libc`:
//
//     int connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));
//
// Initiate a connection on a socket.
//
export function connect(fd: number, sockaddr: Isockaddr_in): number {
    const buf = sockaddr_in.pack(sockaddr);
    return process.syscall(SYS.connect, fd, buf, buf.length);
}
export function connectAsync(fd: number, sockaddr: Isockaddr_in, callback: TCallback) {
    const buf = sockaddr_in.pack(sockaddr);
    process.asyscall(SYS.connect, fd, buf, buf.length, callback);
}

// ## bind
//
//     bind(fd: number, sockaddr: defs.sockaddr_in): number
//
// In `libc`, see [bind(2)](http://man7.org/linux/man-pages/man2/bind.2.html):
//
//     int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
//
// Bind a name to a socket. On success, zero is returned.
//
export function bind(fd: number, sockaddr: Isockaddr_in, addr_type: Struct): number {
    const buf = addr_type.pack(sockaddr);
    return process.syscall(SYS.bind, fd, buf, buf.length);
}
export function bindAsync(fd: number, sockaddr: Isockaddr_in, addr_type: Struct, callback: TCallback) {
    const buf = addr_type.pack(sockaddr);
    process.asyscall(SYS.bind, fd, buf, buf.length, callback);
}

// ## listen
//
//     int listen(int sockfd, int backlog);
//
export function listen(fd: number, backlog: number): number {
    return process.syscall(SYS.listen, fd, backlog);
}
export function listenAsync(fd: number, backlog: number, callback: TCallback) {
    process.asyscall(SYS.listen, fd, backlog, callback);
}

// ## accept
//
//     int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen);
//     int accept4(int sockfd, struct sockaddr *addr, socklen_t *addrlen, int flags);
//
export function accept(fd: number, buf: Buffer): number {
    const buflen = int32.pack(buf.length);
    return process.syscall(SYS.accept, fd, buf, buflen);
}
export function acceptAsync(fd: number, buf: Buffer, callback: TCallback) {
    const buflen = int32.pack(buf.length);
    process.asyscall(SYS.accept, fd, buf, buflen, callback);
}
export function accept4(fd: number, buf: Buffer, flags: SOCK): number {
    const buflen = int32.pack(buf.length);
    return process.syscall(SYS.accept4, fd, buf, buflen, flags);
}
export function accept4Async(fd: number, buf: Buffer, flags: SOCK, callback: TCallback) {
    const buflen = int32.pack(buf.length);
    process.asyscall(SYS.accept4, fd, buf, buflen, flags, callback);
}

// ## shutdown
//
export function shutdown(fd: number, how: SHUT): number {
    return process.syscall(SYS.shutdown, fd, how);
}
export function shutdownAsync(fd: number, how: SHUT, callback: TCallback) {
    process.asyscall(SYS.shutdown, fd, how, callback);
}

// ## send and sendto
//
//     send(fd: number, buf: Buffer, flags: defs.MSG = 0): number
//     sendto(fd: number, buf: Buffer, flags: defs.MSG = 0, addr?: defs.sockaddr_in, addr_type?: Struct): number
//
// `send` is simply a proxy for `sendto` without the last two arguments.
//
// In `libc`, see [sendto(2)](http://man7.org/linux/man-pages/man2/sendto.2.html):
//
// ```c
// ssize_t send(int sockfd, const void *buf, size_t len, int flags);
// ssize_t sendto(int sockfd, const void *buf, size_t len, int flags,
// ```
//
// Send a message on a socket.
//
export function send(fd: number, buf: Buffer, flags: MSG = 0): number {
    return sendto(fd, buf, flags);
}
export function sendAsync(fd: number, buf: Buffer, flags: MSG = 0, callback: TCallback) {
    sendtoAsync(fd, buf, flags, null, null, callback);
}
export function sendto(fd: number, buf: Buffer, flags: MSG = 0, addr?: Isockaddr_in, addr_type?: Struct): number {
    var params: any = [SYS.sendto, fd, buf, buf.length, flags, 0, 0];
    if(addr) {
        var addrbuf = addr_type.pack(addr);
        params[5] = addrbuf;
        params[6] = addrbuf.length;
    }
    return process.syscall.apply(null, params);
}
export function sendtoAsync(fd: number, buf: Buffer, flags: MSG = 0, addr: Isockaddr_in, addr_type: Struct, callback: TCallback) {
    const params: any = [SYS.sendto, fd, buf, buf.length, flags, 0, 0, callback];
    if(addr) {
        const addrbuf = addr_type.pack(addr);
        params[5] = addrbuf;
        params[6] = addrbuf.length;
    }
    process.syscall.apply(null, params);
}


// ## recv and recvfrom
//
// In `libc`, [recv(2)]():
//
//     ssize_t recv(int sockfd, void *buf, size_t len, int flags);
//     ssize_t recvfrom(int sockfd, void *buf, size_t len, int flags, struct sockaddr *src_addr, socklen_t *addrlen);
//     ssize_t recvfrom(int s, void *buf, size_t len, int flags, struct sockaddr *from, socklen_t *fromlen);
//
// Receive a message from a socket. These calls return the number of bytes received.
//
export function recv(sockfd: number, buf: Buffer, flags: number = 0): number {
    return recvfrom(sockfd, buf, buf.length, flags, 0, 0);
}
export function recvfrom(sockfd: number, buf: TAddress, len: number, flags: number, addr: TAddress, addrlen: TAddress): number {
    return process.syscall(SYS.recvfrom, sockfd, buf, len, flags, addr, addrlen);
}


// ## setsockopt and getsockopt
//
// In `libc`, see [getsockopt(2)](http://man7.org/linux/man-pages/man2/getsockopt.2.html):
//
//     int setsockopt(int sockfd, int level, int optname, const void *optval, socklen_t optlen);
//     int getsockopt(int sockfd, int level, int optname, void *optval, socklen_t *optlen);
//
export function setsockopt(sockfd: number, level: number, optname: IP | IPV6 | SO, optval: Buffer): number {
    return process.syscall(SYS.setsockopt, sockfd, level, optname, optval, optval.length);
}

// TODO: implement the below.
// export function setsockoptAsync(sockfd: number, level: number, optname: number, optval: Buffer, callback: Tcallback) {
//     p.asyscall(SYS.setsockopt, sockfd, level, optname, optval, optval.length, callback);
// }
// export function getsockopt(sockfd: number, level: number, optname: number, optval: Buffer): number {
// debug('getsockopt', sockfd, level, optname, optval.length);
// }
