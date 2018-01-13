"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var basetypes_1 = require("../basetypes");
//     struct linux_dirent64 {
//         ino64_t        d_ino;    /* 64-bit inode number */
//         off64_t        d_off;    /* 64-bit offset to next structure */
//         unsigned short d_reclen; /* Size of this dirent */
//         unsigned char  d_type;   /* File type */
//         char           d_name[]; /* Filename (null-terminated) */
//     };
//
var linux_dirent64 = typebase_1.Struct.define(19, [
    [0, basetypes_1.uint64, 'ino64_t'],
    [8, basetypes_1.uint64, 'off64_t'],
    [16, basetypes_1.uint16, 'd_reclen'],
    [18, basetypes_1.uint8, 'd_type'],
]);
exports.default = linux_dirent64;
