export enum KEVENT {
    FLAG_NONE = 0x000,  /* no flag value */
    FLAG_IMMEDIATE = 0x001, /* immediate timeout */
    FLAG_ERROR_EVENTS = 0x002, /* output events only include change errors */
}
