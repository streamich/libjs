import {Struct} from '../typebase';
import {uint16, int32, uint32, uint64} from '../basetypes';

// In `libc`, <bits/ipc.h> line 42:
//
//     struct ipc_perm {
//         __key_t __key;			// Key.
//         __uid_t uid;			// Owner's user ID.
//         __gid_t gid;			// Owner's group ID.
//         __uid_t cuid;			// Creator's user ID.
//         __gid_t cgid;			// Creator's group ID.
//         unsigned short int mode;		// Read/write permission.
//         unsigned short int __pad1;
//         unsigned short int __seq;		// Sequence number.
//         unsigned short int __pad2;
//         __syscall_ulong_t __glibc_reserved1;
//         __syscall_ulong_t __glibc_reserved2;
//     };
//
// __syscall_ulong_t` is `unsigned long long int`
//
const ipc_perm = Struct.define(48, [ // It is 48 for some reason, auto-padding by GCC?
    [0, int32, '__key'],
    [4, uint32, 'uid'],
    [8, uint32, 'gid'],
    [12, uint32, 'cuid'],
    [16, uint32, 'cgid'],
    [20, uint16, 'mode'],
    // [22, uint16, '__pad1'],
    [24, uint16, '__seq'],
    // [26, uint16, '__pad2'],
    // [28, uint64, '__glibc_reserved1'],
    // [36, uint64, '__glibc_reserved2'],
]);

export interface Iipc_perm {
    __key: number;
    uid: number;
    gid: number;
    cuid: number;
    cgid: number;
    mode: number;
    __seq: number;
}

export default ipc_perm;
