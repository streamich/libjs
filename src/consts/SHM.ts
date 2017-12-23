const enum SHM {
    INFO = 14,
    STAT = 13,
    LOCK = 11,
    UNLOCK = 12,
    R = 256,
    W = 128,
    RDONLY = 4096,
    RND = 8192,
    REMAP = 16384,
    EXEC = 32768,
    DEST = 512,
    LOCKED = 1024,
    HUGETLB = 2048,
    NORESERVE = 4096,
}

export default SHM;
