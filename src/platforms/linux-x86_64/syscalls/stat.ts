import {SYS} from '../SYS';
import {statStruct, IstatStruct} from '../structs';
import {TCallbackWithError} from '../../../types';
import {libsys} from '../../../libsys';

const {syscall, asyscall} = libsys;

function unpackStats(buf: Buffer, result: number, callback: TCallbackWithError<Error | number, IstatStruct>) {
    if(result === 0) {
        try {
            callback(null, statStruct.unpack(buf));
        } catch(e) {
            callback(e);
        }
    } else callback(result);
}

/**
 * Returns a `stat` object. Throws number.
 * 
 * See [Apple documentation](https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man2/stat.2.html).
 * 
 * @param filepath 
 */
export function stat(filepath: string): IstatStruct {
    const buf = Buffer.allocUnsafe(statStruct.size);
    const filepathBuffer = Buffer.from(filepath + '\0');
    const result = syscall(SYS.stat, filepathBuffer, buf);
    if(result == 0) return statStruct.unpack(buf);
    throw result;
}

export function statAsync(filepath: string, callback: TCallbackWithError<Error | number, IstatStruct>) {
    const buf = new Buffer(statStruct.size + 100);
    asyscall(SYS.stat, filepath, buf, (result) => unpackStats(buf, result as number, callback));
}

/**
 * Throws a number.
 * 
 * @param linkpath 
 */
export function lstat(linkpath: string): IstatStruct {
    const buf = new Buffer(statStruct.size);
    const result = syscall(SYS.lstat, linkpath, buf);
    if(result == 0) return statStruct.unpack(buf);
    throw result;
}

export function lstatAsync(linkpath: string, callback: TCallbackWithError<Error | number, IstatStruct>) {
    const buf = new Buffer(statStruct.size + 100);
    asyscall(SYS.lstat, linkpath, buf, (result) => unpackStats(buf, result as number, callback));
}

/**
 * Throws a number.
 * 
 * @param fd 
 */
export function fstat(fd: number): IstatStruct {
    const buf = new Buffer(statStruct.size + 100);
    const result = syscall(SYS.fstat, fd, buf);
    if(result == 0) return statStruct.unpack(buf);
    throw result;
}

export function fstatAsync(fd: number, callback: TCallbackWithError<Error | number, IstatStruct>) {
    const buf = new Buffer(statStruct.size + 100);
    asyscall(SYS.fstat, fd, buf, (result) => unpackStats(buf, result as number, callback));
}
