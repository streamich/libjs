import {Struct} from '../typebase';
import {int32, uint32} from '../basetypes';

// See <asm/stat.h> line 82:
//
//     __kernel_ulong_t = unsigned long long // 64+ bits
//     __kernel_long_t = long long // 64+ bits
//     unsigned int // 32+ bits
//
// In `libc`:
//
//     struct stat {
//         __kernel_ulong_t	st_dev;
//         __kernel_ulong_t	st_ino;
//         __kernel_ulong_t	st_nlink;
//         unsigned int		st_mode;
//         unsigned int		st_uid;
//         unsigned int		st_gid;
//         unsigned int		__pad0;
//         __kernel_ulong_t	st_rdev;
//         __kernel_long_t		st_size;
//         __kernel_long_t		st_blksize;
//         __kernel_long_t		st_blocks;	// Number 512-byte blocks allocated.
//         __kernel_ulong_t	st_atime;
//         __kernel_ulong_t	st_atime_nsec;
//         __kernel_ulong_t	st_mtime;
//         __kernel_ulong_t	st_mtime_nsec;
//         __kernel_ulong_t	st_ctime;
//         __kernel_ulong_t	st_ctime_nsec;
//         __kernel_long_t		__unused[3];
//     };
//
const statStruct = Struct.define(
    32 * 4, // TODO: Check the correct size for this struct, this may be wrong.
    [
        [0, uint32, 'dev'],
        // dev_hi:         [1 * 4,     buffer.int32],
        [2 * 4, uint32, 'ino'],
        // ino_hi:         [3 * 4,     buffer.int32],
        [4 * 4, uint32, 'nlink'],
        // nlink_hi:       [5 * 4,     buffer.int32],

        [6 * 4, int32, 'mode'],
        [7 * 4, int32, 'uid'],
        [8 * 4, int32, 'gid'],
        // __pad0:         [9 * 4,     buffer.int32],

        [10 * 4, uint32, 'rdev'],
        // rdev_hi:        [11 * 4,    buffer.int32],
        [12 * 4, uint32, 'size'],
        // size_hi:        [13 * 4,    buffer.int32],
        [14 * 4, uint32, 'blksize'],
        // blksize_hi:     [15 * 4,    buffer.int32],
        [16 * 4, uint32, 'blocks'],
        // blocks_hi:      [17 * 4,    buffer.int32],
        [18 * 4, uint32, 'atime'],
        // atime_hi:       [19 * 4,    buffer.int32],
        [20 * 4, uint32, 'atime_nsec'],
        // atime_nsec_hi:  [21 * 4,    buffer.int32],
        [22 * 4, uint32, 'mtime'],
        // mtime_hi:       [23 * 4,    buffer.int32],
        [24 * 4, uint32, 'mtime_nsec'],
        // mtime_nsec_hi:  [25 * 4,    buffer.int32],
        [26 * 4, uint32, 'ctime'],
        // ctime_hi:       [27 * 4,    buffer.int32],
        [28 * 4, uint32, 'ctime_nsec'],
        // ctime_nsec_hi:  [29 * 4,    buffer.int32],
        // __unused:       [30 * 4,    buffer.int32],
    ]
);

export interface IstatStruct {
    dev: number;
    ino: number;
    nlink: number;
    mode: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    atime: number;
    atime_nsec: number;
    mtime: number;
    mtime_nsec: number;
    ctime: number;
    ctime_nsec: number;
}

export default statStruct;
