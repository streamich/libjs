import { createStruct } from '../../../typebase';
import { int64, int32, uint32, uint16 } from '../basetypes';

//
// In MacOS 10.14:
//
// struct stat {
//     dev_t           st_dev;         /* [XSI] ID of device containing file */
//     ino_t           st_ino;         /* [XSI] File serial number */
//     mode_t          st_mode;        /* [XSI] Mode of file (see below) */
//     nlink_t         st_nlink;       /* [XSI] Number of hard links */
//     uid_t           st_uid;         /* [XSI] User ID of the file */
//     gid_t           st_gid;         /* [XSI] Group ID of the file */
//     dev_t           st_rdev;        /* [XSI] Device ID */
//     time_t          st_atime;       /* [XSI] Time of last access */
//     long            st_atimensec;   /* nsec of last access */
//     time_t          st_mtime;       /* [XSI] Last data modification time */
//     long            st_mtimensec;   /* last data modification nsec */
//     time_t          st_ctime;       /* [XSI] Time of last status change */
//     long            st_ctimensec;   /* nsec of last status change */
//     off_t           st_size;        /* [XSI] file size, in bytes */
//     blkcnt_t        st_blocks;      /* [XSI] blocks allocated for file */
//     blksize_t       st_blksize;     /* [XSI] optimal blocksize for I/O */
//     __uint32_t      st_flags;       /* user defined flags for file */
//     __uint32_t      st_gen;         /* file generation number */
//     __int32_t       st_lspare;      /* RESERVED: DO NOT USE! */
//     __int64_t       st_qspare[2];   /* RESERVED: DO NOT USE! */
// };
//
export const stat64Struct = createStruct([
    [ 'dev', int32 ],
    [ 'ino', uint32 ],
    [ 'mode', uint16 ],
    [ 'nlink', uint16 ],
    [ 'uid', uint32 ],
    [ 'gid', uint32 ],
    [ 'rdev', int32 ],
    [ 'atime', int64 ],
    [ 'atimensec', int64 ],
    [ 'mtime', int64 ],
    [ 'mtimensec', int64 ],
    [ 'ctime', int64 ],
    [ 'ctimensec', int64 ],
    [ 'size', int64 ],
    [ 'blocks', int64 ],
    [ 'blksize', int32 ],
    [ 'flags', uint32 ],
    [ 'gen', uint32 ],
    [ '', int32 ],
    [ '', int64 ],
    [ '', int64 ],
]);

export interface Istat64Struct {
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    atime: [number, number];
    atimensec: [number, number];
    mtime: [number, number];
    mtimensec: [number, number];
    ctime: [number, number];
    ctimensec: [number, number];
    size: [number, number];
    blocks: [number, number];
    blksize: number;
    flags: number;
    gen: number;
}
