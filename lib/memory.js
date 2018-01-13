"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Memory
var platform_1 = require("./platform");
// ### mmap
//
// Map files or devices into memory
//
//     mmap(addr: number, length: number, prot: defs.PROT, flags: defs.MAP, fd: number, offset: number): number
//
// In `libc`:
//
//     void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);
//
function mmap(addr, length, prot, flags, fd, offset) {
    return libsys.syscall64(platform_1.SYS.mmap, addr, length, prot, flags, fd, offset);
}
exports.mmap = mmap;
// ### munmap
//
// In `libc`:
//
//     int munmap(void *addr, size_t length);
//
function munmap(addr, length) {
    return libsys.syscall(platform_1.SYS.munmap, addr, length);
}
exports.munmap = munmap;
// ### mprotect
//
// In `libc`:
//
//     int mprotect(void *addr, size_t len, int prot);
//
function mprotect(addr, len, prot) {
    return libsys.syscall(platform_1.SYS.mprotect, addr, len, prot);
}
exports.mprotect = mprotect;
// ### shmget
//
//     shmget(key: number, size: number, shmflg: defs.IPC|defs.FLAG): number
//
// Allocates a shared memory segment. `shmget()` returns the identifier of the shared memory segment associated with the
// value of the argument key. A new shared memory segment, with size equal to the value of size rounded up to a multiple
// of `PAGE_SIZE`, is created if key has the value `IPC.PRIVATE` or key isn't `IPC.PRIVATE`, no shared memory segment
// corresponding to key exists, and `IPC.CREAT` is specified in `shmflg`.
//
// In `libc`:
//
//     int shmget (key_t key, int size, int shmflg);
//
// Reference:
//
//  - http://linux.die.net/man/2/shmget
//
// Returns:
//
//  - If positive: identifier of the shared memory block.
//  - If negative: `errno` =
//    - `EINVAL` -- Invalid segment size specified
//    - `EEXIST` -- Segment exists, cannot create
//    - `EIDRM` -- Segment is marked for deletion, or was removed
//    - `ENOENT` -- Segment does not exist
//    - `EACCES` -- Permission denied
//    - `ENOMEM` -- Not enough memory to create segment
/**
 * @param key {number}
 * @param size {number}
 * @param shmflg {IPC|FLAG} If shmflg specifies both IPC_CREAT and IPC_EXCL and a shared memory segment already exists
 *      for key, then shmget() fails with errno set to EEXIST. (This is analogous to the effect of the combination
 *      O_CREAT | O_EXCL for open(2).)
 * @returns {number} `shmid` -- ID of the allocated memory, if positive.
 */
function shmget(key, size, shmflg) {
    return libsys.syscall(platform_1.SYS.shmget, key, size, shmflg);
}
exports.shmget = shmget;
// ### shmat`
//
//     shmat(shmid: number, shmaddr: number = defs.NULL, shmflg: defs.SHM = 0): [number, number]
//
// Attaches the shared memory segment identified by shmid to the address space of the calling process.
//
// In `libc`:
//
//     void *shmat(int shmid, const void *shmaddr, int shmflg);
//
// Reference:
//
//  - http://linux.die.net/man/2/shmat
//
// Returns:
//
//  - On success shmat() returns the address of the attached shared memory segment; on error (void *) -1
//  is returned, and errno is set to indicate the cause of the error.
/**
 * @param shmid {number} ID returned by `shmget`.
 * @param shmaddr {number} Optional approximate address where to allocate memory, or NULL.
 * @param shmflg {SHM}
 * @returns {number}
 */
function shmat(shmid, shmaddr, shmflg) {
    if (shmaddr === void 0) { shmaddr = platform_1.NULL; }
    if (shmflg === void 0) { shmflg = 0; }
    return libsys.syscall64(platform_1.SYS.shmat, shmid, shmaddr, shmflg);
}
exports.shmat = shmat;
// ### shmdt
//
// Detaches the shared memory segment located at the address specified by shmaddr from the address space of the calling
// process. The to-be-detached segment must be currently attached with shmaddr equal to the value returned by the
// attaching shmat() call.
//
// In `libc`:
//
//      int shmdt(const void *shmaddr);
//
// Reference:
//
//  - http://linux.die.net/man/2/shmat
/**
 * @param shmaddr {number}
 * @returns {number} On success shmdt() returns 0; on error -1 is returned, and errno is set to indicate the cause of the error.
 */
function shmdt(shmaddr) {
    return libsys.syscall(platform_1.SYS.shmdt, shmaddr);
}
exports.shmdt = shmdt;
/**
 * Performs the control operation specified by cmd on the shared memory segment whose identifier is given in shmid.
 *
 * In `libc`:
 *
 *      int shmctl(int shmid, int cmd, struct shmid_ds *buf);
 *
 * Reference:
 *
 *  - http://linux.die.net/man/2/shmctl
 *
 * @param shmid {number}
 * @param cmd {defs.IPC|defs.SHM}
 * @param buf {Buffer|defs.shmid_ds|defs.NULL} Buffer of size `defs.shmid_ds.size` where kernel will write reponse, or
 *      `defs.shmid_ds` structure that will be serialized for kernel to read data from, or 0 if no argument needed.
 * @returns {number} A successful IPC_INFO or SHM_INFO operation returns the index of the highest used entry in the
 *      kernel's internal array recording information about all shared memory segments. (This information can be used
 *      with repeated SHM_STAT operations to obtain information about all shared memory segments on the system.) A
 *      successful SHM_STAT operation returns the identifier of the shared memory segment whose index was given in
 *      shmid. Other operations return 0 on success. On error, -1 is returned, and errno is set appropriately.
 */
function shmctl(shmid, cmd, buf) {
    if (buf === void 0) { buf = platform_1.NULL; }
    if (buf instanceof Buffer) {
        // User provided us buffer of size `defs.shmid_ds.size` where kernel will write response.
    }
    else if (typeof buf === 'object') {
        // User provided `defs.shmid_ds` object, so we serialize it.
        buf = platform_1.shmid_ds.pack(buf);
    }
    else {
        // Third argument is just `defs.NULL`.
    }
    return libsys.syscall(platform_1.SYS.shmctl, shmid, cmd, buf);
}
exports.shmctl = shmctl;
