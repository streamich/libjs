const enum S {
    IFMT = 61440,   // type of file
    IFBLK = 24576,  // block special
    IFCHR = 8192,   // character special
    IFIFO = 4096,   // FIFO special
    IFREG = 32768,  // regular
    IFDIR = 16384,  // directory
    IFLNK = 40960,  // symbolic link
    IFSOCK = 49152, // socket

    IRWXU = 448,    // read, write, execute/search by owner
    IRUSR = 256,    // read permission, owner
    IWUSR = 128,    // write permission, owner
    IXUSR = 64,     // execute/search permission, owner
    IRWXG = 56,     // read, write, execute/search by group
    IRGRP = 32,     // read permission, group
    IWGRP = 16,     // write permission, group
    IXGRP = 8,      // execute/search permission, group
    IRWXO = 7,      // read, write, execute/search by others
    IROTH = 4,      // read permission, others
    IWOTH = 2,      // write permission, others
    IXOTH = 1,      // execute/search permission, others
    ISUID = 2048,   // set-user-ID on execution
    ISGID = 1024,   // set-group-ID on execution
    ISVTX = 512,    // on directories, restricted deletion flag
}

export default S;
