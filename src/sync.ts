import {SYS} from './platform';

// ## fsync and fdatasync
//
// Synchronize a file's in-core state with storage.
//
export function fsync(fd: number): number {
    return libsys.syscall(SYS.fsync, fd);
}
export function fsyncAsync(fd: number, callback: TCallback) {
    libsys.asyscall(SYS.fsync, fd, callback);
}
export function fdatasync(fd: number): number {
    return libsys.syscall(SYS.fdatasync, fd);
}
export function fdatasyncAsync(fd: number, callback: TCallback) {
    libsys.asyscall(SYS.fdatasync, fd, callback);
}
