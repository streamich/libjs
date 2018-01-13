"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var ipc_perm_1 = require("./ipc_perm");
var basetypes_1 = require("../basetypes");
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
var shmid_ds = typebase_1.Struct.define(112, [
    [0, ipc_perm_1.default, 'shm_perm'],
    [48, basetypes_1.size_t, 'shm_segsz'],
    [56, basetypes_1.time_t, 'shm_atime'],
    [64, basetypes_1.time_t, 'shm_dtime'],
    [72, basetypes_1.time_t, 'shm_ctime'],
    [80, basetypes_1.pid_t, 'shm_cpid'],
    [84, basetypes_1.pid_t, 'shm_lpid'],
    [88, basetypes_1.uint64, 'shm_nattch'],
]);
exports.default = shmid_ds;
