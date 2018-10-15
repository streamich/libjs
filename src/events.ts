// Events
import {SYS, EPOLL, EPOLL_CTL, FCNTL, IN, epoll_event, Iepoll_event, keventStruct, IkeventStruct, NULL} from './platform';
import {Arr} from './typebase';
import {libsys} from './libsys';


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


// kqueue
/*
int     kqueue(void);
int     kevent(int kq, 
	       const struct kevent *changelist, int nchanges,
	       struct kevent *eventlist, int nevents,
	       const struct timespec *timeout);
int     kevent64(int kq, 
		 const struct kevent64_s *changelist, int nchanges,
		 struct kevent64_s *eventlist, int nevents,
		 unsigned int flags, 
		 const struct timespec *timeout);
*/
export function kqueue(): number {
    return libsys.syscall((SYS as any).kqueue);
}

export function __kevent(kq: number, changelist: Buffer, nchanges: number,        
        eventlist: Buffer, nevents: number, timeout: number): number {
    const SYS_kevent = (SYS as any).kevent;
    return libsys.syscall(SYS_kevent, kq, changelist || NULL, nchanges, eventlist || NULL, nevents, timeout);
}

export function kevent(kq: number, changelist: IkeventStruct[], nevents: number, timeout: number): IkeventStruct[] | number {
    let changelistBuf: Buffer | null = null;
    let eventlistBuf: Buffer | null = null;
    let nchanges: number = 0;

    if (changelist && changelist.length) {
        nchanges = changelist.length;
        changelistBuf = new Buffer(keventStruct.size * nchanges);
    }

    if (nevents > 0) {
        eventlistBuf = new Buffer(nevents * keventStruct.size);
    }

    const res = __kevent(kq, changelistBuf, nchanges, eventlistBuf, nevents, timeout);

    if (res <= 0) return res;
    else  {
        const keventStructArr = Arr.define(keventStruct, res);
        const out: IkeventStruct[] = keventStructArr.unpack(eventlistBuf);
        return out;
    }
};

/**
 * EV_SET(&evSet, localFd, EVFILT_READ, EV_ADD, 0, 0, NULL);
 * 
 * #define EV_SET(kevp, a, b, c, d, e, f) do {	\
 *	struct kevent *__kevp__ = (kevp);	\
 *	__kevp__->ident = (a);			\
 *	__kevp__->filter = (b);			\
 *	__kevp__->flags = (c);			\
 *	__kevp__->fflags = (d);			\
 *	__kevp__->data = (e);			\
 *	__kevp__->udata = (f);			\
} while(0)
 */
export const EV_SET = (fd: number, filter: number, flags: number, fflags: number, data: [number, number], udata: [number, number]): Buffer => {
    const kevp: IkeventStruct = {
        ident: [fd, 0],
        filter,
        flags,
        fflags,
        data,
        udata,
    };
    const buf = keventStruct.pack(kevp);

    return buf;
};
