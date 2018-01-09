/* Codes for SIGPOLL */
const POLL = {
    IN: 1, /* [XSR] Data input available */
    OUT: 2, /* [XSR] Output buffers available */
    MSG: 3, /* [XSR] Input message available */
    ERR: 4, /* [XSR] I/O error */
    PRI: 5, /* [XSR] High priority input available */
    HUP: 6, /* [XSR] Device disconnected */
};

export default POLL;
