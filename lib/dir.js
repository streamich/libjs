"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Functions for working with directories.
var platform_1 = require("./platform");
var files_1 = require("./files");
var util_1 = require("./util");
// ### mkdir, mkdirat and rmdir
//
//     mkdir(pathname: string, mode: number): number
//     mkdirat(dirfd: number, pathname: string, mode: number): number
//     rmdir(pathname: string): number
//
// In `libc`, see [mkdir(2)](http://man7.org/linux/man-pages/man2/mkdir.2.html) and [rmdir(2)](http://man7.org/linux/man-pages/man2/rmdir.2.html):
//
//     int mkdir(const char *pathname, mode_t mode);
//     int mkdirat(int dirfd, const char *pathname, mode_t mode);
//     int rmdir(const char *dirname);
//
// Use `mkdir` to create a directory and `rmdir` to remove one.
//
function mkdir(pathname, mode) {
    return libsys.syscall(platform_1.SYS.mkdir, pathname, mode);
}
exports.mkdir = mkdir;
function mkdirAsync(pathname, mode, callback) {
    libsys.asyscall(platform_1.SYS.mkdir, pathname, mode, callback);
}
exports.mkdirAsync = mkdirAsync;
function mkdirat(dirfd, pathname, mode) {
    return libsys.syscall(platform_1.SYS.mkdirat, dirfd, pathname, mode);
}
exports.mkdirat = mkdirat;
function mkdiratAsync(dirfd, pathname, mode, callback) {
    libsys.asyscall(platform_1.SYS.mkdirat, dirfd, pathname, mode, callback);
}
exports.mkdiratAsync = mkdiratAsync;
function rmdir(pathname) {
    return libsys.syscall(platform_1.SYS.rmdir, pathname);
}
exports.rmdir = rmdir;
function rmdirAsync(pathname, callback) {
    libsys.asyscall(platform_1.SYS.rmdir, pathname, callback);
}
exports.rmdirAsync = rmdirAsync;
// ### getcwd
//
//     getcwd(): string
//
// Returns a *current-working-directory* path `string`, on error, throws a negative `number`
// representing `errno` global variable in `libc`.
//
// First we try to read path into a 64-byte buffer, if buffer is too small, we retry
// using large enough buffer to fit maximum possible file path, `PATH_MAX` is 4096 in `libc`.
//
// > Linux has a maximum filename length of 255 characters for most filesystems (including EXT4), and a maximum path of 4096 characters.
//
function getcwd() {
    var buf = new Buffer(264);
    var res = libsys.syscall(platform_1.SYS.getcwd, buf, buf.length);
    if (res < 0) {
        if (res === -34 /* ERANGE */) {
            // > ERANGE error - The size argument is less than the length of the absolute
            // > pathname of the working directory, including the terminating
            // > null byte.  You need to allocate a bigger array and try again.
            buf = new Buffer(4096);
            res = libsys.syscall(platform_1.SYS.getcwd, buf, buf.length);
            if (res < 0)
                throw res;
        }
        else
            throw res;
    }
    // -1 to remove `\0` terminating the string.
    return buf.slice(0, res - 1).toString();
}
exports.getcwd = getcwd;
function getcwdAsync(callback) {
    var buf = new Buffer(264);
    libsys.asyscall(platform_1.SYS.getcwd, buf, buf.length, function (res) {
        if (res < 0) {
            if (res === -34 /* ERANGE */) {
                buf = new Buffer(4096);
                libsys.asyscall(platform_1.SYS.getcwd, buf, buf.length, function (res) {
                    if (res < 0)
                        callback(res);
                    else
                        callback(null, buf.slice(0, res).toString());
                });
            }
            else
                callback(res);
        }
        callback(null, buf.slice(0, res).toString());
    });
}
exports.getcwdAsync = getcwdAsync;
// ### getdents64
//
//     getdents64(fd: number, dirp: Buffer): number
//
// In `C` it would be:
//
//     int getdents64(unsigned int fd, struct linux_dirent64 *dirp, unsigned int count);
//
// `libc` does not implement `getdents64` system call, however it uses it internally
// to provide [readdir(3)](http://man7.org/linux/man-pages/man3/readdir.3.html) fucntion.
// We will use this system call to implement our own `readdir` function below.
//
// On success, the number of bytes read is returned.  On end of
// directory, 0 is returned.  On error, -1 is returned, and errno is set
// appropriately.
//
function getdents64(fd, dirp) {
    return libsys.syscall(platform_1.SYS.getdents64, fd, dirp, dirp.length);
}
exports.getdents64 = getdents64;
function getdents64Async(fd, dirp, callback) {
    libsys.asyscall(platform_1.SYS.getdents64, fd, dirp, dirp.length, callback);
}
exports.getdents64Async = getdents64Async;
// The result of `readdir` could look like this:
//
//     [
//         { ino: [ 48879, 0 ], offset: 1, type: 4, name: '.' },
//         { ino: [ 48880, 0 ], offset: 2, type: 4, name: '..' },
//         { ino: [ 48881, 0 ],
//             offset: 3,
//             type: 8,
//             name: 'architecture.gif' },
//     ]
function readdir(path, encoding) {
    // debug('readdir', path, encoding);
    if (encoding === void 0) { encoding = 'utf8'; }
    /* Open directory. */
    var fd = files_1.open(path, 0 /* O_RDONLY */ | 65536 /* O_DIRECTORY */);
    if (fd < 0)
        throw fd;
    /* Linux will write into our `buf` array of entries of type `linux_dirent64`. */
    var buf = new Buffer(platform_1.PATH_MAX);
    var size = platform_1.linux_dirent64.size, unpack = platform_1.linux_dirent64.unpack;
    var list = [];
    var res = getdents64(fd, buf);
    do {
        var offset = 0;
        while (offset + size < res) {
            var unpacked = unpack(buf, offset);
            var name_1 = buf.slice(offset + size, offset + unpacked.d_reclen).toString(encoding);
            name_1 = name_1.substr(0, name_1.indexOf("\0"));
            list.push({
                ino: unpacked.ino64_t,
                offset: unpacked.off64_t[0],
                type: unpacked.d_type,
                name: name_1,
            });
            offset += unpacked.d_reclen;
        }
        res = getdents64(fd, buf);
    } while (res > 0);
    /* `res` should be `0` when we are done. */
    if (res < 0)
        throw res;
    files_1.close(fd);
    return list;
}
exports.readdir = readdir;
// `readdirList` reurns a plain `Array` of `string`s of file names in directory,
// excluding `.` and `..` directories, similar to what `fs.readdirSync` does for *Node.js*.
function readdirList(path, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    var fd = files_1.open(path, 65536 /* O_DIRECTORY */);
    if (fd < 0)
        throw fd;
    var buf = new Buffer(platform_1.PATH_MAX);
    var size = platform_1.linux_dirent64.size, unpack = platform_1.linux_dirent64.unpack;
    var list = [];
    var res = getdents64(fd, buf);
    do {
        var offset = 0;
        while (offset + size < res) {
            var d_reclen = unpack(buf, offset).d_reclen;
            var name_2 = buf.slice(offset + size, offset + d_reclen).toString(encoding);
            name_2 = name_2.substr(0, name_2.indexOf("\0"));
            if ((name_2 != '.') && (name_2 != '..'))
                list.push(name_2);
            offset += d_reclen;
        }
        res = getdents64(fd, buf);
    } while (res > 0);
    if (res < 0)
        throw res;
    files_1.close(fd);
    return list;
}
exports.readdirList = readdirList;
function readdirListAsync(path, encoding, callback) {
    if (encoding === void 0) { encoding = 'utf8'; }
    files_1.openAsync(path, 65536 /* O_DIRECTORY */, 0, function (fd) {
        if (fd < 0)
            return callback(fd);
        var buf = new StaticBuffer(platform_1.PATH_MAX);
        var size = platform_1.linux_dirent64.size, unpack = platform_1.linux_dirent64.unpack;
        var list = [];
        function done() {
            files_1.closeAsync(fd, util_1.noop);
            callback(null, list);
        }
        function loop() {
            getdents64Async(fd, buf, function (res) {
                if (res < 0) {
                    callback(res);
                    return;
                }
                var offset = 0;
                while (offset + size < res) {
                    var d_reclen = unpack(buf, offset).d_reclen;
                    var name_3 = buf.slice(offset + size, offset + d_reclen).toString(encoding);
                    name_3 = name_3.substr(0, name_3.indexOf("\0"));
                    if ((name_3 != '.') && (name_3 != '..'))
                        list.push(name_3);
                    offset += d_reclen;
                }
                if (res > 0)
                    loop();
                else
                    done();
            });
        }
        loop();
    });
}
exports.readdirListAsync = readdirListAsync;
