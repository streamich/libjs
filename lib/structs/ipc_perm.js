"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var basetypes_1 = require("../basetypes");
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
var ipc_perm = typebase_1.Struct.define(48, [
    [0, basetypes_1.int32, '__key'],
    [4, basetypes_1.uint32, 'uid'],
    [8, basetypes_1.uint32, 'gid'],
    [12, basetypes_1.uint32, 'cuid'],
    [16, basetypes_1.uint32, 'cgid'],
    [20, basetypes_1.uint16, 'mode'],
    // [22, uint16, '__pad1'],
    [24, basetypes_1.uint16, '__seq'],
]);
exports.default = ipc_perm;
