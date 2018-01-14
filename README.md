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
To execute *asynchronous* system calls, it uses `libsys.asyscall` function, however, `libsys` library does not provide
that, you can use [`asyscall`](https://github.com/streamich/asyscall) to shime asynchronous system call function.

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

  - [`read`](./docs/reference/read.md)
  - [`readAsync`](./docs/reference/readAsync.md)
  - `write`
  - `writeAsync`
  - `open`
  - `openAsync`
  - `close`
  - `closeAsync`
  - `access`
  - `accessAsync`
  - `chmod`
  - `chmodAsync`
  - `fchmod`
  - `fchmodAsync`
  - `chown`
  - `chownAsync`
  - `fchown`
  - `fchownAsync`
  - `lchown`
  - `lchownAsync`
  - `truncate`
  - `truncateAsync`
  - `ftruncate`
  - `ftruncateAsync`
  - `lseek`
  - `lseekAsync`
  - `rename`
  - `renameAsync`
  - `fsync`
  - `fsyncAsync`
  - `fdatasync`
  - `fdatasyncAsync`
  - `stat`
  - `statAsync`
  - `lstat`
  - `lstatAsync`
  - `fstat`
  - `fstatAsync`
  - `mkdir`
  - `mkdirAsync`
  - `mkdirat`
  - `mkdiratAsync`
  - `rmdir`
  - `rmdirAsync`
  - `getcwd`
  - `getcwdAsync`
  - `getdents64`
  - `getdents64Async`
  - `readdir`
  - `readdirList`
  - `readdirListAsync`
  - `symlink`
  - `symlinkAsync`
  - `unlink`
  - `unlinkAsync`
  - `readlink`
  - `readlinkAsync`
  - `link`
  - `linkAsync`
  - `utime`
  - `utimeAsync`
  - `utimes`
  - `utimesAsync`
  - `socket`
  - `socketAsync`
  - `connect`
  - `connectAsync`
  - `bind`
  - `bindAsync`
  - `listen`
  - `listenAsync`
  - `accept`
  - `acceptAsync`
  - `accept4`
  - `accept4Async`
  - `shutdown`
  - `shutdownAsync`
  - `send`
  - `sendAsync`
  - `sendto`
  - `sendtoAsync`
  - `recv`
  - `recvfrom`
  - `setsockopt`
  - `getpid`
  - `getpidAsync`
  - `getppid`
  - `getppidAsync`
  - `getuid`
  - `getuidAsync`
  - `geteuid`
  - `geteuidAsync`
  - `getgid`
  - `getgidAsync`
  - `getegid`
  - `getegidAsync`
  - `sched_yield`
  - `nanosleep`
  - `fcntl`
  - `epoll_create`
  - `epoll_create1`
  - `epoll_wait`
  - `epoll_ctl`
  - `inotify_init`
  - `inotify_init1`
  - `inotify_add_watch`
  - `inotify_rm_watch`
  - `mmap`
  - `munmap`
  - `mprotect`
  - `shmget`
  - `shmat`
  - `shmdt`
  - `shmctl`
  - Sockets
    - `flip`
    - `htons32`
    - `hton16`
    - `htons`
    - `Ip`
    - `Ipv4`
    - `Ipv6`


## License

[Unlicense](./LICENSE) - public domain.



[npm-url]: https://www.npmjs.com/package/libjs
[npm-badge]: https://img.shields.io/npm/v/libjs.svg
[travis-url]: https://travis-ci.org/streamich/libjs
[travis-badge]: https://travis-ci.org/streamich/libjs.svg?branch=master

