// Constants used in `mmap` system calls,
// see [mmap(2)](http://man7.org/linux/man-pages/man2/mmap.2.html).
const enum PROT {
    NONE    = 0, // Pages may not be accessed.
    READ    = 1, // Pages may be read.
    WRITE   = 2, // Pages may be written.
    EXEC    = 4, // Pages may be executed.
}

export default PROT;
