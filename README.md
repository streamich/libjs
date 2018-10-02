# libjs

[![][npm-badge]][npm-url] [![][travis-badge]][travis-url]

[libc](https://en.wikipedia.org/wiki/C_standard_library) in JavaScript &mdash; **libjs**.


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

  - [`read`](./docs/reference/read.md)
  - [`readAsync`](./docs/reference/readAsync.md)
  - [`write`](./docs/reference/write.md)
  - [`writeAsync`](./docs/reference/writeAsync.md)
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
  - Structs
    - `epoll_event`
    - `in_addr`
    - `inotify_event`
    - `ipc_perm`
    - `ipv4`
    - `linux_dirent64`
    - `shmid_ds`
    - `sigaction`
    - `sockaddr`
    - `sockaddr_in`
    - `statStruct`
    - `timespec`
    - `timeval`
    - `timevalarr`
    - `utimbuf`
  - Sockets
    - `flip`
    - `htons32`
    - `hton16`
    - `htons`
    - `Ip`
    - `Ipv4`
    - `Ipv6`
  - Constants
    - [`AF`](./src/consts/AF.ts)
    - [`AMODE`](./src/consts/AMODE.ts)
    - [`BUS`](./src/consts/BUS.ts)
    - [`CLD`](./src/consts/CLD.ts)
    - [`DT`](./src/consts/DT.ts)
    - [`EPOLL`](./src/consts/EPOLL.ts)
    - [`EPOLL_CTL`](./src/consts/EPOLL_CTL.ts)
    - [`EPOLL_EVENTS`](./src/consts/EPOLL_EVENTS.ts)
    - [`ERROR`](./src/consts/ERROR.ts)
    - [`FCNTL`](./src/consts/FCNTL.ts)
    - [`FD`](./src/consts/FD.ts)
    - [`FLAG`](./src/consts/FLAG.ts)
    - [`FPE`](./src/consts/FPE.ts)
    - [`ILL`](./src/consts/ILL.ts)
    - [`IN`](./src/consts/IN.ts)
    - [`IP`](./src/consts/IP.ts)
    - [`IPC`](./src/consts/IPC.ts)
    - [`IPPROT`](./src/consts/IPPROT.ts)
    - [`IPPROTO`](./src/consts/IPPROTO.ts)
    - [`IPV6`](./src/consts/IPV6.ts)
    - [`MAP`](./src/consts/MAP.ts)
    - [`MCAST`](./src/consts/MCAST.ts)
    - [`MSG`](./src/consts/MSG.ts)
    - [`PF`](./src/consts/PF.ts)
    - [`POLL`](./src/consts/POLL.ts)
    - [`PROT`](./src/consts/PROT.ts)
    - [`S`](./src/consts/S.ts)
    - [`SA`](./src/consts/SA.ts)
    - [`SEEK`](./src/consts/SEEK.ts)
    - [`SEGV`](./src/consts/SEGV.ts)
    - [`SHM`](./src/consts/SHM.ts)
    - [`SHUT`](./src/consts/SHUT.ts)
    - [`SI`](./src/consts/SI.ts)
    - [`SIG`](./src/consts/SIG.ts)
    - [`SIGEV`](./src/consts/SIGEV.ts)
    - [`SO`](./src/consts/SO.ts)
    - [`SOCK`](./src/consts/SOCK.ts)
    - [`SOL`](./src/consts/SOL.ts)
    - [`TRAP`](./src/consts/TRAP.ts)


## License

[Unlicense](./LICENSE) - public domain.



[npm-url]: https://www.npmjs.com/package/libjs
[npm-badge]: https://img.shields.io/npm/v/libjs.svg
[travis-url]: https://travis-ci.org/streamich/libjs
[travis-badge]: https://travis-ci.org/streamich/libjs.svg?branch=master

