const SIG = {
    HUP: 1, /* hangup */
    INT: 2, /* interrupt */
    ILL: 4, /* illegal instruction (not reset when caught) */
    TRAP: 5, /* trace trap (not reset when caught) */
    ABRT: 6, /* abort() */
    IOT: 6, /* compatibility */
    EMT: 7, /* EMT instruction */
    FPE: 8, /* floating point exception */
    KILL: 9, /* kill (cannot be caught or ignored) */
    BUS: 10, /* bus error */
    SEGV: 11, /* segmentation violation */
    SYS: 12, /* bad argument to system call */
    PIPE: 13, /* write on a pipe with no one to read it */
    ALRM: 14, /* alarm clock */
    TERM: 15, /* software termination signal from kill */
    URG: 16, /* urgent condition on IO channel */
    STOP: 17, /* sendable stop signal not from tty */
    TSTP: 18, /* stop signal from tty */
    CONT: 19, /* continue a stopped process */
    CHLD: 20, /* to parent on child stop or exit */
    TTIN: 21, /* to readers pgrp upon background tty read */
    TTOU: 22, /* like TTIN for output if (tp->t_local&LTOSTOP) */
    IO: 23, /* input/output possible signal */
    XCPU: 24, /* exceeded CPU time limit */
    XFSZ: 25, /* exceeded file size limit */
    VTALRM: 26, /* virtual time alarm */
    PROF: 27, /* profiling time alarm */
    WINCH: 28, /* window size changes */
    INFO: 29, /* information request */
    USR1: 30, /* user defined signal 1 */
    USR2: 31, /* user defined signal 2 */
    DFL: 0,
    IGN: 1,
    HOLD: 1,
    ERR: 1,
};

export default SIG;
