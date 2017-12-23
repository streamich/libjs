// Fetches and returns statistics about a file.
import {SYS} from './platform';
import statStruct, {Istat} from './structs/stat';


function unpackStats(buf: Buffer, result: number, callback: TCallbackWithError <Error|number, Istat>) {
    if(result === 0) {
        try {
            callback(null, statStruct.unpack(buf));
        } catch(e) {
            callback(e);
        }
    } else callback(result);
}

// ### stat, lstat, fstat
//
//     stat(filepath: string): defs.stat
//     lstat(linkpath: string): defs.stat
//     fstat(fd: number): defs.stat
//
// In `libc`, see [stat(2)](http://man7.org/linux/man-pages/man2/stat.2.html):
//
//     int stat(const char *pathname, struct stat *buf);
//     int fstat(int fd, struct stat *buf);
//     int lstat(const char *pathname, struct stat *buf);
//
// Returns a `stat` object of the form:
//
//     interface stat {
//         dev: number;
//         ino: number;
//         nlink: number;
//         mode: number;
//         uid: number;
//         gid: number;
//         rdev: number;
//         size: number;
//         blksize: number;
//         blocks: number;
//         atime: number;
//         atime_nsec: number;
//         mtime: number;
//         mtime_nsec: number;
//         ctime: number;
//         ctime_nsec: number;
//     }
//

// Throws number
export function stat(filepath: string): Istat {
    const buf = new Buffer(statStruct.size + 200);
    const filepathBuffer = Buffer.from(filepath + '\0');
    const result = process.syscall(SYS.stat, filepathBuffer, buf);
    console.log('buf', buf);
    if(result == 0) return statStruct.unpack(buf);
    throw result;
}

export function statAsync(filepath: string, callback: TCallbackWithError <Error|number, Istat>) {
    const buf = new Buffer(statStruct.size + 100);
    process.asyscall(SYS.stat, filepath, buf, (result) => unpackStats(buf, result as number, callback));
}

// Throws number
export function lstat(linkpath: string): Istat {
    const buf = new Buffer(statStruct.size + 100);
    const result = process.syscall(SYS.lstat, linkpath, buf);
    if(result == 0) return statStruct.unpack(buf);
    throw result;
}

export function lstatAsync(linkpath: string, callback: TCallbackWithError <Error|number, Istat>) {
    const buf = new Buffer(statStruct.size + 100);
    process.asyscall(SYS.lstat, linkpath, buf, (result) => unpackStats(buf, result as number, callback));
}

// Throws number
export function fstat(fd: number): Istat {
    const buf = new Buffer(statStruct.size + 100);
    const result = process.syscall(SYS.fstat, fd, buf);
    if(result == 0) return statStruct.unpack(buf);
    throw result;
}

export function fstatAsync(fd: number, callback: TCallbackWithError <Error|number, Istat>) {
    const buf = new Buffer(statStruct.size + 100);
    process.asyscall(SYS.fstat, fd, buf, (result) => unpackStats(buf, result as number, callback));
}
