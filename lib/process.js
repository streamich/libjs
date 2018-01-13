"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Process
var platform_1 = require("./platform");
var createSyscall = function (num) { return function () { return libsys.syscall(num); }; };
var createAsyscall = function (num) { return function (callback) { return libsys.asyscall(num, callback); }; };
// ### getpid
//
//     getpid(): number
//
// Get process ID.
//
exports.getpid = createSyscall(platform_1.SYS.getpid);
exports.getpidAsync = createAsyscall(platform_1.SYS.getpid);
// ### getppid
//
//     getppid(): number
//
// Get parent process ID.
//
exports.getppid = createSyscall(platform_1.SYS.getppid);
exports.getppidAsync = createAsyscall(platform_1.SYS.getppid);
// ### getuid
//
//     getuid(): number
//
// Get parent user ID.
//
exports.getuid = createSyscall(platform_1.SYS.getuid);
exports.getuidAsync = createAsyscall(platform_1.SYS.getuid);
// ### geteuid
//
//     geteuid(): number
//
// Get parent real user ID.
//
exports.geteuid = createSyscall(platform_1.SYS.geteuid);
exports.geteuidAsync = createAsyscall(platform_1.SYS.geteuid);
// ### getgid
//
//     getgid(): number
//
// Get group ID.
//
exports.getgid = createSyscall(platform_1.SYS.getgid);
exports.getgidAsycn = createAsyscall(platform_1.SYS.getgid);
// ### getgid
//
//     getegid(): number
//
// Get read group ID.
//
exports.getegid = createSyscall(platform_1.SYS.getegid);
exports.getegidAsync = createAsyscall(platform_1.SYS.getegid);
// ### sched_yield
exports.sched_yield = createSyscall(platform_1.SYS.sched_yield);
// ## sleep
function nanosleep(seconds, nanoseconds) {
    var buf = platform_1.timespec.pack({
        tv_sec: [seconds, 0],
        tv_nsec: [nanoseconds, 0],
    });
    return libsys.syscall(platform_1.SYS.nanosleep, buf, platform_1.NULL);
}
exports.nanosleep = nanosleep;
