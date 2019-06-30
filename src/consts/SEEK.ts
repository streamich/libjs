/**
 * Constants used in `lseek` system calls, see [lseek(2)](http://man7.org/linux/man-pages/man2/lseek.2.html).
 */
export enum SEEK {
    CUR = 1,
    END = 2,
    SET = 0,
}
