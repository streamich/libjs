# Synchronous System Calls

This library depends on `process.syscall`, to execute system calls. For Node.js
it can be shimmed using `libsys` package.

```js
require('libsys/shim');
```


# Reference

- __Files__
   - [`read`](./syscalls/read.md)
   - [`write`](./syscalls/write.md)
   - [`open`](./syscalls/open.md)
   - [`close`](./syscalls/close.md)
   - [`access`](./syscalls/ADD.md)
   - [`chmod`](./syscalls/ADD.md)
   - [`fchmod`](./syscalls/ADD.md)
   - [`chown`](./syscalls/ADD.md)
   - [`fchown`](./syscalls/ADD.md)
   - [`lchown`](./syscalls/ADD.md)
   - [`truncate`](./syscalls/ADD.md)
   - [`ftruncate`](./syscalls/ADD.md)
   - [`lseek`](./syscalls/ADD.md)
   - [`rename`](./syscalls/ADD.md)
   - [`fsync`](./syscalls/ADD.md)
   - [`fdatasync`](./syscalls/ADD.md)
- __Stats__
   - [`stat`](./syscalls/ADD.md)
   - [`lstat`](./syscalls/ADD.md)
   - [`fstat`](./syscalls/ADD.md)
- __Directories__
   - [`mkdir`](./syscalls/ADD.md)
   - [`mkdirat`](./syscalls/ADD.md)
   - [`rmdir`](./syscalls/ADD.md)
   - [`getcwd`](./syscalls/ADD.md)
   - [`getdents64`](./syscalls/ADD.md)
   - [`readdir`](./syscalls/ADD.md)
   - [`readdirList`](./syscalls/ADD.md)
- __Links__
   - [`symlink`](./syscalls/ADD.md)
   - [`unlink`](./syscalls/ADD.md)
   - [`readlink`](./syscalls/ADD.md)
   - [`link`](./syscalls/ADD.md)
- __Time__
   - [`utime`](./syscalls/ADD.md)
   - [`utimes`](./syscalls/ADD.md)
- __Networking__
   - [`socket`](./syscalls/ADD.md)
   - [`connect`](./syscalls/ADD.md)
   - [`bind`](./syscalls/ADD.md)
   - [`listen`](./syscalls/ADD.md)
   - [`accept`](./syscalls/ADD.md)
   - [`accept4`](./syscalls/ADD.md)
   - [`shutdown`](./syscalls/ADD.md)
   - [`send`](./syscalls/ADD.md)
   - [`sendto`](./syscalls/ADD.md)
   - [`recv`](./syscalls/ADD.md)
   - [`recvfrom`](./syscalls/ADD.md)
   - [`setsockopt`](./syscalls/ADD.md)
- __Process__
   - [`getpid`](./syscalls/ADD.md)
   - [`getppid`](./syscalls/ADD.md)
   - [`getuid`](./syscalls/ADD.md)
   - [`geteuid`](./syscalls/ADD.md)
   - [`getgid`](./syscalls/ADD.md)
   - [`getegid`](./syscalls/ADD.md)
   - [`sched_yield`](./syscalls/ADD.md)
   - [`nanosleep`](./syscalls/ADD.md)
- __Events__
   - [`fcntl`](./syscalls/ADD.md)
   - [`epoll_create`](./syscalls/ADD.md)
   - [`epoll_create1`](./syscalls/ADD.md)
   - [`epoll_wait`](./syscalls/ADD.md)
   - [`epoll_ctl`](./syscalls/ADD.md)
   - [`inotify_init`](./syscalls/ADD.md)
   - [`inotify_init1`](./syscalls/ADD.md)
   - [`inotify_add_watch`](./syscalls/ADD.md)
   - [`inotify_rm_watch`](./syscalls/ADD.md)
- __Memory__
   - [`mmap`](./syscalls/ADD.md)
   - [`munmap`](./syscalls/ADD.md)
   - [`mprotect`](./syscalls/ADD.md)
   - [`shmget`](./syscalls/ADD.md)
   - [`shmat`](./syscalls/ADD.md)
   - [`shmdt`](./syscalls/ADD.md)
   - [`shmctl`](./syscalls/ADD.md)
