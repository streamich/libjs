// Constants used in `access` system call, see [access(2)](http://man7.org/linux/man-pages/man2/faccessat.2.html).
const enum AMODE {
    F_OK = 0,
    X_OK = 1,
    W_OK = 2,
    R_OK = 4,
}

export default AMODE;
