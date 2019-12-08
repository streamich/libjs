export enum NOTE {
    /**
     * On input, NOTE_TRIGGER causes the event to be triggered for output.
     */
    TRIGGER = 0x01000000,

    /**
     * On input, the top two bits of fflags specifies how the lower twenty four 
     * bits should be applied to the stored value of fflags.
     *
     * On output, the top two bits will always be set to NOTE_FFNOP and the
     * remaining twenty four bits will contain the stored fflags value.
     */
    FFNOP = 0x00000000,             /* ignore input fflags */
    FFAND = 0x40000000,             /* and fflags */
    FFOR = 0x80000000,              /* or fflags */
    FFCOPY = 0xc0000000,            /* copy fflags */
    FFCTRLMASK = 0xc0000000,        /* mask for operations */
    FFLAGSMASK = 0x00ffffff,


    /**
     * data/hint fflags for EVFILT_{READ|WRITE}, shared with userspace
     *
     * The default behavior for EVFILT_READ is to make the determination
     * realtive to the current file descriptor read pointer.
     */
    LOWAT = 0x00000001,             /* low water mark */

    /* data/hint flags for EVFILT_EXCEPT, shared with userspace */
    OOB = 0x00000002,               /* OOB data */

    /**
     * data/hint fflags for EVFILT_VNODE, shared with userspace
     */
    DELETE = 0x00000001,            /* vnode was removed */
    WRITE = 0x00000002,             /* data contents changed */
    EXTEND = 0x00000004,            /* size increased */
    ATTRIB = 0x00000008,            /* attributes changed */
    LINK = 0x00000010,              /* link count changed */
    RENAME = 0x00000020,            /* vnode was renamed */
    REVOKE = 0x00000040,            /* vnode access was revoked */
    NONE = 0x00000080,              /* No specific vnode event: to test for EVFILT_READ activation*/
    FUNLOCK = 0x00000100,           /* vnode was unlocked by flock(2) */

    EXIT = 0x80000000,              /* process exited */
    FORK = 0x40000000,              /* process forked */
    EXEC = 0x20000000,              /* process exec'd */
    // DEPRECATED:
    // REAP = 0x10000000,              /* process reaped */
    SIGNAL = 0x08000000,            /* shared with EVFILT_SIGNAL */
    EXITSTATUS = 0x04000000,        /* exit status to be returned, valid for child process only */
    EXIT_DETAIL = 0x02000000,       /* provide details on reasons for exit */

    PDATAMASK = 0x000fffff,         /* mask for signal & exit status */
    PCTRLMASK = ~NOTE.PDATAMASK,

    // DEPRECATED:
    // EXIT_REPARENTED	= ...


    /**
     * If NOTE_EXIT_DETAIL is present, these bits indicate specific reasons for exiting.
     */
    EXIT_DETAIL_MASK = 0x00070000,
    EXIT_DECRYPTFAIL = 0x00010000,
    EXIT_MEMORY = 0x00020000,
    EXIT_CSERROR = 0x00040000,


    /**
     * data/hint fflags for EVFILT_VM, shared with userspace.
     */
    VM_PRESSURE = 0x80000000,                       /* will react on memory pressure */
    VM_PRESSURE_TERMINATE = 0x40000000,             /* will quit on memory pressure, possibly after cleaning up dirty state */
    VM_PRESSURE_SUDDEN_TERMINATE = 0x20000000,      /* will quit immediately on memory pressure */
    VM_ERROR = 0x10000000,                          /* there was an error */


    /**
     * data/hint fflags for EVFILT_TIMER, shared with userspace.
     * The default is a (repeating) interval timer with the data
     * specifying the timeout interval in milliseconds.
     *
     * All timeouts are implicitly EV_CLEAR events.
     */
    SECONDS = 0x00000001,               /* data is seconds         */
    USECONDS = 0x00000002,              /* data is microseconds    */
    NSECONDS = 0x00000004,              /* data is nanoseconds     */
    ABSOLUTE = 0x00000008,              /* absolute timeout        */
                                        /* ... implicit EV_ONESHOT, timeout uses the gettimeofday epoch */
    LEEWAY = 0x00000010,                /* ext[1] holds leeway for power aware timers */
    CRITICAL = 0x00000020,              /* system does minimal timer coalescing */
    BACKGROUND = 0x00000040,            /* system does maximum timer coalescing */
    MACH_CONTINUOUS_TIME = 0x00000080,

	/**
	 * NOTE_MACH_CONTINUOUS_TIME:
	 * with NOTE_ABSOLUTE: causes the timer to continue to tick across sleep,
	 *      still uses gettimeofday epoch
	 * with NOTE_MACHTIME and NOTE_ABSOLUTE: uses mach continuous time epoch
	 * without NOTE_ABSOLUTE (interval timer mode): continues to tick across sleep
	 */
    MACHTIME = 0x00000100,              /* data is mach absolute time units */
	/* timeout uses the mach absolute time epoch */


    /**
     * data/hint fflags for EVFILT_MACHPORT, shared with userspace.
     *
     * Only portsets are supported at this time.
     *
     * The fflags field can optionally contain the MACH_RCV_MSG, MACH_RCV_LARGE,
     * and related trailer receive options as defined in <mach/message.h>.
     * The presence of these flags directs the kevent64() call to attempt to receive
     * the message during kevent delivery, rather than just indicate that a message exists.
     * On setup, The ext[0] field contains the receive buffer pointer and ext[1] contains
     * the receive buffer length.  Upon event delivery, the actual received message size
     * is returned in ext[1].  As with mach_msg(), the buffer must be large enough to
     * receive the message and the requested (or default) message trailers.  In addition,
     * the fflags field contains the return code normally returned by mach_msg().
     *
     * If MACH_RCV_MSG is specified, and the ext[1] field specifies a zero length, the
     * system call argument specifying an ouput area (kevent_qos) will be consulted. If
     * the system call specified an output data area, the user-space address
     * of the received message is carved from that provided output data area (if enough
     * space remains there). The address and length of each received message is 
     * returned in the ext[0] and ext[1] fields (respectively) of the corresponding kevent.
     *
     * IF_MACH_RCV_VOUCHER_CONTENT is specified, the contents of the message voucher is
     * extracted (as specified in the xflags field) and stored in ext[2] up to ext[3]
     * length.  If the input length is zero, and the system call provided a data area,
     * the space for the voucher content is carved from the provided space and its
     * address and length is returned in ext[2] and ext[3] respectively.
     *
     * If no message receipt options were provided in the fflags field on setup, no
     * message is received by this call. Instead, on output, the data field simply
     * contains the name of the actual port detected with a message waiting.
     */

    /*
    * DEPRECATED!!!!!!!!!
    * NOTE_TRACK, NOTE_TRACKERR, and NOTE_CHILD are no longer supported as of 10.5
    */
    /* additional flags for EVFILT_PROC */
    // TRACK = 0x00000001,         /* follow across forks */
    // TRACKERR = 0x00000002,      /* could not track child */
    // CHILD = 0x00000004,         /* am a child process */
}
