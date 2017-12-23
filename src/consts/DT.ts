// Directories
const enum DT {
    BLK = 6,        // This is a block device.
    CHR = 2,        // This is a character device.
    DIR = 4,        // This is a directory.
    FIFO = 1,       // This is a named pipe (FIFO).
    LNK = 10,       // This is a symbolic link.
    REG = 8,        // This is a regular file.
    SOCK = 12,      // This is a UNIX domain socket.
    UNKNOWN = 0,    // The file type is unknown.
}

export default DT;
