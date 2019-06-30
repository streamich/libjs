import {Arr} from '../../../typebase';
import {syscall, asyscall} from '../../../libsys';
import { SYS, FCNTL, IkeventStruct, NULL, keventStruct } from '../specification';
import { TCallback } from '../../../types';

export function fcntl (fd: number, cmd: FCNTL, arg?: number): number {
    const params = typeof arg !== 'undefined'
        ? [SYS.fcntl, fd, cmd]
        : [SYS.fcntl, fd, cmd, arg];
    return syscall.apply(null, params);
}

export function fcntlAsync (fd: number, cmd: FCNTL, callback: TCallback);
export function fcntlAsync (fd: number, cmd: FCNTL, arg: number, callback: TCallback);
export function fcntlAsync (fd: number, cmd: FCNTL, a, b?) {
    const params = typeof a === 'function'
        ? [SYS.fcntl, fd, cmd, a]
        : [SYS.fcntl, fd, cmd, a, b];
    asyscall.apply(null, params);
}

/**
 * In C.
 * 
 * ```c
 * int kqueue(void);
 * ```
 */
export function kqueue(): number {
    return syscall(SYS.kqueue);
}

export function __kevent(kq: number, changelist: Buffer, nchanges: number,        
        eventlist: Buffer, nevents: number, timeout: number): number {
    const SYS_kevent = SYS.kevent;
    return syscall(SYS_kevent, kq, changelist || NULL, nchanges, eventlist || NULL, nevents, timeout);
}

/**
 * In C.
 * 
 * ```c
 * int kevent(int kq, const struct kevent *changelist, int nchanges,
 *      struct kevent *eventlist, int nevents, const struct timespec *timeout);
 * int kevent64(int kq, const struct kevent64_s *changelist, int nchanges, 
 *      struct kevent64_s *eventlist, int nevents, unsigned int flags, 
 *      const struct timespec *timeout);
 * ```
 * 
 * @param kq 
 * @param changelist 
 * @param nevents 
 * @param timeout 
 */
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
