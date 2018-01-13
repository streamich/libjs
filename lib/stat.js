"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Fetches and returns statistics about a file.
var platform_1 = require("./platform");
var stat_1 = require("./structs/stat");
function unpackStats(buf, result, callback) {
    if (result === 0) {
        try {
            callback(null, stat_1.default.unpack(buf));
        }
        catch (e) {
            callback(e);
        }
    }
    else
        callback(result);
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
function stat(filepath) {
    var buf = new Buffer(stat_1.default.size + 200);
    var filepathBuffer = Buffer.from(filepath + '\0');
    var result = libsys.syscall(platform_1.SYS.stat, filepathBuffer, buf);
    console.log('buf', buf);
    if (result == 0)
        return stat_1.default.unpack(buf);
    throw result;
}
exports.stat = stat;
function statAsync(filepath, callback) {
    var buf = new Buffer(stat_1.default.size + 100);
    libsys.asyscall(platform_1.SYS.stat, filepath, buf, function (result) { return unpackStats(buf, result, callback); });
}
exports.statAsync = statAsync;
// Throws number
function lstat(linkpath) {
    var buf = new Buffer(stat_1.default.size + 100);
    var result = libsys.syscall(platform_1.SYS.lstat, linkpath, buf);
    if (result == 0)
        return stat_1.default.unpack(buf);
    throw result;
}
exports.lstat = lstat;
function lstatAsync(linkpath, callback) {
    var buf = new Buffer(stat_1.default.size + 100);
    libsys.asyscall(platform_1.SYS.lstat, linkpath, buf, function (result) { return unpackStats(buf, result, callback); });
}
exports.lstatAsync = lstatAsync;
// Throws number
function fstat(fd) {
    var buf = new Buffer(stat_1.default.size + 100);
    var result = libsys.syscall(platform_1.SYS.fstat, fd, buf);
    if (result == 0)
        return stat_1.default.unpack(buf);
    throw result;
}
exports.fstat = fstat;
function fstatAsync(fd, callback) {
    var buf = new Buffer(stat_1.default.size + 100);
    libsys.asyscall(platform_1.SYS.fstat, fd, buf, function (result) { return unpackStats(buf, result, callback); });
}
exports.fstatAsync = fstatAsync;
