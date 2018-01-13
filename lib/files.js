"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Standard file operations, which operate on most of the Linux/Unix file descriptors.
var platform_1 = require("./platform");
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
function read(fd, buf) {
    return libsys.syscall(platform_1.SYS.read, fd, buf, buf.length);
}
exports.read = read;
function readAsync(fd, buf, callback) {
    libsys.asyscall(platform_1.SYS.read, fd, buf, buf.length, callback);
}
exports.readAsync = readAsync;
// ## write
//
//     write(fd: number, buf: string|Buffer): number
//
// Write data to a file descriptor.
//
function write(fd, buf) {
    return libsys.syscall(platform_1.SYS.write, fd, buf, buf.length);
}
exports.write = write;
function writeAsync(fd, buf, callback) {
    libsys.asyscall(platform_1.SYS.write, fd, buf, buf.length, callback);
}
exports.writeAsync = writeAsync;
// ## open
//
//     open(pathname: string, flags: defs.FLAG, mode?: defs.S): number
//
// Opens a file, returns file descriptor on success or a negative number representing an error.
//
function open(pathname, flags, mode) {
    var buf = Buffer.from(pathname + '\0');
    var args = [platform_1.SYS.open, buf, flags];
    if (typeof mode === 'number')
        args.push(mode);
    return libsys.syscall.apply(null, args);
}
exports.open = open;
function openAsync(pathname, flags, mode, callback) {
    var buf = Buffer.from(pathname + '\0');
    libsys.asyscall(platform_1.SYS.open, buf, flags, mode, callback);
}
exports.openAsync = openAsync;
// ## close
//
// Close a file descriptor.
//
function close(fd) {
    return libsys.syscall(platform_1.SYS.close, fd);
}
exports.close = close;
function closeAsync(fd, callback) {
    libsys.asyscall(platform_1.SYS.close, fd, callback);
}
exports.closeAsync = closeAsync;
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
function access(pathname, mode) {
    var buf = Buffer.from(pathname + '\0');
    return libsys.syscall(platform_1.SYS.access, buf, mode);
}
exports.access = access;
function accessAsync(pathname, mode, callback) {
    var buf = Buffer.from(pathname + '\0');
    libsys.asyscall(platform_1.SYS.access, buf, mode, callback);
}
exports.accessAsync = accessAsync;
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
function chmod(pathname, mode) {
    return libsys.syscall(platform_1.SYS.chmod, pathname, mode);
}
exports.chmod = chmod;
function chmodAsync(pathname, mode, callback) {
    libsys.asyscall(platform_1.SYS.chmod, pathname, mode, callback);
}
exports.chmodAsync = chmodAsync;
function fchmod(fd, mode) {
    return libsys.syscall(platform_1.SYS.chmod, fd, mode);
}
exports.fchmod = fchmod;
function fchmodAsync(fd, mode, callback) {
    libsys.asyscall(platform_1.SYS.chmod, fd, mode, callback);
}
exports.fchmodAsync = fchmodAsync;
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
function chown(pathname, owner, group) {
    return libsys.syscall(platform_1.SYS.chown, pathname, owner, group);
}
exports.chown = chown;
function chownAsync(pathname, owner, group, callback) {
    libsys.asyscall(platform_1.SYS.chown, pathname, owner, group, callback);
}
exports.chownAsync = chownAsync;
function fchown(fd, owner, group) {
    return libsys.syscall(platform_1.SYS.fchown, fd, owner, group);
}
exports.fchown = fchown;
function fchownAsync(fd, owner, group, callback) {
    libsys.asyscall(platform_1.SYS.fchown, fd, owner, group, callback);
}
exports.fchownAsync = fchownAsync;
function lchown(pathname, owner, group) {
    return libsys.syscall(platform_1.SYS.lchown, pathname, owner, group);
}
exports.lchown = lchown;
function lchownAsync(pathname, owner, group, callback) {
    libsys.asyscall(platform_1.SYS.lchown, pathname, owner, group, callback);
}
exports.lchownAsync = lchownAsync;
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
function truncate(path, length) {
    return libsys.syscall(platform_1.SYS.truncate, path, length);
}
exports.truncate = truncate;
function truncateAsync(path, length, callback) {
    libsys.asyscall(platform_1.SYS.truncate, path, length, callback);
}
exports.truncateAsync = truncateAsync;
function ftruncate(fd, length) {
    return libsys.syscall(platform_1.SYS.ftruncate, fd, length);
}
exports.ftruncate = ftruncate;
function ftruncateAsync(fd, length, callback) {
    libsys.asyscall(platform_1.SYS.ftruncate, fd, length, callback);
}
exports.ftruncateAsync = ftruncateAsync;
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
function lseek(fd, offset, whence) {
    return libsys.syscall(platform_1.SYS.lseek, fd, offset, whence);
}
exports.lseek = lseek;
function lseekAsync(fd, offset, whence, callback) {
    libsys.asyscall(platform_1.SYS.lseek, fd, offset, whence, callback);
}
exports.lseekAsync = lseekAsync;
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
function rename(oldpath, newpath) {
    return libsys.syscall(platform_1.SYS.rename, oldpath, newpath);
}
exports.rename = rename;
function renameAsync(oldpath, newpath, callback) {
    libsys.asyscall(platform_1.SYS.rename, oldpath, newpath, callback);
}
exports.renameAsync = renameAsync;
