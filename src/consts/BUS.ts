/* Codes for SIGBUS */
export enum BUS {
    NOOP = 0, /* if only I knew... */
    ADRALN = 1, /* [XSI] Invalid address alignment */
    ADRERR = 2, /* [XSI] Nonexistent physical address -NOTIMP */
    OBJERR = 3, /* [XSI] Object-specific HW error - NOTIMP */
};
