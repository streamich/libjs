import {SYS, utimbuf, Iutimbuf, timevalarr, Itimeval} from '../specification';
import {syscall, asyscall} from '../../../libsys';
import {TCallback} from '../../../types';

export function utimes(filename: string, times: [Itimeval, Itimeval]): number {
    const path = Buffer.from(filename + '\0');
    const buf = timevalarr.pack(times);
    return syscall(SYS.utimes, path, buf);
}

// export function utimesAsync(filename: string, times: Itimevalarr, callback: TCallback) {
    // const buf = timevalarr.pack(times);
    // asyscall(SYS.utimes, buf, callback);
// }

// export function utimensat(dirfd: number, pathname: string, timespecarr, flags: number): number {

// }

// export function futimens(fd: number, times: defs.timespecarr): number {

// }
