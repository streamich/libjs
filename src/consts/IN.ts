// inotify
// Supported events suitable for MASK parameter of `inotify_init1` and `inotify_add_watch`.
const enum IN {
    /* Flags set in `inotify_init1`. */
    CLOEXEC             = 524288,
    NONBLOCK            = 2048,

    /* Events set in `inotify_add_watch` */
    ACCESS              = 0x00000001,       /* File was accessed. */
    MODIFY              = 0x00000002,	    /* File was modified. */
    ATTRIB              = 0x00000004,	    /* Metadata changed. */
    CLOSE_WRITE	        = 0x00000008,	    /* Writtable file was closed. */
    CLOSE_NOWRITE       = 0x00000010,	    /* Unwrittable file closed. */
    OPEN                = 0x00000020,	    /* File was opened. */
    MOVED_FROM	        = 0x00000040,	    /* File was moved from X. */
    MOVED_TO            = 0x00000080,	    /* File was moved to Y. */
    CREATE              = 0x00000100,	    /* Subfile was created. */
    DELETE              = 0x00000200,       /* Subfile was deleted. */
    DELETE_SELF         = 0x00000400,       /* Self was deleted. */
    MOVE_SELF           = 0x00000800,       /* Self was moved. */

    /* Events sent by the kernel. */
    UNMOUNT             = 0x00002000,       /* Backing fs was unmounted. */
    Q_OVERFLOW          = 0x00004000,       /* Event queued overflowed. */
    IGNORED             = 0x00008000,       /* File was ignored. */

    /* Helper events. */
    CLOSE	            = IN.CLOSE_WRITE | IN.CLOSE_NOWRITE,    /* Close. */
    MOVE                = IN.MOVED_FROM | IN.MOVED_TO,          /* Moves. */

    /* Special flags. */
    ONLYDIR             = 0x01000000,       /* Only watch path if it is dir. */
    DONT_FOLLOW         = 0x02000000,       /* Do not follow a sym link. */
    EXCL_UNLINK         = 0x04000000,       /* Exclude events on unlinked objects. */
    MASK_ADD            = 0x20000000,       /* Add to mask of an existing watch. */
    ISDIR               = 0x40000000,       /* Event occurred against dir. */
    ONESHOT             = 0x80000000,       /* Only send event once. */

    /* All events which a program can wait on. */
    ALL_EVENTS = IN.ACCESS | IN.MODIFY | IN.ATTRIB | IN.CLOSE_WRITE |
        IN.CLOSE_NOWRITE | IN.OPEN | IN.MOVED_FROM | IN.MOVED_TO |
        IN.CREATE | IN.DELETE	| IN.DELETE_SELF | IN.MOVE_SELF,
}

export default IN;
