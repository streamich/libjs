"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Links
var platform_1 = require("./platform");
// ### symlink
//
//     symlink(target: string, linkpath: string): number
//
// In `libc`, see [symlink(2)](http://man7.org/linux/man-pages/man2/symlink.2.html):
//
//     int symlink(const char *target, const char *linkpath);
//
// Make a new name for a file.
//
function symlink(target, linkpath) {
    return libsys.syscall(platform_1.SYS.symlink, target, linkpath);
}
exports.symlink = symlink;
function symlinkAsync(target, linkpath, callback) {
    libsys.asyscall(platform_1.SYS.symlink, target, linkpath, callback);
}
exports.symlinkAsync = symlinkAsync;
// ### unlink
//
//     unlink(pathname: string): number
//
// In `libc`, see [unlink(2)](http://man7.org/linux/man-pages/man2/unlink.2.html):
//
//     int unlink(const char *pathname);
//
// Delete a name and possibly the file it refers to.
//
function unlink(pathname) {
    return libsys.syscall(platform_1.SYS.unlink, pathname);
}
exports.unlink = unlink;
function unlinkAsync(pathname, callback) {
    libsys.asyscall(platform_1.SYS.unlink, pathname, callback);
}
exports.unlinkAsync = unlinkAsync;
// ### readlink
//
//     readlink(pathname: string, buf: Buffer): number
//
// In `libc`, see [readlink(2)](http://man7.org/linux/man-pages/man2/readlink.2.html):
//
//     ssize_t readlink(const char *pathname, char *buf, size_t bufsiz);
//
// read value of a symbolic link
//
function readlink(pathname) {
    var sb = new StaticBuffer(platform_1.PATH_MAX);
    var bytes = libsys.syscall(platform_1.SYS.readlink, pathname, sb, sb.length);
    if (bytes < 0)
        throw bytes;
    else
        return sb.slice(0, bytes).toString();
}
exports.readlink = readlink;
function readlinkAsync(pathname, callback) {
    var sb = new StaticBuffer(platform_1.PATH_MAX);
    libsys.asyscall(platform_1.SYS.readlink, pathname, sb, sb.length, function (bytes) {
        if (bytes < 0)
            callback(bytes);
        else
            callback(bytes, sb.slice(0, bytes).toString());
    });
}
exports.readlinkAsync = readlinkAsync;
// ### link
//
//     link(oldpath: string, newpath: string): number
//
// In `libc`, see [link(2)](http://man7.org/linux/man-pages/man2/link.2.html):
//
//     int link(const char *oldpath, const char *newpath);
//
// Make a new name for a file.
//
function link(oldpath, newpath) {
    return libsys.syscall(platform_1.SYS.link, oldpath, newpath);
}
exports.link = link;
function linkAsync(oldpath, newpath, callback) {
    libsys.asyscall(platform_1.SYS.link, oldpath, newpath, callback);
}
exports.linkAsync = linkAsync;
