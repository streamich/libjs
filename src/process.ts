// Process
import {SYS, timespec, NULL} from './platform';


const createSyscall = (num) => () => libsys.syscall(num);
const createAsyscall = (num) => (callback: TCallback) => libsys.asyscall(num, callback);

// ### getpid
//
//     getpid(): number
//
// Get process ID.
//
export const getpid = createSyscall(SYS.getpid);
export const getpidAsync = createAsyscall(SYS.getpid);

// ### getppid
//
//     getppid(): number
//
// Get parent process ID.
//
export const getppid = createSyscall(SYS.getppid);
export const getppidAsync = createAsyscall(SYS.getppid);

// ### getuid
//
//     getuid(): number
//
// Get parent user ID.
//
export const getuid = createSyscall(SYS.getuid);
export const getuidAsync = createAsyscall(SYS.getuid);

// ### geteuid
//
//     geteuid(): number
//
// Get parent real user ID.
//
export const geteuid = createSyscall(SYS.geteuid);
export const geteuidAsync = createAsyscall(SYS.geteuid);

// ### getgid
//
//     getgid(): number
//
// Get group ID.
//
export const getgid = createSyscall(SYS.getgid);
export const getgidAsync = createAsyscall(SYS.getgid);

// ### getgid
//
//     getegid(): number
//
// Get read group ID.
//
export const getegid = createSyscall(SYS.getegid);
export const getegidAsync = createAsyscall(SYS.getegid);

// ### sched_yield
export const sched_yield = createSyscall(SYS.sched_yield);

// ## sleep
export function nanosleep(seconds: number, nanoseconds: number): number {
    const buf = timespec.pack({
        tv_sec: [seconds, 0],
        tv_nsec: [nanoseconds, 0],
    });
    return libsys.syscall(SYS.nanosleep, buf, NULL);
}
