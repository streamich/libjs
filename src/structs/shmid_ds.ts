import {Struct} from '../typebase';
import ipc_perm, {Iipc_perm} from './ipc_perm';
import {size_t, time_t, pid_t, uint64} from '../basetypes';

// In `libc`, <bits/shm.h> line 49:
//
//     struct shmid_ds {
//         struct ipc_perm shm_perm;		// operation permission struct
//         size_t shm_segsz;			// size of segment in bytes
//         __time_t shm_atime;			// time of last shmat()
//     #ifndef __x86_64__
//         unsigned long int __glibc_reserved1;
//     #endif
//         __time_t shm_dtime;			// time of last shmdt()
//     #ifndef __x86_64__
//         unsigned long int __glibc_reserved2;
//     #endif
//         __time_t shm_ctime;			// time of last change by shmctl()
//     #ifndef __x86_64__
//         unsigned long int __glibc_reserved3;
//     #endif
//         __pid_t shm_cpid;			// pid of creator
//         __pid_t shm_lpid;			// pid of last shmop
//         shmatt_t shm_nattch;		// number of current attaches
//         __syscall_ulong_t __glibc_reserved4;
//         __syscall_ulong_t __glibc_reserved5;
//     };
//
// From internet:
//
//     struct shmid_ds {
//         struct ipc_perm shm_perm;    // Ownership and permissions
//         size_t          shm_segsz;   // Size of segment (bytes)
//         time_t          shm_atime;   // Last attach time
//         time_t          shm_dtime;   // Last detach time
//         time_t          shm_ctime;   // Last change time
//         pid_t           shm_cpid;    // PID of creator
//         pid_t           shm_lpid;    // PID of last shmat(2)/shmdt(2)
//         shmatt_t        shm_nattch;  // No. of current attaches
//         // ...
//     };
//
const shmid_ds = Struct.define(112, [
    [0, ipc_perm, 'shm_perm'],  // 48
    [48, size_t, 'shm_segsz'],  // 8
    [56, time_t, 'shm_atime'],  // 8
    [64, time_t, 'shm_dtime'], // 8
    [72, time_t, 'shm_ctime'], // 8
    [80, pid_t, 'shm_cpid'], // 4
    [84, pid_t, 'shm_lpid'], // 4
    [88, uint64, 'shm_nattch'], // 8
    // [96, uint64, '__glibc_reserved4'], // 8
    // [104, uint64, '__glibc_reserved5'], // 8 //// 112
]);

export interface Ishmid_ds {
    shm_perm: Iipc_perm;
    shm_segsz: [number, number];
    shm_atime: [number, number];
    shm_dtime: [number, number];
    shm_ctime: [number, number];
    shm_cpid: number;
    shm_lpid: number;
    shm_nattch: [number, number];
}

export default shmid_ds;
