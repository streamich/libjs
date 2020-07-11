import {SYS, FLAG, S, SEEK} from '../specification';
import {TNumber, TBuffer, TCallback, StaticBuffer} from '../../../types';
import {libsys} from '../../../libsys';

const {syscall, asyscall} = libsys;

export function read(fd: TNumber, buf: TBuffer): number {
    return syscall(SYS.read, fd, buf, buf.length);
}

export function readAsync(fd: TNumber, buf: TBuffer, callback: TCallback) {
    asyscall(SYS.read, fd, buf, buf.length, callback);
}

export function write(fd: number, buf: string | StaticBuffer): number {
    return syscall(SYS.write, fd, buf, buf.length);
}

export function writeAsync(fd: number, buf: string|StaticBuffer, callback: TCallback) {
    asyscall(SYS.write, fd, buf, buf.length, callback);
}

/**
 * Opens a file, returns file descriptor on success or a negative number representing an error.
 * 
 * ```ts
 * open(pathname: string, flags: defs.FLAG, mode?: defs.S): number
 * ```
 * 
 * @param pathname 
 * @param flags 
 * @param mode 
 */
export function open(pathname: string, flags: FLAG, mode?: S | number): number {
    const buf = Buffer.from(pathname + '\0');
    const args = [SYS.open, buf, flags];
    if(typeof mode === 'number') args.push(mode);
    return syscall.apply(null, args);
}

export function openAsync(pathname: string, flags: FLAG, mode: S | number, callback: TCallback) {
    const buf = Buffer.from(pathname + '\0');
    asyscall(SYS.open, buf, flags, mode, callback);
}

/**
 * Close a file descriptor.
 * 
 * @param fd 
 */
export function close(fd: number): number {
    return syscall(SYS.close, fd);
}

export function closeAsync(fd: number, callback: TCallback) {
    asyscall(SYS.close, fd, callback);
}

/**
 * Check user's permissions for a file.
 * 
 * ```ts
 * access(pathname: string, mode: number): number
 * ```
 * 
 * In `libc`, see [access(2)](http://man7.org/linux/man-pages/man2/faccessat.2.html):
 * 
 *     int access(const char *pathname, int mode);
 * 
 * @param pathname 
 * @param mode 
 */
export function access(pathname: string, mode: number): number {
    const buf = Buffer.from(pathname + '\0');
    return syscall(SYS.access, buf, mode);
}

export function accessAsync(pathname: string, mode: number, callback: TCallback) {
    const buf = Buffer.from(pathname + '\0');
    asyscall(SYS.access, buf, mode, callback);
}

/**
 * Change permissions of a file. On success, zero is returned.  On error, -1 is returned,
 * and errno is set appropriately.
 * 
 * ```ts
 * chmod(pathname: string, mode: number): number
 * ```
 * 
 * In `libc`, see [chmod(2)](http://man7.org/linux/man-pages/man2/chmod.2.html):
 * 
 *     int chmod(const char *pathname, mode_t mode);
 * 
 * @param pathname 
 * @param mode 
 */
export function chmod(pathname: string, mode: number): number {
    return syscall(SYS.chmod, pathname, mode);
}

export function chmodAsync(pathname: string, mode: number, callback: TCallback) {
    asyscall(SYS.chmod, pathname, mode, callback);
}

/**
 * Change permissions of a file. On success, zero is returned.  On error, -1 is returned,
 * and errno is set appropriately.
 * 
 * ```ts
 * fchmod(fd: number, mode: number): number
 * ```
 * 
 * In `libc`, see [chmod(2)](http://man7.org/linux/man-pages/man2/chmod.2.html):
 * 
 *     int fchmod(int fd, mode_t mode);
 * 
 * @param pathname 
 * @param mode 
 */
export function fchmod(fd: number, mode: number): number {
    return syscall(SYS.chmod, fd, mode);
}
export function fchmodAsync(fd: number, mode: number, callback: TCallback) {
    asyscall(SYS.chmod, fd, mode, callback);
}

/**
 * Changes the owner and group of a file. The `chown()`, `fchown()`, and `lchown()`
 * system calls differ only in how the file is specified.
 * 
 * In `libc`, [chown(2)](http://man7.org/linux/man-pages/man2/lchown.2.html):
 * 
 * ```c
 * int chown(const char *pathname, uid_t owner, gid_t group);
 * ```
 * 
 * @param pathname 
 * @param owner 
 * @param group 
 */
export function chown(pathname: string, owner: number, group: number): number {
    return syscall(SYS.chown, pathname, owner, group);
}

export function chownAsync(pathname: string, owner: number, group: number, callback: TCallback) {
    asyscall(SYS.chown, pathname, owner, group, callback);
}

export function fchown(fd: number, owner: number, group: number): number {
    return syscall(SYS.fchown, fd, owner, group);
}

export function fchownAsync(fd: number, owner: number, group: number, callback: TCallback) {
    asyscall(SYS.fchown, fd, owner, group, callback);
}

export function lchown(pathname: string, owner: number, group: number): number {
    return syscall(SYS.lchown, pathname, owner, group);
}

export function lchownAsync(pathname: string, owner: number, group: number, callback: TCallback) {
    asyscall(SYS.lchown, pathname, owner, group, callback);
}

/**
 * Truncate a file to a specified length.
 * 
 * In `libc`, see [truncate(2)](http://man7.org/linux/man-pages/man2/truncate.2.html):
 * 
 * ```c
 * int truncate(const char *path, off_t length);
 * ```
 * 
 * @param path 
 * @param length 
 */
export function truncate(path: string, length: number): number {
    return syscall(SYS.truncate, path, length);
}

export function truncateAsync(path: string, length: number, callback: TCallback) {
    asyscall(SYS.truncate, path, length, callback);
}

/**
 * Truncate a file to a specified length.
 * 
 * In `libc`, see [truncate(2)](http://man7.org/linux/man-pages/man2/truncate.2.html):
 * 
 * ```c
 * int ftruncate(int fd, off_t length);
 * ```
 * 
 * @param path 
 * @param length 
 */
export function ftruncate(fd: number, length: number): number {
    return syscall(SYS.ftruncate, fd, length);
}

export function ftruncateAsync(fd: number, length: number, callback: TCallback) {
    asyscall(SYS.ftruncate, fd, length, callback);
}

/**
 * Reposition read/write file offset.
 * 
 * Seek into position in a file. In `libc`, see [lseek(2)](http://man7.org/linux/man-pages/man2/lseek.2.html):
 * 
 * ```c
 * off_t lseek(int fildes, off_t offset, int whence);
 * ```
 * 
 * @param fd 
 * @param offset 
 * @param whence 
 */
export function lseek(fd: number, offset: number, whence: SEEK): number {
    return syscall(SYS.lseek, fd, offset, whence);
}

export function lseekAsync(fd: number, offset: number, whence: SEEK, callback: TCallback) {
    asyscall(SYS.lseek, fd, offset, whence, callback);
}

/**
 * Change the name or location of a file.
 * 
 * In `libc`, see [rename(2)](http://man7.org/linux/man-pages/man2/rename.2.html):
 * 
 * ```c
 * int rename(const char *oldpath, const char *newpath);
 * ```
 * 
 * @param oldpath 
 * @param newpath 
 */
export function rename(oldpath: string, newpath: string): number {
    return syscall(SYS.rename, oldpath, newpath);
}

export function renameAsync(oldpath: string, newpath: string, callback: TCallback) {
    asyscall(SYS.rename, oldpath, newpath, callback);
}

/**
 * Synchronize a file's in-core state with storage.
 * @param fd 
 */
export function fsync(fd: number): number {
    return syscall(SYS.fsync, fd);
}

export function fsyncAsync(fd: number, callback: TCallback) {
    asyscall(SYS.fsync, fd, callback);
}

export function fdatasync(fd: number): number {
    return syscall(SYS.fdatasync, fd);
}

export function fdatasyncAsync(fd: number, callback: TCallback) {
    asyscall(SYS.fdatasync, fd, callback);
}
