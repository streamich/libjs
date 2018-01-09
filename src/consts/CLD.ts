/* Codes for SIGCHLD */
const CLD = {
    NOOP: 0, /* if only I knew... */
    EXITED: 1, /* [XSI] child has exited */
    KILLED: 2, /* [XSI] terminated abnormally, no core file */
    DUMPED: 3, /* [XSI] terminated abnormally, core file */
    TRAPPED: 4, /* [XSI] traced child has trapped */
    STOPPED: 5, /* [XSI] child has stopped */
    CONTINUED: 6, /* [XSI] stopped child has continued */
};

export default CLD;
