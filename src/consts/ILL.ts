/* Codes for SIGILL */
const ILL = {
    NOOP: 0, /* if only I knew... */
    ILLOPC: 1, /* [XSI] illegal opcode */
    ILLTRP: 2, /* [XSI] illegal trap */
    PRVOPC: 3, /* [XSI] privileged opcode */
    ILLOPN: 4, /* [XSI] illegal operand -NOTIMP */
    ILLADR: 5, /* [XSI] illegal addressing mode -NOTIMP */
    PRVREG: 6, /* [XSI] privileged register -NOTIMP */
    COPROC: 7, /* [XSI] coprocessor error -NOTIMP */
    BADSTK: 8, /* [XSI] internal stack error -NOTIMP */
};

export default ILL;
