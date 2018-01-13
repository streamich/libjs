"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sockets
var platform_1 = require("./platform");
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
function socket(domain, type, protocol) {
    return libsys.syscall(platform_1.SYS.socket, domain, type, protocol);
}
exports.socket = socket;
function socketAsync(domain, type, protocol, callback) {
    libsys.asyscall(platform_1.SYS.socket, domain, type, protocol, callback);
}
exports.socketAsync = socketAsync;
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
function connect(fd, sockaddr) {
    var buf = platform_1.sockaddr_in.pack(sockaddr);
    return libsys.syscall(platform_1.SYS.connect, fd, buf, buf.length);
}
exports.connect = connect;
function connectAsync(fd, sockaddr, callback) {
    var buf = platform_1.sockaddr_in.pack(sockaddr);
    libsys.asyscall(platform_1.SYS.connect, fd, buf, buf.length, callback);
}
exports.connectAsync = connectAsync;
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
function bind(fd, sockaddr, addr_type) {
    var buf = addr_type.pack(sockaddr);
    return libsys.syscall(platform_1.SYS.bind, fd, buf, buf.length);
}
exports.bind = bind;
function bindAsync(fd, sockaddr, addr_type, callback) {
    var buf = addr_type.pack(sockaddr);
    libsys.asyscall(platform_1.SYS.bind, fd, buf, buf.length, callback);
}
exports.bindAsync = bindAsync;
// ## listen
//
//     int listen(int sockfd, int backlog);
//
function listen(fd, backlog) {
    return libsys.syscall(platform_1.SYS.listen, fd, backlog);
}
exports.listen = listen;
function listenAsync(fd, backlog, callback) {
    libsys.asyscall(platform_1.SYS.listen, fd, backlog, callback);
}
exports.listenAsync = listenAsync;
// ## accept
//
//     int accept(int sockfd, struct sockaddr *addr, socklen_t *addrlen);
//     int accept4(int sockfd, struct sockaddr *addr, socklen_t *addrlen, int flags);
//
function accept(fd, buf) {
    var buflen = platform_1.int32.pack(buf.length);
    return libsys.syscall(platform_1.SYS.accept, fd, buf, buflen);
}
exports.accept = accept;
function acceptAsync(fd, buf, callback) {
    var buflen = platform_1.int32.pack(buf.length);
    libsys.asyscall(platform_1.SYS.accept, fd, buf, buflen, callback);
}
exports.acceptAsync = acceptAsync;
function accept4(fd, buf, flags) {
    var buflen = platform_1.int32.pack(buf.length);
    return libsys.syscall(platform_1.SYS.accept4, fd, buf, buflen, flags);
}
exports.accept4 = accept4;
function accept4Async(fd, buf, flags, callback) {
    var buflen = platform_1.int32.pack(buf.length);
    libsys.asyscall(platform_1.SYS.accept4, fd, buf, buflen, flags, callback);
}
exports.accept4Async = accept4Async;
// ## shutdown
//
function shutdown(fd, how) {
    return libsys.syscall(platform_1.SYS.shutdown, fd, how);
}
exports.shutdown = shutdown;
function shutdownAsync(fd, how, callback) {
    libsys.asyscall(platform_1.SYS.shutdown, fd, how, callback);
}
exports.shutdownAsync = shutdownAsync;
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
function send(fd, buf, flags) {
    if (flags === void 0) { flags = 0; }
    return sendto(fd, buf, flags);
}
exports.send = send;
function sendAsync(fd, buf, flags, callback) {
    if (flags === void 0) { flags = 0; }
    sendtoAsync(fd, buf, flags, null, null, callback);
}
exports.sendAsync = sendAsync;
function sendto(fd, buf, flags, addr, addr_type) {
    if (flags === void 0) { flags = 0; }
    var params = [platform_1.SYS.sendto, fd, buf, buf.length, flags, 0, 0];
    if (addr) {
        var addrbuf = addr_type.pack(addr);
        params[5] = addrbuf;
        params[6] = addrbuf.length;
    }
    return libsys.syscall.apply(null, params);
}
exports.sendto = sendto;
function sendtoAsync(fd, buf, flags, addr, addr_type, callback) {
    if (flags === void 0) { flags = 0; }
    var params = [platform_1.SYS.sendto, fd, buf, buf.length, flags, 0, 0, callback];
    if (addr) {
        var addrbuf = addr_type.pack(addr);
        params[5] = addrbuf;
        params[6] = addrbuf.length;
    }
    libsys.syscall.apply(null, params);
}
exports.sendtoAsync = sendtoAsync;
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
function recv(sockfd, buf, flags) {
    if (flags === void 0) { flags = 0; }
    return recvfrom(sockfd, buf, buf.length, flags, 0, 0);
}
exports.recv = recv;
function recvfrom(sockfd, buf, len, flags, addr, addrlen) {
    return libsys.syscall(platform_1.SYS.recvfrom, sockfd, buf, len, flags, addr, addrlen);
}
exports.recvfrom = recvfrom;
// ## setsockopt and getsockopt
//
// In `libc`, see [getsockopt(2)](http://man7.org/linux/man-pages/man2/getsockopt.2.html):
//
//     int setsockopt(int sockfd, int level, int optname, const void *optval, socklen_t optlen);
//     int getsockopt(int sockfd, int level, int optname, void *optval, socklen_t *optlen);
//
function setsockopt(sockfd, level, optname, optval) {
    return libsys.syscall(platform_1.SYS.setsockopt, sockfd, level, optname, optval, optval.length);
}
exports.setsockopt = setsockopt;
// TODO: implement the below.
// export function setsockoptAsync(sockfd: number, level: number, optname: number, optval: Buffer, callback: Tcallback) {
//     p.asyscall(SYS.setsockopt, sockfd, level, optname, optval, optval.length, callback);
// }
// export function getsockopt(sockfd: number, level: number, optname: number, optval: Buffer): number {
// debug('getsockopt', sockfd, level, optname, optval.length);
// }
