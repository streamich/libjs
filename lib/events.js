"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Events
var platform_1 = require("./platform");
// ### fcntl
function fcntl(fd, cmd, arg) {
    var params = [platform_1.SYS.fcntl, fd, cmd];
    if (typeof arg !== 'undefined')
        params.push(arg);
    return libsys.syscall.apply(null, params);
}
exports.fcntl = fcntl;
// ### epoll_create
//
// Size is ignored, but must be greater than 0.
//
// In `libc`:
//
//     int epoll_create(int size);
//
function epoll_create(size) {
    return libsys.syscall(platform_1.SYS.epoll_create, size);
}
exports.epoll_create = epoll_create;
// int epoll_create1(int flags);
function epoll_create1(flags) {
    return libsys.syscall(platform_1.SYS.epoll_create1, flags);
}
exports.epoll_create1 = epoll_create1;
// typedef union epoll_data {
//     void    *ptr;
//     int      fd;
//     uint32_t u32;
//     uint64_t u64;
// } epoll_data_t;
//
// struct epoll_event {
//     uint32_t     events;    /* Epoll events */
//     epoll_data_t data;      /* User data variable */
// };
// http://man7.org/linux/man-pages/man2/epoll_wait.2.html
// int epoll_wait(int epfd, struct epoll_event *events, int maxevents, int timeout);
function epoll_wait(epfd, buf, maxevents, timeout) {
    return libsys.syscall(platform_1.SYS.epoll_wait, epfd, buf, maxevents, timeout);
}
exports.epoll_wait = epoll_wait;
// int epoll_pwait(int epfd, struct epoll_event *events, int maxevents, int timeout, const sigset_t *sigmask);
// export function epoll_pwait() {
//
// }
//
// int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);
function epoll_ctl(epfd, op, fd, event) {
    var buf = platform_1.epoll_event.pack(event);
    return libsys.syscall(platform_1.SYS.epoll_ctl, epfd, op, fd, buf);
}
exports.epoll_ctl = epoll_ctl;
// ### inotify_init, inotify_init1, inotify_add_watch and inotify_rm_watch
//
//     inotify_init(): number
//     inotify_init1(flags: defs.IN): number
//     inotify_add_watch(fd: number, pathname: string, mask: defs.IN): number
//     inotify_rm_watch(fd: number, wd: number): number
//
// In `libc`:
//
//     int inotify_init(void);
//     int inotify_init1(int flags);
//     int inotify_add_watch(int fd, const char *pathname, uint32_t mask);
//     int inotify_rm_watch(int fd, int wd);
//
// Monitoring filesystem events, [inotify(7)](http://man7.org/linux/man-pages/man7/inotify.7.html).
//
// See [`libaio`](http://www.npmjs.com/package/libaio) OOP wrapper `libaio.Notify` around `inotify(7)`
// system calls.
//
function inotify_init() {
    return libsys.syscall(platform_1.SYS.inotify_init);
}
exports.inotify_init = inotify_init;
function inotify_init1(flags) {
    return libsys.syscall(platform_1.SYS.inotify_init1, flags);
}
exports.inotify_init1 = inotify_init1;
function inotify_add_watch(fd, pathname, mask) {
    return libsys.syscall(platform_1.SYS.inotify_add_watch, fd, pathname, mask);
}
exports.inotify_add_watch = inotify_add_watch;
function inotify_rm_watch(fd, wd) {
    return libsys.syscall(platform_1.SYS.inotify_rm_watch, fd, wd);
}
exports.inotify_rm_watch = inotify_rm_watch;
