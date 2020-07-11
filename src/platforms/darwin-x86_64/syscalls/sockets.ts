import {SYS, AF, MSG, SOCK, SHUT, IP, IPV6, SO, sockaddr_in, Isockaddr_in, int32} from '../specification';
import {Struct} from '../../../typebase';
import {syscall, asyscall} from '../../../libsys';
import {TCallback, TAddress} from '../../../types';

/**
 * Create an endpoint for communication. On success, a file descriptor for the 
 * new socket is returned. On error, `errno` is returned.
 * 
 * In `libc`:
 * 
 * ```c
 * int socket(int domain, int type, int protocol);
 * ```
 * 
 * @param domain 
 * @param type 
 * @param protocol 
 */
export function socket(domain: AF, type: SOCK, protocol: number): number {
    return syscall(SYS.socket, domain, type, protocol);
}

export function socketAsync(domain: AF, type: SOCK, protocol: number, callback: TCallback) {
    asyscall(SYS.socket, domain, type, protocol, callback);
}

/**
 * Initiate a connection on a socket.
 * 
 * In `libc`:
 * 
 * ```c
 * int connect(sockfd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));
 * ```
 * 
 * @param fd 
 * @param sockaddr 
 */
export function connect(fd: number, sockaddr: Isockaddr_in): number {
    const buf = sockaddr_in.pack(sockaddr);
    return syscall(SYS.connect, fd, buf, buf.length);
}

export function connectAsync(fd: number, sockaddr: Isockaddr_in, callback: TCallback) {
    const buf = sockaddr_in.pack(sockaddr);
    asyscall(SYS.connect, fd, buf, buf.length, callback);
}

/**
 * Bind a name to a socket. On success, zero is returned.
 * 
 * In `libc`, see [bind(2)](http://man7.org/linux/man-pages/man2/bind.2.html):
 * 
 * ```c
 * int bind(int sockfd, const struct sockaddr *addr, socklen_t addrlen);
 * ```
 * 
 * @param fd 
 * @param sockaddr 
 * @param addr_type 
 */
export function bind(fd: number, sockaddr: Isockaddr_in, addr_type: Struct): number {
    const buf = addr_type.pack(sockaddr);
    return syscall(SYS.bind, fd, buf, buf.length);
}

export function bindAsync(fd: number, sockaddr: Isockaddr_in, addr_type: Struct, callback: TCallback) {
    const buf = addr_type.pack(sockaddr);
    asyscall(SYS.bind, fd, buf, buf.length, callback);
}

export function listen(fd: number, backlog: number): number {
    return syscall(SYS.listen, fd, backlog);
}

export function listenAsync(fd: number, backlog: number, callback: TCallback) {
    asyscall(SYS.listen, fd, backlog, callback);
}

export function accept(fd: number, buf: Buffer): number {
    const buflen = int32.pack(buf.length);
    return syscall(SYS.accept, fd, buf, buflen);
}

export function acceptAsync(fd: number, buf: Buffer, callback: TCallback) {
    const buflen = int32.pack(buf.length);
    asyscall(SYS.accept, fd, buf, buflen, callback);
}

export function shutdown(fd: number, how: SHUT): number {
    return syscall(SYS.shutdown, fd, how);
}

export function shutdownAsync(fd: number, how: SHUT, callback: TCallback) {
    asyscall(SYS.shutdown, fd, how, callback);
}

/**
 * Send a message on a socket.
 * 
 * @param fd 
 * @param buf 
 * @param flags 
 */
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
    return syscall.apply(null, params);
}

export function sendtoAsync(fd: number, buf: Buffer, flags: MSG = 0, addr: Isockaddr_in, addr_type: Struct, callback: TCallback) {
    const params: any = [SYS.sendto, fd, buf, buf.length, flags, 0, 0, callback];
    if(addr) {
        const addrbuf = addr_type.pack(addr);
        params[5] = addrbuf;
        params[6] = addrbuf.length;
    }
    syscall.apply(null, params);
}

/**
 * Receive a message from a socket. These calls return the number of bytes received.
 * 
 * @param sockfd 
 * @param buf 
 * @param flags 
 */
export function recv(sockfd: number, buf: Buffer, flags: number = 0): number {
    return recvfrom(sockfd, buf, buf.length, flags, 0, 0);
}

export function recvfrom(sockfd: number, buf: TAddress, len: number, flags: number, addr: TAddress, addrlen: TAddress): number {
    return syscall(SYS.recvfrom, sockfd, buf, len, flags, addr, addrlen);
}

export function setsockopt(sockfd: number, level: number, optname: IP | IPV6 | SO, optval: Buffer): number {
    return syscall(SYS.setsockopt, sockfd, level, optname, optval, optval.length);
}

// TODO: implement the below.
// export function setsockoptAsync(sockfd: number, level: number, optname: number, optval: Buffer, callback: Tcallback) {
//     p.asyscall(SYS.setsockopt, sockfd, level, optname, optval, optval.length, callback);
// }
// export function getsockopt(sockfd: number, level: number, optname: number, optval: Buffer): number {
// debug('getsockopt', sockfd, level, optname, optval.length);
// }
