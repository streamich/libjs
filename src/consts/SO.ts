const enum SO {
    DEBUG = 0x0001,		    /* Record debugging information.  */
    ACCEPTCONN = 0x0002,	/* Accept connections on socket.  */
    REUSEADDR = 0x0004,	    /* Allow reuse of local addresses.  */
    KEEPALIVE = 0x0008,	    /* Keep connections alive and send SIGPIPE when they die.  */
    DONTROUTE = 0x0010,	    /* Don't do local routing.  */
    BROADCAST = 0x0020,	    /* Allow transmission of broadcast messages.  */
    USELOOPBACK = 0x0040,	/* Use the software loopback to avoidhardware use when possible.  */
    LINGER = 0x0080,		/* Block on close of a reliable
    OOBINLINE = 0x0100,	    /* Receive out-of-band data in-band.  */
    REUSEPORT = 0x0200,	    /* Allow local address and port reuse.  */
    SNDBUF = 0x1001,		/* Send buffer size.  */
    RCVBUF = 0x1002,		/* Receive buffer.  */
    SNDLOWAT = 0x1003,	    /* Send low-water mark.  */
    RCVLOWAT = 0x1004,	    /* Receive low-water mark.  */
    SNDTIMEO = 0x1005,	    /* Send timeout.  */
    RCVTIMEO = 0x1006,	    /* Receive timeout.  */
    ERROR = 0x1007,		    /* Get and clear error status.  */
    STYLE = 0x1008,		    /* Get socket connection style.  */
    TYPE = SO.STYLE		    /* Compatible name for STYLE.  */
}

export default SO;
