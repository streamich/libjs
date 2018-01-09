// Events
import {SYS, EPOLL, EPOLL_CTL, FCNTL, IN, epoll_event, Iepoll_event} from './platform';


// ### fcntl
export function fcntl(fd: number, cmd: FCNTL, arg?: number): number {
    const params = [SYS.fcntl, fd, cmd];
    if(typeof arg !== 'undefined') params.push(arg);
    return libsys.syscall.apply(null, params);
}

// ### epoll_create
//
// Size is ignored, but must be greater than 0.
//
// In `libc`:
//
//     int epoll_create(int size);
//
export function epoll_create(size: number): number {
    return libsys.syscall(SYS.epoll_create, size);
}
// int epoll_create1(int flags);
export function epoll_create1(flags: EPOLL): number {
    return libsys.syscall(SYS.epoll_create1, flags);
}

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
export function epoll_wait(epfd: number, buf: Buffer, maxevents: number, timeout: number): number {
    return libsys.syscall(SYS.epoll_wait, epfd, buf, maxevents, timeout);
}

// int epoll_pwait(int epfd, struct epoll_event *events, int maxevents, int timeout, const sigset_t *sigmask);
// export function epoll_pwait() {
//
// }
//
// int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);
export function epoll_ctl(epfd: number, op: EPOLL_CTL, fd: number, event: Iepoll_event): number {
    const buf = epoll_event.pack(event);
    return libsys.syscall(SYS.epoll_ctl, epfd, op, fd, buf);
}


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
export function inotify_init(): number {
    return libsys.syscall(SYS.inotify_init);
}
export function inotify_init1(flags: IN): number {
    return libsys.syscall(SYS.inotify_init1,  flags);
}
export function inotify_add_watch(fd: number, pathname: string, mask: IN): number {
    return libsys.syscall(SYS.inotify_add_watch, fd, pathname, mask);
}
export function inotify_rm_watch(fd: number, wd: number): number {
    return libsys.syscall(SYS.inotify_rm_watch, fd, wd);
}
