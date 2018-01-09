// Links
import {SYS, PATH_MAX} from './platform';

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
export function symlink(target: string, linkpath: string): number {
    return libsys.syscall(SYS.symlink, target, linkpath);
}
export function symlinkAsync(target: string, linkpath: string, callback: TCallback) {
    libsys.asyscall(SYS.symlink, target, linkpath, callback);
}


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
export function unlink(pathname: string): number {
    return libsys.syscall(SYS.unlink, pathname);
}
export function unlinkAsync(pathname: string, callback: TCallback) {
    libsys.asyscall(SYS.unlink, pathname, callback);
}


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
export function readlink(pathname: string): string {
    const sb = new StaticBuffer(PATH_MAX);
    const bytes = libsys.syscall(SYS.readlink, pathname, sb, sb.length);
    if(bytes < 0) throw bytes;
    else return sb.slice(0, bytes).toString();
}
export function readlinkAsync(pathname: string, callback: TCallbackWithError <number, string>) {
    const sb = new StaticBuffer(PATH_MAX);
    libsys.asyscall(SYS.readlink, pathname, sb, sb.length, bytes => {
        if(bytes < 0) callback(bytes);
        else callback(bytes, sb.slice(0, bytes).toString());
    });
}


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
export function link(oldpath: string, newpath: string): number {
    return libsys.syscall(SYS.link, oldpath, newpath);
}
export function linkAsync(oldpath: string, newpath: string, callback: TCallback) {
    libsys.asyscall(SYS.link, oldpath, newpath, callback);
}
