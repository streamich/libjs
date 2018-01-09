// Functions for working with directories.
import {SYS, ERROR, FLAG, linux_dirent64, PATH_MAX} from './platform';
import {open, close, openAsync, closeAsync} from './files';
import {noop} from './util';


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
export function mkdir(pathname: string, mode: number): number {
    return libsys.syscall(SYS.mkdir, pathname, mode);
}
export function mkdirAsync(pathname: string, mode: number, callback: TCallback) {
    libsys.asyscall(SYS.mkdir, pathname, mode, callback);
}
export function mkdirat(dirfd: number, pathname: string, mode: number): number {
    return libsys.syscall(SYS.mkdirat, dirfd, pathname, mode);
}
export function mkdiratAsync(dirfd: number, pathname: string, mode: number, callback: TCallback){
    libsys.asyscall(SYS.mkdirat, dirfd, pathname, mode, callback);
}
export function rmdir(pathname: string): number {
    return libsys.syscall(SYS.rmdir, pathname);
}
export function rmdirAsync(pathname: string, callback: TCallback) {
    libsys.asyscall(SYS.rmdir, pathname, callback);
}

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
export function getcwd(): string {
    let buf = new Buffer(264);
    let res = libsys.syscall(SYS.getcwd, buf, buf.length);

    if(res < 0) {
        if(res === -ERROR.ERANGE) {
            // > ERANGE error - The size argument is less than the length of the absolute
            // > pathname of the working directory, including the terminating
            // > null byte.  You need to allocate a bigger array and try again.
            buf = new Buffer(4096);
            res = libsys.syscall(SYS.getcwd, buf, buf.length);
            if(res < 0) throw res;
        } else throw res;
    }

    // -1 to remove `\0` terminating the string.
    return buf.slice(0, res - 1).toString();
}
export function getcwdAsync(callback: TCallbackWithError <number, string>) {
    let buf = new Buffer(264);
    libsys.asyscall(SYS.getcwd, buf, buf.length, (res) => {
        if(res < 0) {
            if(res === -ERROR.ERANGE) {
                buf = new Buffer(4096);
                libsys.asyscall(SYS.getcwd, buf, buf.length, (res) => {
                    if(res < 0) callback(res);
                    else callback(null, buf.slice(0, res).toString());
                });
            } else callback(res);
        }
        callback(null, buf.slice(0, res).toString());
    });
}

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
export function getdents64(fd: number, dirp: Buffer): number {
    return libsys.syscall(SYS.getdents64, fd, dirp, dirp.length);
}
export function getdents64Async(fd: number, dirp: Buffer, callback: TCallback) {
    libsys.asyscall(SYS.getdents64, fd, dirp, dirp.length, callback);
}

// ### readdir
//
//     readdir(path: string, encoding = 'utf8'): IReaddirEntry[]
//     readdirList(path: string, encoding = 'utf8'): string[]
//
// `readdir` and `readdirList` are `libjs`'s versions of [readdir(3)](http://man7.org/linux/man-pages/man3/readdir.3.html)
// both functions are equivalent, they only differ in the type of result they return.
//
// `readdir` returns an `Array` of `IReaddirEntry`, which is defined like so:
//
export interface IReaddirEntry {
    ino: [number, number],
    offset: number,
    type: number,
    name: string,
}
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
export function readdir(path: string, encoding = 'utf8'): IReaddirEntry[] {
    // debug('readdir', path, encoding);

    /* Open directory. */
    const fd = open(path, FLAG.O_RDONLY | FLAG.O_DIRECTORY);
    if(fd < 0) throw fd;

    /* Linux will write into our `buf` array of entries of type `linux_dirent64`. */
    const buf = new Buffer(PATH_MAX);
    const {size, unpack} = linux_dirent64;

    const list: IReaddirEntry[] = [];

    let res = getdents64(fd, buf);
    do {
        let offset = 0;
        while (offset + size < res) { // res contains number of bytes read.
            const unpacked = unpack(buf, offset);

            let name = buf.slice(offset + size, offset + unpacked.d_reclen).toString(encoding);
            name = name.substr(0, name.indexOf("\0"));

            list.push({
                ino: unpacked.ino64_t,
                offset: unpacked.off64_t[0],
                type: unpacked.d_type,
                name,
            });
            offset += unpacked.d_reclen;
        }
        res = getdents64(fd, buf);
    } while(res > 0);

    /* `res` should be `0` when we are done. */
    if(res < 0) throw res;

    close(fd);
    return list;
}

// `readdirList` reurns a plain `Array` of `string`s of file names in directory,
// excluding `.` and `..` directories, similar to what `fs.readdirSync` does for *Node.js*.
export function readdirList(path: string, encoding = 'utf8'): string[] {
    const fd = open(path, FLAG.O_DIRECTORY);
    if(fd < 0) throw fd;

    const buf = new Buffer(PATH_MAX);
    const {size, unpack} = linux_dirent64;
    const list: string[] = [];
    let res = getdents64(fd, buf);

    do {
        let offset = 0;
        while (offset + size < res) { // res contains number of bytes read.
            const {d_reclen} = unpack(buf, offset);

            let name = buf.slice(offset + size, offset + d_reclen).toString(encoding);
            name = name.substr(0, name.indexOf("\0"));

            if((name != '.') && (name != '..')) list.push(name);
            offset += d_reclen;
        }
        res = getdents64(fd, buf);
    } while(res > 0);

    if(res < 0) throw res;

    close(fd);
    return list;
}

export function readdirListAsync(path: string, encoding = 'utf8', callback: TCallbackWithError <number, string[]>) {
    openAsync(path, FLAG.O_DIRECTORY, 0, (fd) => {
        if(fd < 0) return callback(fd);

        const buf = new StaticBuffer(PATH_MAX);
        const {size, unpack} = linux_dirent64;
        const list: string[] = [];

        function done() {
            closeAsync(fd, noop);
            callback(null, list);
        }

        function loop() {
            getdents64Async(fd, buf, (res) => {
                if(res < 0) {
                    callback(res);
                    return;
                }

                let offset = 0;
                while (offset + size < res) { // res contains number of bytes read.
                    const {d_reclen} = unpack(buf, offset);

                    let name = buf.slice(offset + size, offset + d_reclen).toString(encoding);
                    name = name.substr(0, name.indexOf("\0"));

                    if ((name != '.') && (name != '..')) list.push(name);
                    offset += d_reclen;
                }

                if (res > 0) loop();
                else done();
            });
        }
        loop();
    });
}
