/**
 * Constants used in `open` system calls, see [open(2)](http://man7.org/linux/man-pages/man2/open.2.html).
 */
export enum O {
    RDONLY        = 0,
    WRONLY        = 1,
    RDWR          = 2,
    ACCMODE       = 3,
    CREAT         = 64,
    EXCL          = 128,
    NOCTTY        = 256,
    TRUNC         = 512,
    APPEND        = 1024,
    NONBLOCK      = 2048,
    DSYNC         = 4096,
    FASYNC          = 8192,
    DIRECT        = 16384,
    LARGEFILE     = 0,
    DIRECTORY     = 65536,
    NOFOLLOW      = 131072,
    NOATIME       = 262144,
    CLOEXEC       = 524288,
    SYNC          = 1052672,
    NDELAY        = 2048,
}
