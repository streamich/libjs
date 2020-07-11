// Functions for working with directories.
import {SYS, ERROR, FLAG, linux_dirent64, PATH_MAX} from '../specification';
import {open, close, openAsync, closeAsync} from './files';
import {libsys} from '../../../libsys';
import {TCallback, TCallbackWithError} from '../../../types';

const {syscall, asyscall, dlsym, call} = libsys;

// ### mkdir, mkdirat and rmdir
//
//     mkdir(pathname: string, mode: number): number
//     mkdirat(dirfd: number, pathname: string, mode: number): number
//     rmdir(pathname: string): number
//
// In `libc`, see [mkdir(2)](http://man7.org/linux/man-pages/man2/mkdir.2.html) and [rmdir(2)](http://man7.org/linux/man-pages/man2/rmdir.2.html):
//
//     int mkdir(const char *pathname, mode_t mode);
//     int mkdirat(int dirfd, const char *pathname, mode_t mode);
//     int rmdir(const char *dirname);
//
// Use `mkdir` to create a directory and `rmdir` to remove one.
//
export function mkdir(pathname: string, mode: number): number {
    return syscall(SYS.mkdir, pathname, mode);
}

export function mkdirAsync(pathname: string, mode: number, callback: TCallback) {
    asyscall(SYS.mkdir, pathname, mode, callback);
}

export function mkdirat(dirfd: number, pathname: string, mode: number): number {
    return syscall(SYS.mkdirat, dirfd, pathname, mode);
}

export function mkdiratAsync(dirfd: number, pathname: string, mode: number, callback: TCallback){
    asyscall(SYS.mkdirat, dirfd, pathname, mode, callback);
}

export function rmdir(pathname: string): number {
    return syscall(SYS.rmdir, pathname);
}

export function rmdirAsync(pathname: string, callback: TCallback) {
    asyscall(SYS.rmdir, pathname, callback);
}

const getcwdAddr = dlsym('getcwd');
const smallPathBufferLength = 264;
const smallPathBuffer = new Buffer(smallPathBufferLength);
const largePathBuffer = new Buffer(PATH_MAX);
const smallPathBufferCallArgs = [smallPathBuffer as any, smallPathBufferLength];
const largePathBufferCallArgs = [largePathBuffer as any, PATH_MAX];

export function getcwd(): string {
    let res = call(getcwdAddr, 0, smallPathBufferCallArgs);
    if (res >= 0) return smallPathBuffer.slice(0, res - 1).toString();

    // if (res === -ERROR.ERANGE) {
    if (res === -32) {
        // > ERANGE error - The size argument is less than the length of the absolute
        // > pathname of the working directory, including the terminating
        // > null byte.  You need to allocate a bigger array and try again.
        res = call(getcwdAddr, 0, largePathBufferCallArgs);
        if (res >= 0) return largePathBuffer.slice(0, res - 1).toString();
    }

    throw res;
}

export function getcwdAsync(callback: TCallbackWithError<number, string>) {
    const res = getcwd();
    if (typeof res === 'string') callback(undefined, res);
    else callback(res);
}
