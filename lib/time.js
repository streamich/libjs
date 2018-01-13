"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Time
var platform_1 = require("./platform");
// ## utime, utimes, utimensat and futimens
//
// In `libc`:
//
//     int utime(const char *filename, const struct utimbuf *times);
//     int utimes(const char *filename, const struct timeval times[2]);
//     int utimensat(int dirfd, const char *pathname, const struct timespec times[2], int flags);
//     int futimens(int fd, const struct timespec times[2]);
//
function utime(filename, times) {
    var buf = platform_1.utimbuf.pack(times);
    return libsys.syscall(platform_1.SYS.utime, filename, buf);
}
exports.utime = utime;
function utimeAsync(filename, times, callback) {
    var buf = platform_1.utimbuf.pack(times);
    libsys.asyscall(platform_1.SYS.utime, filename, buf, callback);
}
exports.utimeAsync = utimeAsync;
function utimes(filename, times) {
    var buf = platform_1.timevalarr.pack(times);
    return libsys.syscall(platform_1.SYS.utimes, buf);
}
exports.utimes = utimes;
function utimesAsync(filename, times, callback) {
    var buf = platform_1.timevalarr.pack(times);
    libsys.asyscall(platform_1.SYS.utimes, buf, callback);
}
exports.utimesAsync = utimesAsync;
// TODO: implement these
// export function utimensat(dirfd: number, pathname: string, timespecarr, flags: number): number {
//
// }
//
// export function futimens(fd: number, times: defs.timespecarr): number {
//
// }
