# libjs

[![][npm-badge]][npm-url] [![][travis-badge]][travis-url]

[libc](https://en.wikipedia.org/wiki/C_standard_library) in JavaScript&mdash;**libjs**.


## Usage

```shell
npm install libjs
```

This library uses [`libsys`](https://github.com/streamich/libsys) to execute system calls from JavaScript.
It expects your environment has `libsys` global object, in Node.js you can shim `libsys` as follows:

```js
require('libsys/shim');
```

To execute *asynchronous* system calls, `libjs` uses `libsys.asyscall()` function, however, `libsys` library does not provide
that, you can use [`asyscall`](https://github.com/streamich/asyscall) to shim *asynchronous* system call function.


## Examples

- [Write to console](./docs/examples/write-to-console.md)
- [Read from a file](./docs/examples/read-file.md)
- [Run `stat()` on  a file](./docs/examples/stat.md)
- [Create a basic server`](./docs/examples/server.md)


## Reference

- Synchronous system calls
   - [`read`](./docs/reference/read.md),
     [`write`](./docs/reference/write.md),
     [`open`](./docs/reference/open.md),
     [`close`](./docs/reference/close.md),
     [`access`](./docs/reference/ADD.md),
     [`chmod`](./docs/reference/ADD.md),
     [`fchmod`](./docs/reference/ADD.md),
     [`chown`](./docs/reference/ADD.md),
     [`fchown`](./docs/reference/ADD.md),
     [`lchown`](./docs/reference/ADD.md),
     [`truncate`](./docs/reference/ADD.md),
     [`ftruncate`](./docs/reference/ADD.md),
     [`lseek`](./docs/reference/ADD.md),
     [`rename`](./docs/reference/ADD.md),
     [`fsync`](./docs/reference/ADD.md),
     [`fdatasync`](./docs/reference/ADD.md)
   - [`stat`](./docs/reference/ADD.md),
     [`lstat`](./docs/reference/ADD.md),
     and [`fstat`](./docs/reference/ADD.md)
   - [`mkdir`](./docs/reference/ADD.md),
     [`mkdirat`](./docs/reference/ADD.md),
     [`rmdir`](./docs/reference/ADD.md),
     [`getcwd`](./docs/reference/ADD.md),
     [`getdents64`](./docs/reference/ADD.md),
     [`readdir`](./docs/reference/ADD.md),
     and [`readdirList`](./docs/reference/ADD.md)
   - [`symlink`](./docs/reference/ADD.md),
     [`unlink`](./docs/reference/ADD.md),
     [`readlink`](./docs/reference/ADD.md),
     and [`link`](./docs/reference/ADD.md)
   - [`utime`](./docs/reference/ADD.md) and [`utimes`](./docs/reference/ADD.md)
   - [`socket`](./docs/reference/ADD.md),
     [`connect`](./docs/reference/ADD.md),
     [`bind`](./docs/reference/ADD.md),
     [`listen`](./docs/reference/ADD.md),
     [`accept`](./docs/reference/ADD.md),
     [`accept4`](./docs/reference/ADD.md),
     [`shutdown`](./docs/reference/ADD.md),
     [`send`](./docs/reference/ADD.md),
     [`sendto`](./docs/reference/ADD.md),
     [`recv`](./docs/reference/ADD.md),
     [`recvfrom`](./docs/reference/ADD.md),
     and [`setsockopt`](./docs/reference/ADD.md)
   - [`getpid`](./docs/reference/ADD.md),
     [`getppid`](./docs/reference/ADD.md),
     [`getuid`](./docs/reference/ADD.md),
     [`geteuid`](./docs/reference/ADD.md),
     [`getgid`](./docs/reference/ADD.md),
     [`getegid`](./docs/reference/ADD.md),
     [`sched_yield`](./docs/reference/ADD.md),
     and [`nanosleep`](./docs/reference/ADD.md)
   - [`fcntl`](./docs/reference/ADD.md),
     [`epoll_create`](./docs/reference/ADD.md),
     [`epoll_create1`](./docs/reference/ADD.md),
     [`epoll_wait`](./docs/reference/ADD.md),
     [`epoll_ctl`](./docs/reference/ADD.md),
     [`inotify_init`](./docs/reference/ADD.md),
     [`inotify_init1`](./docs/reference/ADD.md),
     [`inotify_add_watch`](./docs/reference/ADD.md),
     and [`inotify_rm_watch`](./docs/reference/ADD.md)
   - [`mmap`](./docs/reference/ADD.md),
     [`munmap`](./docs/reference/ADD.md),
     [`mprotect`](./docs/reference/ADD.md),
     [`shmget`](./docs/reference/ADD.md),
     [`shmat`](./docs/reference/ADD.md),
     [`shmdt`](./docs/reference/ADD.md),
     and [`shmctl`](./docs/reference/ADD.md)
- Asynchronous system calls
   - [`readAsync`](./docs/reference/readAsync.md),
     [`writeAsync`](./docs/reference/writeAsync.md),
     [`openAsync`](./docs/reference/openAsync.md),
     [`closeAsync`](./docs/reference/closeAsync.md),
     [`accessAsync`](./docs/reference/ADD.md),
     [`chmodAsync`](./docs/reference/ADD.md),
     [`fchmodAsync`](./docs/reference/ADD.md),
     [`chownAsync`](./docs/reference/ADD.md),
     [`fchownAsync`](./docs/reference/ADD.md),
     [`lchownAsync`](./docs/reference/ADD.md),
     [`truncateAsync`](./docs/reference/ADD.md),
     [`ftruncateAsync`](./docs/reference/ADD.md),
     [`lseekAsync`](./docs/reference/ADD.md),
     [`renameAsync`](./docs/reference/ADD.md),
     [`fsyncAsync`](./docs/reference/ADD.md),
     [`fdatasyncAsync`](./docs/reference/ADD.md)
   - [`statAsync`](./docs/reference/ADD.md),
     [`lstatAsync`](./docs/reference/ADD.md),
     and [`fstatAsync`](./docs/reference/ADD.md)
   - [`mkdirAsync`](./docs/reference/ADD.md),
     [`mkdiratAsync`](./docs/reference/ADD.md),
     [`rmdirAsync`](./docs/reference/ADD.md),
     [`getcwdAsync`](./docs/reference/ADD.md),
     [`getdents64Async`](./docs/reference/ADD.md),
     and [`readdirListAsync`](./docs/reference/ADD.md)
   - [`symlinkAsync`](./docs/reference/ADD.md),
     [`unlinkAsync`](./docs/reference/ADD.md),
     [`readlinkAsync`](./docs/reference/ADD.md),
     and [`linkAsync`](./docs/reference/ADD.md)
   - [`utimeAsync`](./docs/reference/ADD.md) and [`utimesAsync`](./docs/reference/ADD.md)
   - [`socketAsync`](./docs/reference/ADD.md),
     [`connectAsync`](./docs/reference/ADD.md),
     [`bindAsync`](./docs/reference/ADD.md),
     [`listenAsync`](./docs/reference/ADD.md),
     [`acceptAsync`](./docs/reference/ADD.md),
     [`accept4Async`](./docs/reference/ADD.md),
     [`shutdownAsync`](./docs/reference/ADD.md),
     [`sendAsync`](./docs/reference/ADD.md)
     and [`sendtoAsync`](./docs/reference/ADD.md),
   - [`getpidAsync`](./docs/reference/ADD.md),
     [`getppidAsync`](./docs/reference/ADD.md),
     [`getuidAsync`](./docs/reference/ADD.md),
     [`geteuidAsync`](./docs/reference/ADD.md),
     [`getgidAsync`](./docs/reference/ADD.md),
     and [`getegidAsync`](./docs/reference/ADD.md),
- Structs
   - `epoll_event`,
     `in_addr`,
     `inotify_event`,
     `ipc_perm`,
     `ipv4`,
     `linux_dirent64`,
     `shmid_ds`,
     `sigaction`,
     `sockaddr`,
     `sockaddr_in`,
     `statStruct`,
     `timespec`,
     `timeval`,
     `timevalarr`,
     `utimbuf`
- Sockets
   - `flip`,
     `htons32`,
     `hton16`,
     `htons`,
     `Ip`,
     `Ipv4`,
     and `Ipv6`,
- Constants
   - [`AF`](./src/consts/AF.ts),
     [`AMODE`](./src/consts/AMODE.ts),
     [`BUS`](./src/consts/BUS.ts),
     [`CLD`](./src/consts/CLD.ts),
     [`DT`](./src/consts/DT.ts),
     [`EPOLL`](./src/consts/EPOLL.ts),
     [`EPOLL_CTL`](./src/consts/EPOLL_CTL.ts),
     [`EPOLL_EVENTS`](./src/consts/EPOLL_EVENTS.ts),
     [`ERROR`](./src/consts/ERROR.ts),
     [`FCNTL`](./src/consts/FCNTL.ts),
     [`FD`](./src/consts/FD.ts),
     [`FLAG`](./src/consts/FLAG.ts),
     [`FPE`](./src/consts/FPE.ts),
     [`ILL`](./src/consts/ILL.ts),
     [`IN`](./src/consts/IN.ts),
     [`IP`](./src/consts/IP.ts),
     [`IPC`](./src/consts/IPC.ts),
     [`IPPROT`](./src/consts/IPPROT.ts),
     [`IPPROTO`](./src/consts/IPPROTO.ts),
     [`IPV6`](./src/consts/IPV6.ts),
     [`MAP`](./src/consts/MAP.ts),
     [`MCAST`](./src/consts/MCAST.ts),
     [`MSG`](./src/consts/MSG.ts),
     [`PF`](./src/consts/PF.ts),
     [`POLL`](./src/consts/POLL.ts),
     [`PROT`](./src/consts/PROT.ts),
     [`S`](./src/consts/S.ts),
     [`SA`](./src/consts/SA.ts),
     [`SEEK`](./src/consts/SEEK.ts),
     [`SEGV`](./src/consts/SEGV.ts),
     [`SHM`](./src/consts/SHM.ts),
     [`SHUT`](./src/consts/SHUT.ts),
     [`SI`](./src/consts/SI.ts),
     [`SIG`](./src/consts/SIG.ts),
     [`SIGEV`](./src/consts/SIGEV.ts),
     [`SO`](./src/consts/SO.ts),
     [`SOCK`](./src/consts/SOCK.ts),
     [`SOL`](./src/consts/SOL.ts),
     [`TRAP`](./src/consts/TRAP.ts)


## License

[Unlicense](./LICENSE) - public domain.



[npm-url]: https://www.npmjs.com/package/libjs
[npm-badge]: https://img.shields.io/npm/v/libjs.svg
[travis-url]: https://travis-ci.org/streamich/libjs
[travis-badge]: https://travis-ci.org/streamich/libjs.svg?branch=master

