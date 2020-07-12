export enum F {
    /**
     * Duplicate file descriptor
     */
    DUPFD = 0,
    /**
     * Get file descriptor flags.
     */
    GETFD = 1,
    /* set file descriptor flags */
    SETFD =         2, 
    GETFL =         3,               /* get file status flags */
    SETFL =         4,               /* set file status flags */
    GETOWN =        5,               /* get SIGIO/SIGURG proc/pgrp */
    SETOWN =        6,               /* set SIGIO/SIGURG proc/pgrp */
    GETLK =         7,               /* get record locking information */
    /**
     * Set record locking information.
     */
    SETLK = 8,
    SETLKW =        9,               /* F_SETLK; wait if blocked */

    SETLKWTIMEOUT = 10,              /* F_SETLK; wait if blocked, return on timeout */


    // F_FLUSH_DATA    40
    // F_CHKCLEAN      41              /* Used for regression test */
    // F_PREALLOCATE   42              /* Preallocate storage */
    // F_SETSIZE       43              /* Truncate a file without zeroing space */
    // F_RDADVISE      44              /* Issue an advisory read async with no copy to user */
    // F_RDAHEAD       45              /* turn read ahead off/on for this fd */
    // F_NOCACHE       48              /* turn data caching off/on for this fd */
    // F_LOG2PHYS      49              /* file offset to device offset */
    // F_GETPATH       50              /* return the full path of the fd */
    // F_FULLFSYNC     51              /* fsync + ask the drive to flush to the media */
    // F_PATHPKG_CHECK 52              /* find which component (if any) is a package */
    // F_FREEZE_FS     53              /* "freeze" all fs operations */
    // F_THAW_FS       54              /* "thaw" all fs operations */
    // F_GLOBAL_NOCACHE 55             /* turn data caching off/on (globally) for this file */
    // F_ADDSIGS       59              /* add detached signatures */
    // F_ADDFILESIGS   61              /* add signature from same file (used by dyld for shared libs) */
    // F_NODIRECT      62              /* used in conjunction with F_NOCACHE to indicate that DIRECT, synchonous writes */
                                        /* should not be used (i.e. its ok to temporaily create cached pages) */
    // F_GETPROTECTIONCLASS    63              /* Get the protection class of a file from the EA, returns int */
    // F_SETPROTECTIONCLASS    64              /* Set the protection class of a file for the EA, requires int */
    // F_LOG2PHYS_EXT  65              /* file offset to device offset, extended */
    // F_GETLKPID              66              /* get record locking information, per-process */
    /* See F_DUPFD_CLOEXEC below for 67 */
    // F_SETBACKINGSTORE       70      /* Mark the file as being the backing store for another filesystem */
    // F_GETPATH_MTMINFO       71      /* return the full path of the FD, but error in specific mtmd circumstances */
    // F_GETCODEDIR            72      /* Returns the code directory, with associated hashes, to the caller */
    // F_SETNOSIGPIPE          73      /* No SIGPIPE generated on EPIPE */
    // F_GETNOSIGPIPE          74      /* Status of SIGPIPE for this fd */
    // F_TRANSCODEKEY          75      /* For some cases, we need to rewrap the key for AKS/MKB */
    // F_SINGLE_WRITER         76      /* file being written to a by single writer... if throttling enabled, writes */
                                        /* may be broken into smaller chunks with throttling in between */
    // F_GETPROTECTIONLEVEL    77      /* Get the protection version number for this filesystem */
    // F_FINDSIGS              78      /* Add detached code signatures (used by dyld for shared libs) */
    // F_ADDFILESIGS_FOR_DYLD_SIM 83   /* Add signature from same file, only if it is signed by Apple (used by dyld for simulator) */
    // F_BARRIERFSYNC          85      /* fsync + issue barrier to drive */
    // F_ADDFILESIGS_RETURN    97      /* Add signature from same file, return end offset in structure on success */
    // F_CHECK_LV              98      /* Check if Library Validation allows this Mach-O file to be mapped into the calling process */
    // F_PUNCHHOLE     99              /* Deallocate a range of the file */
    // F_TRIM_ACTIVE_FILE      100 /* Trim an active file */

    // FS-specific fcntl()'s numbers begin at 0x00010000 and go up
    // FCNTL_FS_SPECIFIC_BASE  0x00010000
    // F_DUPFD_CLOEXEC         67      /* mark the dup with FD_CLOEXEC */
    /* file descriptor flags (F_GETFD, F_SETFD) */
    // FD_CLOEXEC      1               /* close-on-exec flag */

    /* record locking flags (F_GETLK, F_SETLK, F_SETLKW) */
    // F_RDLCK         1               /* shared or read lock */
    // F_UNLCK         2               /* unlock */
    // F_WRLCK         3               /* exclusive or write lock */
}
