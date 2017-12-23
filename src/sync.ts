import {SYS} from './platform';

// ## fsync and fdatasync
//
// Synchronize a file's in-core state with storage.
//
export function fsync(fd: number): number {
    return process.syscall(SYS.fsync, fd);
}
export function fsyncAsync(fd: number, callback: TCallback) {
    process.asyscall(SYS.fsync, fd, callback);
}
export function fdatasync(fd: number): number {
    return process.syscall(SYS.fdatasync, fd);
}
export function fdatasyncAsync(fd: number, callback: TCallback) {
    process.asyscall(SYS.fdatasync, fd, callback);
}
