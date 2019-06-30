/* Codes for SIGSEGV */
export enum SEGV {
    NOOP = 0, /* if only I knew... */
    MAPERR = 1, /* [XSI] address not mapped to object */
    ACCERR = 2, /* [XSI] invalid permission for mapped object */
};
