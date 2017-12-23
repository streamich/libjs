# libjs

POSIX/Linux system call API implemented in JavaScript (*Typescript*).

This lib uses [`libsys`](http://www.npmjs.com/package/libsys) to execute system calls from JavaScript.

This is part of [`jskernel`](http://www.npmjs.com/package/jskernel) project which long-term goal is to make Node.js dependency free.

This library is in prototype stage, some things may not work, very little error
checking, API will change.

## Examples

See [`libaio`] for *asynchronous* implementation of sockets using `libjs`.
Below are some basic *synchronous (blocking)* examples.

Read from file:

```ts
import * as libjs from 'libjs';

var filepath = '/share/libsys/examples/read.txt';
var fd = libjs.open(filepath, libsys.FLAG.O_RDONLY);
if(fd > -1) {
    var buf = new Buffer(1024);
    var bytes_read = libjs.read(fd, buf);
    console.log('Bytes read: ', bytes_read);
    console.log(buf.toString().substr(0, bytes_read));
} else {
    console.log('Error: ', fd);
}
```

Run `stat()` on file:

```ts
import * as libjs from 'libjs';
import * as fs from 'fs';

var filepath = '/share/libsys/examples/read.txt';
var stats = libjs.stat(filepath);
console.log(stats);
console.log(fs.statSync(filepath));
```

Execute simple HTTP `GET` request:

```ts
import * as libjs from 'libjs';

var fd = libjs.socket(libjs.AF.INET, libjs.SOCK.STREAM, 0);

var addr_in: libjs.sockaddr_in = {
    sin_family: libjs.AF.INET,
    sin_port: libjs.htons32(80),
    sin_addr: {
        s_addr: new libjs.Ipv4('192.168.1.150'),
    },
    sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
};

libjs.connect(fd, addr_in);
libjs.write(fd, 'GET / \n\n');

setTimeout(() => {
    var buf = new Buffer(1000);
    var bytes = libjs.read(fd, buf);
    console.log(buf.toString().substr(0, bytes));
    libjs.close(fd);
}, 20);
```

A basic *echo* server:

```ts
import * as libjs from 'libjs';

var fd = libjs.socket(libjs.AF.INET, libjs.SOCK.STREAM, 0);

var serv_addr: libjs.sockaddr_in = {
    sin_family: libjs.AF.INET,
    sin_port: libjs.hton16(8080),
    sin_addr: {
        s_addr: new libjs.Ipv4('0.0.0.0'),
    },
    sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
};
libjs.bind(fd, serv_addr);
libjs.listen(fd, 10);


var client_addr_buf = new Buffer(libjs.sockaddr_in.size);
var sock = libjs.accept(fd, client_addr_buf);

setInterval(() => {
    var msg = new Buffer(255);
    var bytes = libjs.read(sock, msg);
    var str = msg.toString().substr(0, bytes);
    libjs.write(sock, str);
}, 20);

// Now telnet to your server and talk to it:
// telnet 127.0.0.1 8080
```

## Reference

```ts
read(fd: number, buf: Buffer): number;
write(fd: number, buf: string|Buffer): number;
open (pathname: string, flags: defs.FLAG, mode?: defs.MODE): number;
close(fd: number): number;
stat(filepath: string): defs.stat;
lstat(linkpath: string): defs.stat;
function fstat(fd: number): defs.stat;
lseek(fd: number, offset: number, whence: number): number;
mmap(addr: number, length: number, prot: number, flags: number, fd: number, offset: number): number;
munmap(addr: Buffer, length: number): number;
socket(domain: defs.AF, type: defs.SOCK, protocol: number): number;
connect(fd: number, sockaddr: defs.sockaddr_in): number;
bind(fd: number, sockaddr: defs.sockaddr_in): number;
listen(fd: number, backlog: number): number;
accept(fd: number, buf: Buffer): number;
accept4(fd: number, buf: Buffer, flags: defs.SOCK): number;
shutdown(fd: number, how: defs.SHUT): number;
sendto(fd: number, buf: Buffer, flags: defs.MSG = 0, addr?: defs.sockaddr): number;
send(fd: number, buf: Buffer, flags: defs.MSG = 0): number;
getpid();
getppid();
getuid();
geteuid();
getgid();
getegid();
fcntl(fd: number, cmd: defs.FCNTL, arg?: number): number;
epoll_create(size: number): number;
epoll_create1(flags: defs.EPOLL): number;
epoll_wait(epfd: number, buf: Buffer, maxevents: number, timeout: number): number;
epoll_ctl(epfd: number, op: defs.EPOLL_CTL, fd: number, epoll_event: defs.epoll_event): number;
```
