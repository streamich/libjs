const enum IPPORT {
    ECHO = 7,		    /* Echo service.  */
    DISCARD = 9,	    /* Discard transmissions service.  */
    SYSTAT = 11,	    /* System status service.  */
    DAYTIME = 13,	    /* Time of day service.  */
    NETSTAT = 15,	    /* Network status service.  */
    FTP = 21,		    /* File Transfer Protocol.  */
    TELNET = 23,		/* Telnet protocol.  */
    SMTP = 25,		    /* Simple Mail Transfer Protocol.  */
    TIMESERVER = 37,	/* Timeserver service.  */
    NAMESERVER = 42,	/* Domain Name Service.  */
    WHOIS = 43,		    /* Internet Whois service.  */
    MTP = 57,
    TFTP = 69,		    /* Trivial File Transfer Protocol.  */
    RJE = 77,
    FINGER = 79,		/* Finger service.  */
    TTYLINK = 87,
    SUPDUP = 95,		/* SUPDUP protocol.  */
    EXECSERVER = 512,	/* execd service.  */
    LOGINSERVER = 513,	/* rlogind service.  */
    CMDSERVER = 514,
    EFSSERVER = 520,
    /* UDP ports.  */
    BIFFUDP = 512,
    WHOSERVER = 513,
    ROUTESERVER = 520,
    /* Ports less than this value are reserved for privileged processes.  */
    RESERVED = 1024,
    /* Ports greater this value are reserved for (non-privileged) servers.  */
    USERRESERVED = 5000
}

export default IPPORT;
