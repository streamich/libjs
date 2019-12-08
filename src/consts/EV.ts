export enum EV {
    /* actions */
    ADD = 0x0001,               /* add event to kq (implies enable) */
    DELETE = 0x0002,            /* delete event from kq */
    ENABLE = 0x0004,            /* enable event */
    DISABLE = 0x0008,           /* disable event (not reported) */

    /* flags */
    ONESHOT = 0x0010,           /* only report one occurrence */
    CLEAR = 0x0020,             /* clear event state after reporting */
    RECEIPT = 0x0040,           /* force immediate event output */
                                /* ... with or without EV_ERROR */
                                /* ... use KEVENT_FLAG_ERROR_EVENTS */
                                /*     on syscalls supporting flags */

    DISPATCH = 0x0080,		    /* disable event after reporting */
    UDATA_SPECIFIC = 0x0100,    /* unique kevent per udata value */

    DISPATCH2 = EV.DISPATCH | EV.UDATA_SPECIFIC,
                                /* ... in combination with EV_DELETE */
                                /* will defer delete until udata-specific */
                                /* event enabled. EINPROGRESS will be */
                                /* returned to indicate the deferral */

    VANISHED = 0x0200,          /* report that source has vanished  */
                                /* ... only valid with EV_DISPATCH2 */

    SYSFLAGS = 0xF000,          /* reserved by system */
    FLAG0 = 0x1000,             /* filter-specific flag */
    FLAG1 = 0x2000,             /* filter-specific flag */

    /* returned values */
    EOF = 0x8000,               /* EOF detected */
    ERROR = 0x4000,             /* error, data contains errno */

    /*
    * Filter specific flags for EVFILT_READ
    *
    * The default behavior for EVFILT_READ is to make the "read" determination
    * relative to the current file descriptor read pointer. 
    *
    * The EV_POLL flag indicates the determination should be made via poll(2)
    * semantics. These semantics dictate always returning true for regular files,
    * regardless of the amount of unread data in the file.  
    *
    * On input, EV_OOBAND specifies that filter should actively return in the
    * presence of OOB on the descriptor. It implies that filter will return
    * if there is OOB data available to read OR when any other condition
    * for the read are met (for example number of bytes regular data becomes >=
    * low-watermark).
    * If EV_OOBAND is not set on input, it implies that the filter should not actively
    * return for out of band data on the descriptor. The filter will then only return
    * when some other condition for read is met (ex: when number of regular data bytes
    * >=low-watermark OR when socket can't receive more data (SS_CANTRCVMORE)).
    *
    * On output, EV_OOBAND indicates the presence of OOB data on the descriptor.
    * If it was not specified as an input parameter, then the data count is the
    * number of bytes before the current OOB marker, else data count is the number
    * of bytes beyond OOB marker.
    */
    POLL = EV.FLAG0,
    OOBAND = EV.FLAG1,
}
