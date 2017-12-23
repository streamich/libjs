// Standard file operations, which operate on most of the Linux/Unix file descriptors.
import {SYS, FLAG, S, SEEK} from './platform';


// ## read
//
//     read(fd: number, buf: Buffer): number
//
// Read data from file associated with `fd` file descriptor into buffer `buf`.
// Up to size of the `buf.length` will be read, or less.
//
// Returns a `number` which is the actual bytes read into the buffer, if negative,
// represents an error. If zero, represents *end-of-file*, but if `buf` is of length
// zero than zero does not necessarily mean *end-of-file*.
//
export function read(fd: TNumber, buf: TBuffer): number {
    return process.syscall(SYS.read, fd, buf, buf.length);
}

export function readAsync(fd: TNumber, buf: TBuffer, callback: TCallback) {
    process.asyscall(SYS.read, fd, buf, buf.length, callback);
}


// ## write
//
//     write(fd: number, buf: string|Buffer): number
//
// Write data to a file descriptor.
//
export function write(fd: number, buf: string|StaticBuffer): number {
    return process.syscall(SYS.write, fd, buf, buf.length);
}
export function writeAsync(fd: number, buf: string|StaticBuffer, callback: TCallback) {
    process.asyscall(SYS.write, fd, buf, buf.length, callback);
}


// ## open
//
//     open(pathname: string, flags: defs.FLAG, mode?: defs.S): number
//
// Opens a file, returns file descriptor on success or a negative number representing an error.
//
export function open(pathname: string, flags: FLAG, mode?: S|number): number {
    const buf = Buffer.from(pathname + '\0');
    const args = [SYS.open, buf, flags];
    if(typeof mode === 'number') args.push(mode);
    return process.syscall.apply(null, args);
}
export function openAsync(pathname: string, flags: FLAG, mode: S|number, callback: TCallback) {
    const buf = Buffer.from(pathname + '\0');
    process.asyscall(SYS.open, buf, flags, mode, callback);
}


// ## close
//
// Close a file descriptor.
//
export function close(fd: number): number {
    return process.syscall(SYS.close, fd);
}
export function closeAsync(fd: number, callback: TCallback) {
    process.asyscall(SYS.close, fd, callback);
}


// ## access
//
//     access(pathname: string, mode: number): number
//
// In `libc`, see [access(2)](http://man7.org/linux/man-pages/man2/faccessat.2.html)::
//
//     int access(const char *pathname, int mode);
//
// Check user's permissions for a file.
//
export function access(pathname: string, mode: number): number {
    const buf = Buffer.from(pathname + '\0');
    return process.syscall(SYS.access, buf, mode);
}
export function accessAsync(pathname: string, mode: number, callback: TCallback) {
    const buf = Buffer.from(pathname + '\0');
    process.asyscall(SYS.access, buf, mode, callback);
}


// ## chmod and fchmod
//
//     chmod(pathname: string, mode: number): number
//     fchmod(fd: number, mode: number): number
//
// In `libc`, see [chmod(2)](http://man7.org/linux/man-pages/man2/chmod.2.html):
//
//     int chmod(const char *pathname, mode_t mode);
//     int fchmod(int fd, mode_t mode);
//
// Change permissions of a file. On success, zero is returned.  On error, -1 is returned,
// and errno is set appropriately.
//
export function chmod(pathname: string, mode: number): number {
    return process.syscall(SYS.chmod, pathname, mode);
}
export function chmodAsync(pathname: string, mode: number, callback: TCallback) {
    process.asyscall(SYS.chmod, pathname, mode, callback);
}
export function fchmod(fd: number, mode: number): number {
    return process.syscall(SYS.chmod, fd, mode);
}
export function fchmodAsync(fd: number, mode: number, callback: TCallback) {
    process.asyscall(SYS.chmod, fd, mode, callback);
}


// ## chown, fchown and lchown
//
//     chown(pathname: string, owner: number, group: number): number
//     fchown(fd: number, owner: number, group: number): number
//     lchown(pathname: string, owner: number, group: number): number
//
// In `libc`, [chown(2)](http://man7.org/linux/man-pages/man2/lchown.2.html):
//
//     int chown(const char *pathname, uid_t owner, gid_t group);
//     int fchown(int fd, uid_t owner, gid_t group);
//     int lchown(const char *pathname, uid_t owner, gid_t group);
//
// These system calls change the owner and group of a file.  The
// `chown()`, `fchown()`, and `lchown()` system calls differ only in how the
// file is specified:
//
//  - `chown()` changes the ownership of the file specified by pathname, which is dereferenced if it is a symbolic link.
//  - `fchown()` changes the ownership of the file referred to by the open file descriptor fd.
//  - `lchown()` is like chown(), but does not dereference symbolic links.
//
export function chown(pathname: string, owner: number, group: number): number {
    return process.syscall(SYS.chown, pathname, owner, group);
}
export function chownAsync(pathname: string, owner: number, group: number, callback: TCallback) {
    process.asyscall(SYS.chown, pathname, owner, group, callback);
}
export function fchown(fd: number, owner: number, group: number): number {
    return process.syscall(SYS.fchown, fd, owner, group);
}
export function fchownAsync(fd: number, owner: number, group: number, callback: TCallback) {
    process.asyscall(SYS.fchown, fd, owner, group, callback);
}
export function lchown(pathname: string, owner: number, group: number): number {
    return process.syscall(SYS.lchown, pathname, owner, group);
}
export function lchownAsync(pathname: string, owner: number, group: number, callback: TCallback) {
    process.asyscall(SYS.lchown, pathname, owner, group, callback);
}

// ### truncate and ftruncate
//
//     truncate(path: string, length: number): number
//     ftruncate(fd: number, length: number): number
//
// In `libc`, see [truncate(2)](http://man7.org/linux/man-pages/man2/truncate.2.html):
//
//     int truncate(const char *path, off_t length);
//     int ftruncate(int fd, off_t length);
//
// Truncate a file to a specified length
//
export function truncate(path: string, length: number): number {
    return process.syscall(SYS.truncate, path, length);
}
export function truncateAsync(path: string, length: number, callback: TCallback) {
    process.asyscall(SYS.truncate, path, length, callback);
}
export function ftruncate(fd: number, length: number): number {
    return process.syscall(SYS.ftruncate, fd, length);
}
export function ftruncateAsync(fd: number, length: number, callback: TCallback) {
    process.asyscall(SYS.ftruncate, fd, length, callback);
}

// ### lseek
//
//     lseek(fd: number, offset: number, whence: defs.SEEK): number
//
// Seek into position in a file. In `libc`, see [lseek(2)](http://man7.org/linux/man-pages/man2/lseek.2.html):
//
//     off_t lseek(int fildes, off_t offset, int whence);
//
// Reposition read/write file offset.
//
export function lseek(fd: number, offset: number, whence: SEEK): number {
    return process.syscall(SYS.lseek, fd, offset, whence);
}
export function lseekAsync(fd: number, offset: number, whence: SEEK, callback: TCallback) {
    process.asyscall(SYS.lseek, fd, offset, whence, callback);
}

// ### rename
//
//     rename(oldpath: string, newpath: string): number
//
// In `libc`, see [rename(2)](http://man7.org/linux/man-pages/man2/rename.2.html):
//
//     int rename(const char *oldpath, const char *newpath);
//
// change the name or location of a file
//
export function rename(oldpath: string, newpath: string): number {
    return process.syscall(SYS.rename, oldpath, newpath);
}

export function renameAsync(oldpath: string, newpath: string, callback: TCallback) {
    process.asyscall(SYS.rename, oldpath, newpath, callback);
}
