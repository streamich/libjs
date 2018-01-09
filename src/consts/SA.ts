const SA = {
    ONSTACK: 0x0001, /* take signal on signal stack */
    RESTART: 0x0002, /* restart system on signal return */
    RESETHAND: 0x0004, /* reset to SIG_DFL when taking signal */
    NOCLDSTOP: 0x0008, /* do not generate SIGCHLD on child stop */
    NODEFER: 0x0010, /* don't mask the signal we're delivering */
    NOCLDWAIT: 0x0020, /* don't keep zombies around */
    SIGINFO: 0x0040, /* signal handler with SA_SIGINFO args */
    USERTRAMP: 0x0100, /* do not bounce off kernel's sigtramp */
    '64REGSET': 0x0200, /* signal handler with SA_SIGINFO args with 64bit regs information */
};

/* the following are the only bits we support from user space, the
 * rest are for kernel use only.
 */
(SA as any).USERSPACE_MASK = SA.ONSTACK | SA.RESTART | SA.RESETHAND | SA.NOCLDSTOP | SA.NODEFER | SA.NOCLDWAIT | SA.SIGINFO;

export default SA;
