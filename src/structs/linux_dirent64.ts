import {Struct} from '../typebase';
import {uint8, uint16, uint64} from '../basetypes';

//     struct linux_dirent64 {
//         ino64_t        d_ino;    /* 64-bit inode number */
//         off64_t        d_off;    /* 64-bit offset to next structure */
//         unsigned short d_reclen; /* Size of this dirent */
//         unsigned char  d_type;   /* File type */
//         char           d_name[]; /* Filename (null-terminated) */
//     };
//
const linux_dirent64 = Struct.define(19, [ // 20+ bytes, 19 + null-terminated string.
    [0, uint64, 'ino64_t'],
    [8, uint64, 'off64_t'],
    [16, uint16, 'd_reclen'],
    [18, uint8, 'd_type'],
]);

export interface Ilinux_dirent64 {
    ino64_t: [number, number],
    off64_t: [number, number],
    d_reclen: number,
    d_type: number,
}

export default linux_dirent64;
