import {SYS, PROT, MAP, IPC, FLAG, SHM, NULL, shmid_ds, Ishmid_ds} from '../specification';
import {number64, TAddress} from '../../../types';
import {libsys} from '../../../libsys';

/**
 * Map files or devices into memory.
 * 
 * In `libc`:
 * 
 * ```c
 * void *mmap(void *addr, size_t length, int prot, int flags, int fd, off_t offset);
 * ```
 * 
 * @param addr 
 * @param length 
 * @param prot 
 * @param flags 
 * @param fd 
 * @param offset 
 */
export function mmap(addr: number, length: number, prot: PROT, flags: MAP, fd: number, offset: number): number64 {
    return libsys.syscall64(SYS.mmap, addr, length, prot, flags, fd, offset);
}

export function munmap(addr: Buffer, length: number): number {
    return libsys.syscall(SYS.munmap, addr, length);
}

export function mprotect(addr: TAddress, len: number, prot: PROT): number {
    return libsys.syscall(SYS.mprotect, addr, len, prot);
}

/**
 * Allocates a shared memory segment. `shmget()` returns the identifier of the shared memory segment associated with the
 * value of the argument key. A new shared memory segment, with size equal to the value of size rounded up to a multiple
 * of `PAGE_SIZE`, is created if key has the value `IPC.PRIVATE` or key isn't `IPC.PRIVATE`, no shared memory segment
 * corresponding to key exists, and `IPC.CREAT` is specified in `shmflg`.
 * 
 * Returns:
 * 
 * - If positive: identifier of the shared memory block.
 * - If negative: `errno` =
 *   - `EINVAL` -- Invalid segment size specified
 *   - `EEXIST` -- Segment exists, cannot create
 *   - `EIDRM` -- Segment is marked for deletion, or was removed
 *   - `ENOENT` -- Segment does not exist
 *   - `EACCES` -- Permission denied
 *   - `ENOMEM` -- Not enough memory to create segment
 * 
 * @param key {number}
 * @param size {number}
 * @param shmflg {IPC|FLAG} If shmflg specifies both IPC_CREAT and IPC_EXCL and a shared memory segment already exists
 *      for key, then shmget() fails with errno set to EEXIST. (This is analogous to the effect of the combination
 *      O_CREAT | O_EXCL for open(2).)
 * @returns {number} `shmid` -- ID of the allocated memory, if positive.
 */
export function shmget(key: number, size: number, shmflg: IPC|FLAG): number {
    return libsys.syscall(SYS.shmget, key, size, shmflg);
}

/**
 * Attaches the shared memory segment identified by shmid to the address space of the calling process.
 * 
 * On success shmat() returns the address of the attached shared memory segment; on error (void *) -1
 * is returned, and errno is set to indicate the cause of the error.
 * 
 * @param shmid {number} ID returned by `shmget`.
 * @param shmaddr {number} Optional approximate address where to allocate memory, or NULL.
 * @param shmflg {SHM}
 * @returns {number}
 */
export function shmat(shmid: number, shmaddr: number = NULL, shmflg: SHM = 0): number64 {
    return libsys.syscall64(SYS.shmat, shmid, shmaddr, shmflg);
}

/**
 * Detaches the shared memory segment located at the address specified by shmaddr from the address space of the calling
 * process. The to-be-detached segment must be currently attached with shmaddr equal to the value returned by the
 * attaching shmat() call.
 * 
 * @param shmaddr {number}
 * @returns {number} On success shmdt() returns 0; on error -1 is returned, and errno is set to indicate the cause of the error.
 */
export function shmdt(shmaddr: number): number {
    return libsys.syscall(SYS.shmdt, shmaddr);
}

/**
 * Performs the control operation specified by cmd on the shared memory segment whose identifier is given in shmid.
 *
 * In `libc`:
 *
 * ```c
 * int shmctl(int shmid, int cmd, struct shmid_ds *buf);
 * ```
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
export function shmctl(shmid: number, cmd: IPC | SHM, buf: Buffer | Ishmid_ds | number = NULL): number {
    if(buf instanceof Buffer) {
        // User provided us buffer of size `defs.shmid_ds.size` where kernel will write response.
    } else if(typeof buf === 'object') {
        // User provided `defs.shmid_ds` object, so we serialize it.
        buf = shmid_ds.pack(buf) as Buffer;
    } else {
        // Third argument is just `defs.NULL`.
    }
    return libsys.syscall(SYS.shmctl, shmid, cmd, buf as Buffer|number);
}
