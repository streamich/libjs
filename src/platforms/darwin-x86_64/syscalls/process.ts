// Process
import {SYS} from '..';
import {libsys} from '../../../libsys';
import {TCallback} from '../../../types';

const {syscall, asyscall} = libsys;

/**
 * Get process ID.
 */
export function getpid () { return syscall(SYS.getpid); }

/**
 * Get process ID.
 */
export function getpidAsync (callback: TCallback) { asyscall(SYS.getpid, callback); }

/**
 * Get parent process ID.
 */
export function getppid () { return syscall(SYS.getppid); };

/**
 * Get parent process ID.
 */
export function getppidAsync (callback: TCallback) { asyscall(SYS.getppid, callback); }

/**
 * Get parent user ID.
 */
export function getuid () { return syscall(SYS.getuid); }

/**
 * Get parent user ID.
 */
export function getuidAsync (callback: TCallback) { asyscall(SYS.getuid, callback); }

/**
 * Get parent real user ID.
 */
export function geteuid () { return syscall(SYS.geteuid); }

/**
 * Get parent real user ID.
 */
export function geteuidAsync (callback: TCallback) { asyscall(SYS.geteuid, callback); }

/**
 * Get group ID.
 */
export function getgid () { return syscall(SYS.getgid); }

/**
 * Get group ID.
 */
export function getgidAsync (callback: TCallback) { asyscall(SYS.getgid, callback); }

/**
 * Get read group ID.
 */
export function getegid () { return syscall(SYS.getegid); }

/**
 * Get read group ID.
 */
export function getegidAsync (callback: TCallback) { asyscall(SYS.getegid, callback); }

/**
 * Yield CPU time to another thread.
 */
//export function sched_yield () { return syscall(SYS.sched_yield); }

// ## sleep
// export function nanosleep(seconds: number, nanoseconds: number): number {
    // const buf = timespec.pack({
        // tv_sec: [seconds, 0],
        // tv_nsec: [nanoseconds, 0],
    // });
    // return syscall(SYS.nanosleep, buf, NULL);
// }
