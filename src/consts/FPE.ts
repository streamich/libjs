/* Codes for SIGSEGV */
const FPE = {
    NOOP: 0, /* if only I knew... */
    FPE_FLTDIV: 1, /* [XSI] floating point divide by zero */
    FPE_FLTOVF: 2, /* [XSI] floating point overflow */
    FPE_FLTUND: 3, /* [XSI] floating point underflow */
    FPE_FLTRES: 4, /* [XSI] floating point inexact result */
    FPE_FLTINV: 5, /* [XSI] invalid floating point operation */
    FPE_FLTSUB: 6, /* [XSI] subscript out of range -NOTIMP */
    FPE_INTDIV: 7, /* [XSI] integer divide by zero */
    FPE_INTOVF: 8, /* [XSI] integer overflow */
};

export default FPE;
