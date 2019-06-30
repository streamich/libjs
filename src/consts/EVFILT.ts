export enum EVFILT {
    READ = -1,
    WRITE = -2,
    AIO = -3, // attached to aio requests
    VNODE = -4,	// attached to vnodes
    PROC = -5,	// attached to struct proc
    SIGNAL = -6, // attached to struct proc
    TIMER = -7, // timers
    MACHPORT = -8, // Mach portsets
    FS = -9, // Filesystem events
    USER = -10, // User events
    /* (-11) unused */
    VM = -12, // Virtual memory events
    EXCEPT = -15, // Exception events
    SYSCOUNT = 17,
    // THREADMARKER = EVFILT.SYSCOUNT // Internal use only
}
