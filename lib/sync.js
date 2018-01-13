"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("./platform");
// ## fsync and fdatasync
//
// Synchronize a file's in-core state with storage.
//
function fsync(fd) {
    return libsys.syscall(platform_1.SYS.fsync, fd);
}
exports.fsync = fsync;
function fsyncAsync(fd, callback) {
    libsys.asyscall(platform_1.SYS.fsync, fd, callback);
}
exports.fsyncAsync = fsyncAsync;
function fdatasync(fd) {
    return libsys.syscall(platform_1.SYS.fdatasync, fd);
}
exports.fdatasync = fdatasync;
function fdatasyncAsync(fd, callback) {
    libsys.asyscall(platform_1.SYS.fdatasync, fd, callback);
}
exports.fdatasyncAsync = fdatasyncAsync;
