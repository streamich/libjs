// Used in shmget, can be bitwise orred with file flags.
const enum IPC {
    RMID = 0,
    SET = 1,
    STAT = 2,
    INFO = 3,
    CREAT = 512,
    EXCL = 1024,
}

export default IPC;