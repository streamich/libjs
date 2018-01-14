# libjs

[![][npm-badge]][npm-url] [![][travis-badge]][travis-url]

[libc](https://en.wikipedia.org/wiki/C_standard_library) in JavaScript - `libjs`.

> This library is part of [`jskernel`](http://www.npmjs.com/package/jskernel) project which long-term goal is to make Node.js dependency free.


## Usage

```shell
npm install libjs
```

This library uses [`libsys`](http://www.npmjs.com/package/libsys) to execute system calls from JavaScript.

It expects your environment has `libsys` global object, in Node.js you can shim `libsys` as follows:

```js
require('libsys/shim');
```


## Examples

Read from a file

```ts
require('libsys/shim');
const libjs = require('libjs');

const O_RDONLY = 0;
const fd = libjs.open(__filename, O_RDONLY);

if(fd > -1) {
    const buf = new Buffer(1024);
    const bytes_read = libjs.read(fd, buf);

    console.log('Bytes read: ', bytes_read);
    console.log(buf.toString().substr(0, bytes_read));
} else {
    console.log('Error: ', fd);
}
```

Run `stat()` on a file

```ts
const stats = libjs.stat(__filename);

console.log(stats);
console.log(require('fs').statSync(__filename));
```

A basic *echo* server

```ts
const IP = '0.0.0.0';
const PORT = 8080;

const AF_INET = 2;
const SOCK_STREAM = 1;

const fd = libjs.socket(AF_INET, SOCK_STREAM, 0);

const serv_addr = {
    sin_family: AF_INET,
    sin_port: libjs.hton16(PORT),
    sin_addr: {
        s_addr: new libjs.Ipv4(IP),
    },
    sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
};

libjs.bind(fd, serv_addr, libjs.sockaddr_in);
libjs.listen(fd, 10);

const client_addr_buf = new Buffer(libjs.sockaddr_in.size);
const sock = libjs.accept(fd, client_addr_buf);

setInterval(() => {
    const msg = new Buffer(255);
    const bytes = libjs.read(sock, msg);
    const str = msg.toString().substr(0, bytes) + ' to you!';

    libjs.write(sock, str);
}, 20);
```

Now telnet to your server and send it a message

```shell
telnet 127.0.0.1 8080
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



## License

[Unlicense](./LICENSE) - public domain.



[npm-url]: https://www.npmjs.com/package/libjs
[npm-badge]: https://img.shields.io/npm/v/libjs.svg
[travis-url]: https://travis-ci.org/streamich/libjs
[travis-badge]: https://travis-ci.org/streamich/libjs.svg?branch=master

