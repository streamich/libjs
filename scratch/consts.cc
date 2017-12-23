// g++ .consts.cc -o .consts && .consts
#include <iostream>
#include <stdint.h>
#include <string.h>
#include <syscall.h>
#include <unistd.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <time.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <arpa/inet.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <utime.h>
#include <sys/time.h>
#include <dirent.h>
#include <stdio.h>
#include <features.h>
#include <sys/dir.h>
#include <sys/inotify.h>


using namespace std;

int main() {

    std::cout << "SYS_read = " << SYS_read  << "," << endl;
    std::cout << "SYS_write = " << SYS_write  << "," << endl;
    std::cout << "SYS_open = " << SYS_open  << "," << endl;
    std::cout << "SYS_close = " << SYS_close  << "," << endl;
    std::cout << "SYS_stat = " << SYS_stat  << "," << endl;
    std::cout << "SYS_fstat = " << SYS_fstat  << "," << endl;
    std::cout << "SYS_lstat = " << SYS_lstat  << "," << endl;
    std::cout << "SYS_poll = " << SYS_poll  << "," << endl;
    std::cout << "SYS_lseek = " << SYS_lseek  << "," << endl;
    std::cout << "SYS_mmap = " << SYS_mmap  << "," << endl;
    std::cout << "SYS_mprotect = " << SYS_mprotect  << "," << endl;
    std::cout << "SYS_munmap = " << SYS_munmap  << "," << endl;


    std::cout << "SYS_fcntl = " << SYS_fcntl << "," << endl;
    std::cout << "SYS_epoll_create = " << SYS_epoll_create << "," << endl;
    std::cout << "SYS_epoll_wait = " << SYS_epoll_wait << "," << endl;
    std::cout << "SYS_epoll_ctl = " << SYS_epoll_ctl << "," << endl;
    std::cout << "SYS_epoll_create1 = " << SYS_epoll_create1 << "," << endl;

    std::cout << "F_OK = " << F_OK << "," << endl;
    std::cout << "R_OK = " << R_OK << "," << endl;
    std::cout << "W_OK = " << W_OK << "," << endl;
    std::cout << "X_OK = " << X_OK << "," << endl;

    std::cout << "S_IFMT = " << S_IFMT << "," << endl;
    std::cout << "S_IFBLK = " << S_IFBLK << "," << endl;
    std::cout << "S_IFCHR = " << S_IFCHR << "," << endl;
    std::cout << "S_IFIFO = " << S_IFIFO << "," << endl;
    std::cout << "S_IFREG = " << S_IFREG << "," << endl;
    std::cout << "S_IFDIR = " << S_IFDIR << "," << endl;
    std::cout << "S_IFLNK = " << S_IFLNK << "," << endl;
    std::cout << "S_IRWXU = " << S_IRWXU << "," << endl;
    std::cout << "S_IRUSR = " << S_IRUSR << "," << endl;
    std::cout << "S_IWUSR = " << S_IWUSR << "," << endl;
    std::cout << "S_IXUSR = " << S_IXUSR << "," << endl;
    std::cout << "S_IRWXG = " << S_IRWXG << "," << endl;
    std::cout << "S_IRGRP = " << S_IRGRP << "," << endl;
    std::cout << "S_IWGRP = " << S_IWGRP << "," << endl;
    std::cout << "S_IXGRP = " << S_IXGRP << "," << endl;
    std::cout << "S_IRWXO = " << S_IRWXO << "," << endl;
    std::cout << "S_IROTH = " << S_IROTH << "," << endl;
    std::cout << "S_IWOTH = " << S_IWOTH << "," << endl;
    std::cout << "S_IXOTH = " << S_IXOTH << "," << endl;
    std::cout << "S_ISUID = " << S_ISUID << "," << endl;
    std::cout << "S_ISGID = " << S_ISGID << "," << endl;
    std::cout << "S_ISVTX = " << S_ISVTX << "," << endl;
    std::cout << "S_IFSOCK  = " << S_IFSOCK  << "," << endl;

    std::cout << "IPC_CREAT = " << IPC_CREAT << "," << endl;
    std::cout << "IPC_EXCL = " << IPC_EXCL << "," << endl;
    std::cout << "IPC_RMID = " << IPC_RMID << "," << endl;
    std::cout << "IPC_STAT = " << IPC_STAT << "," << endl;
    std::cout << "IPC_SET = " << IPC_SET << "," << endl;
    std::cout << "IPC_RMID = " << IPC_RMID << "," << endl;
    std::cout << "IPC_INFO = " << IPC_INFO << "," << endl;

    std::cout << "SHM_INFO = " << SHM_INFO << "," << endl;
    std::cout << "SHM_STAT = " << SHM_STAT << "," << endl;
    std::cout << "SHM_LOCK = " << SHM_LOCK << "," << endl;
    std::cout << "SHM_UNLOCK = " << SHM_UNLOCK << "," << endl;
    std::cout << "SHM_R = " << SHM_R << "," << endl;
    std::cout << "SHM_W = " << SHM_W << "," << endl;
    std::cout << "SHM_RDONLY = " << SHM_RDONLY << "," << endl;
    std::cout << "SHM_RND = " << SHM_RND << "," << endl;
    std::cout << "SHM_REMAP = " << SHM_REMAP << "," << endl;
    std::cout << "SHM_EXEC = " << SHM_EXEC << "," << endl;
    std::cout << "SHM_DEST = " << SHM_DEST << "," << endl;
    std::cout << "SHM_LOCKED = " << SHM_LOCKED << "," << endl;
    std::cout << "SHM_HUGETLB = " << SHM_HUGETLB << "," << endl;
    std::cout << "SHM_NORESERVE = " << SHM_NORESERVE << "," << endl;


    // Errors
    std::cout << "EADDRINUSE = " << EADDRINUSE << "," << endl;
    std::cout << "EBADF = " << EBADF << "," << endl;
    std::cout << "ENOTSOCK = " << ENOTSOCK << "," << endl;
    std::cout << "EOPNOTSUPP = " << EOPNOTSUPP << "," << endl;
    std::cout << "E2BIG = " << E2BIG << "," << endl;
    std::cout << "EACCES = " << EACCES << "," << endl;
    std::cout << "EADDRINUSE = " << EADDRINUSE << "," << endl;
    std::cout << "EADDRNOTAVAIL = " << EADDRNOTAVAIL << "," << endl;
    std::cout << "EAFNOSUPPORT = " << EAFNOSUPPORT << "," << endl;
    std::cout << "EAGAIN = " << EAGAIN << "," << endl;
    std::cout << "EBADE = " << EBADE << "," << endl;
    std::cout << "EBADF = " << EBADF << "," << endl;
    std::cout << "EBADFD = " << EBADFD << "," << endl;
    std::cout << "EBADMSG = " << EBADMSG << "," << endl;
    std::cout << "EBADR = " << EBADR << "," << endl;
    std::cout << "EBADRQC = " << EBADRQC << "," << endl;
    std::cout << "EBADSLT = " << EBADSLT << "," << endl;
    std::cout << "EBUSY = " << EBUSY << "," << endl;
    std::cout << "ECANCELED = " << ECANCELED << "," << endl;
    std::cout << "ECHILD = " << ECHILD << "," << endl;
    std::cout << "ECHRNG = " << ECHRNG << "," << endl;
    std::cout << "ECOMM = " << ECOMM << "," << endl;
    std::cout << "ECONNABORTED = " << ECONNABORTED << "," << endl;
    std::cout << "ECONNREFUSED = " << ECONNREFUSED << "," << endl;
    std::cout << "ECONNRESET = " << ECONNRESET << "," << endl;
    std::cout << "EDEADLK = " << EDEADLK << "," << endl;
    std::cout << "EDEADLOCK = " << EDEADLOCK << "," << endl;
    std::cout << "EDESTADDRREQ = " << EDESTADDRREQ << "," << endl;
    std::cout << "EDOM = " << EDOM << "," << endl;
    std::cout << "EDQUOT = " << EDQUOT << "," << endl;
    std::cout << "EEXIST = " << EEXIST << "," << endl;
    std::cout << "EFAULT = " << EFAULT << "," << endl;
    std::cout << "EFBIG = " << EFBIG << "," << endl;
    std::cout << "EHOSTDOWN = " << EHOSTDOWN << "," << endl;
    std::cout << "EHOSTUNREACH = " << EHOSTUNREACH << "," << endl;
    std::cout << "EIDRM = " << EIDRM << "," << endl;
    std::cout << "EILSEQ = " << EILSEQ << "," << endl;
    std::cout << "EINPROGRESS = " << EINPROGRESS << "," << endl;
    std::cout << "EINTR = " << EINTR << "," << endl;
    std::cout << "EINVAL = " << EINVAL << "," << endl;
    std::cout << "EIO = " << EIO << "," << endl;
    std::cout << "EISCONN = " << EISCONN << "," << endl;
    std::cout << "EISDIR = " << EISDIR << "," << endl;
    std::cout << "EISNAM = " << EISNAM << "," << endl;
    std::cout << "EKEYEXPIRED = " << EKEYEXPIRED << "," << endl;
    std::cout << "EKEYREJECTED = " << EKEYREJECTED << "," << endl;
    std::cout << "EKEYREVOKED = " << EKEYREVOKED << "," << endl;
    std::cout << "EL2HLT = " << EL2HLT << "," << endl;
    std::cout << "EL2NSYNC = " << EL2NSYNC << "," << endl;
    std::cout << "EL3HLT = " << EL3HLT << "," << endl;
    std::cout << "EL3RST = " << EL3RST << "," << endl;
    std::cout << "ELIBACC = " << ELIBACC << "," << endl;
    std::cout << "ELIBBAD = " << ELIBBAD << "," << endl;
    std::cout << "ELIBMAX = " << ELIBMAX << "," << endl;
    std::cout << "ELIBSCN = " << ELIBSCN << "," << endl;
    std::cout << "ELIBEXEC = " << ELIBEXEC << "," << endl;
    std::cout << "ELOOP = " << ELOOP << "," << endl;
    std::cout << "EMEDIUMTYPE = " << EMEDIUMTYPE << "," << endl;
    std::cout << "EMFILE = " << EMFILE << "," << endl;
    std::cout << "EMLINK = " << EMLINK << "," << endl;
    std::cout << "EMSGSIZE = " << EMSGSIZE << "," << endl;
    std::cout << "EMULTIHOP = " << EMULTIHOP << "," << endl;
    std::cout << "ENAMETOOLONG = " << ENAMETOOLONG << "," << endl;
    std::cout << "ENETDOWN = " << ENETDOWN << "," << endl;
    std::cout << "ENETRESET = " << ENETRESET << "," << endl;
    std::cout << "ENETUNREACH = " << ENETUNREACH << "," << endl;
    std::cout << "ENFILE = " << ENFILE << "," << endl;
    std::cout << "ENOBUFS = " << ENOBUFS << "," << endl;
    std::cout << "ENODATA = " << ENODATA << "," << endl;
    std::cout << "ENODEV = " << ENODEV << "," << endl;
    std::cout << "ENOENT = " << ENOENT << "," << endl;
    std::cout << "ENOEXEC = " << ENOEXEC << "," << endl;
    std::cout << "ENOKEY = " << ENOKEY << "," << endl;
    std::cout << "ENOLCK = " << ENOLCK << "," << endl;
    std::cout << "ENOLINK = " << ENOLINK << "," << endl;
    std::cout << "ENOMEDIUM = " << ENOMEDIUM << "," << endl;
    std::cout << "ENOMEM = " << ENOMEM << "," << endl;
    std::cout << "ENOMSG = " << ENOMSG << "," << endl;
    std::cout << "ENONET = " << ENONET << "," << endl;
    std::cout << "ENOPKG = " << ENOPKG << "," << endl;
    std::cout << "ENOPROTOOPT = " << ENOPROTOOPT << "," << endl;
    std::cout << "ENOSPC = " << ENOSPC << "," << endl;
    std::cout << "ENOSR = " << ENOSR << "," << endl;
    std::cout << "ENOSTR = " << ENOSTR << "," << endl;
    std::cout << "ENOSYS = " << ENOSYS << "," << endl;
    std::cout << "ENOTBLK = " << ENOTBLK << "," << endl;
    std::cout << "ENOTCONN = " << ENOTCONN << "," << endl;
    std::cout << "ENOTDIR = " << ENOTDIR << "," << endl;
    std::cout << "ENOTEMPTY = " << ENOTEMPTY << "," << endl;
    std::cout << "ENOTSOCK = " << ENOTSOCK << "," << endl;
    std::cout << "ENOTSUP = " << ENOTSUP << "," << endl;
    std::cout << "ENOTTY = " << ENOTTY << "," << endl;
    std::cout << "ENOTUNIQ = " << ENOTUNIQ << "," << endl;
    std::cout << "ENXIO = " << ENXIO << "," << endl;
    std::cout << "EOPNOTSUPP = " << EOPNOTSUPP << "," << endl;
    std::cout << "EOVERFLOW = " << EOVERFLOW << "," << endl;
    std::cout << "EPERM = " << EPERM << "," << endl;
    std::cout << "EPFNOSUPPORT = " << EPFNOSUPPORT << "," << endl;
    std::cout << "EPIPE = " << EPIPE << "," << endl;
    std::cout << "EPROTO = " << EPROTO << "," << endl;
    std::cout << "EPROTONOSUPPORT = " << EPROTONOSUPPORT << "," << endl;
    std::cout << "EPROTOTYPE = " << EPROTOTYPE << "," << endl;
    std::cout << "ERANGE = " << ERANGE << "," << endl;
    std::cout << "EREMCHG = " << EREMCHG << "," << endl;
    std::cout << "EREMOTE = " << EREMOTE << "," << endl;
    std::cout << "EREMOTEIO = " << EREMOTEIO << "," << endl;
    std::cout << "ERESTART = " << ERESTART << "," << endl;
    std::cout << "EROFS = " << EROFS << "," << endl;
    std::cout << "ESHUTDOWN = " << ESHUTDOWN << "," << endl;
    std::cout << "ESPIPE = " << ESPIPE << "," << endl;
    std::cout << "ESOCKTNOSUPPORT = " << ESOCKTNOSUPPORT << "," << endl;
    std::cout << "ESRCH = " << ESRCH << "," << endl;
    std::cout << "ESTALE = " << ESTALE << "," << endl;
    std::cout << "ESTRPIPE = " << ESTRPIPE << "," << endl;
    std::cout << "ETIME = " << ETIME << "," << endl;
    std::cout << "ETIMEDOUT = " << ETIMEDOUT << "," << endl;
    std::cout << "ETXTBSY = " << ETXTBSY << "," << endl;
    std::cout << "EUCLEAN = " << EUCLEAN << "," << endl;
    std::cout << "EUNATCH = " << EUNATCH << "," << endl;
    std::cout << "EUSERS = " << EUSERS << "," << endl;
    std::cout << "EWOULDBLOCK = " << EWOULDBLOCK << "," << endl;
    std::cout << "EXDEV = " << EXDEV << "," << endl;
    std::cout << "EXFULL = " << EXFULL << "," << endl;

    std::cout << "MAP_SHARED = " << MAP_SHARED << "," << endl;
    std::cout << "MAP_ANON = " << MAP_ANON << "," << endl;
    std::cout << "MAP_32BIT = " << MAP_32BIT << "," << endl;
    std::cout << "MAP_PRIVATE = " << MAP_PRIVATE << "," << endl;
    std::cout << "MAP_ANONYMOUS = " << MAP_ANONYMOUS << "," << endl;
    std::cout << "MAP_DENYWRITE = " << MAP_DENYWRITE << "," << endl;
    std::cout << "MAP_EXECUTABLE = " << MAP_EXECUTABLE << "," << endl;
    std::cout << "MAP_FILE = " << MAP_FILE << "," << endl;
    std::cout << "MAP_FIXED = " << MAP_FIXED << "," << endl;
    std::cout << "MAP_GROWSDOWN = " << MAP_GROWSDOWN << "," << endl;
    std::cout << "MAP_HUGETLB = " << MAP_HUGETLB << "," << endl;
    std::cout << "MAP_HUGE_SHIFT = " << MAP_HUGE_SHIFT << "," << endl;
    std::cout << "MAP_LOCKED = " << MAP_LOCKED << "," << endl;
    std::cout << "MAP_NONBLOCK = " << MAP_NONBLOCK << "," << endl;
    std::cout << "MAP_NORESERVE = " << MAP_NORESERVE << "," << endl;
    std::cout << "MAP_POPULATE = " << MAP_POPULATE << "," << endl;
    std::cout << "MAP_STACK = " << MAP_STACK << "," << endl;

    std::cout << "SEEK_CUR = " << SEEK_CUR << "," << endl;
    std::cout << "SEEK_END = " << SEEK_END << "," << endl;
    std::cout << "SEEK_SET = " << SEEK_SET << "," << endl;

    std::cout << "O_SYNC = " << O_SYNC << "," << endl;
    std::cout << "O_NDELAY = " << O_NDELAY << "," << endl;
    std::cout << "O_LARGEFILE = " << O_LARGEFILE << "," << endl;

    std::cout << "FD_CLOEXEC = " << FD_CLOEXEC << "," << endl;

    std::cout << "DT_BLK = " << DT_BLK << "," << endl;
    std::cout << "DT_CHR = " << DT_CHR << "," << endl;
    std::cout << "DT_DIR = " << DT_DIR << "," << endl;
    std::cout << "DT_FIFO = " << DT_FIFO << "," << endl;
    std::cout << "DT_LNK = " << DT_LNK << "," << endl;
    std::cout << "DT_REG = " << DT_REG << "," << endl;
    std::cout << "DT_SOCK = " << DT_SOCK << "," << endl;
    std::cout << "DT_UNKNOWN = " << DT_UNKNOWN << "," << endl;

    std::cout << "PATH_MAX = " << PATH_MAX << "," << endl;

    std::cout << "IN_CLOEXEC = " << IN_CLOEXEC << "," << endl;
    std::cout << "IN_NONBLOCK = " << IN_NONBLOCK << "," << endl;
    std::cout << "IN_CLOSE_NOWRITE = " << IN_CLOSE_NOWRITE << "," << endl;

    std::cout << "MSG_NOSIGNAL = " << MSG_NOSIGNAL << "," << endl;

    std::cout << "sizeof(size_t) = " << sizeof(size_t) << "," << endl;
    std::cout << "sizeof(time_t) = " << sizeof(time_t) << "," << endl;
    std::cout << "sizeof(__time_t) = " << sizeof(__time_t) << "," << endl;
    std::cout << "sizeof(pid_t) = " << sizeof(pid_t) << "," << endl;
    std::cout << "sizeof(__pid_t) = " << sizeof(__pid_t) << "," << endl;
    std::cout << "sizeof(shmatt_t) = " << sizeof(shmatt_t) << "," << endl;
    std::cout << "sizeof(__gid_t) = " << sizeof(__gid_t) << "," << endl;
    std::cout << "sizeof(__uid_t) = " << sizeof(__uid_t) << "," << endl;
    std::cout << "sizeof(__key_t) = " << sizeof(__key_t) << "," << endl;
    std::cout << "sizeof(unsigned long int) = " << sizeof(unsigned long int) << "," << endl;
    std::cout << "sizeof(unsigned short int) = " << sizeof(unsigned short int) << "," << endl;
    std::cout << "sizeof(ipc_perm) = " << sizeof(ipc_perm) << "," << endl;
    std::cout << "sizeof(shmid_ds) = " << sizeof(shmid_ds) << "," << endl;
    std::cout << "sizeof(time_t) = " << sizeof(time_t) << "," << endl;
    std::cout << "sizeof(utimbuf) = " << sizeof(utimbuf) << "," << endl;
    std::cout << "sizeof(timespec) = " << sizeof(timespec) << "," << endl;
    std::cout << "sizeof(long) = " << sizeof(long) << "," << endl;
    std::cout << "sizeof(off_t) = " << sizeof(off_t) << "," << endl;
    std::cout << "sizeof(int) = " << sizeof(int) << "," << endl;
    std::cout << "sizeof(socklen_t) = " << sizeof(socklen_t) << "," << endl;
//    std::cout << "DIR = " << sizeof(DIR) << "," << endl;
//    std::cout << "__dirstream = " << sizeof(__dirstream) << "," << endl;

    DIR* a = opendir("/share/libjs/examples");
    DIR* b = opendir("/share/libjs");
    b = opendir("/share/libjs");
    unsigned char* p = (unsigned char*) b;
//    printf("p: %d", p);
//    printf("errno: %d", errno);
//    std::cout << p << std::endl;
    int i = 0;
    for(i = 0; i < 80; i++) {
        printf("%d\n", *(p + i));
//        std::cout << *(p + i) << std::endl;
    }
    std::cout << "DONE" << std::endl;

//    DIR a;


//    int64_t result = 140455768256512;

    //                    hi                                   lo
    // ||........|........|........|........||........|........|........|........||
    //   ^------------------------------------^
    //        switches these two sign bits
    int64_t result = -13;

//    uint64_t uresult = result;
//    if(result < 0) uresult = -result;
//
//    uint32_t sign = (0x8000000000000000 & result) >> 32; // The sign flipping bit.
//    sign = 0x7fffffffffffffff;

    uint32_t lo = result & 0xffffffff;
    uint32_t signlo = 0x80000000 & lo;

    uint32_t hi = result >> 32;
    uint32_t signhi = 0x80000000 & hi;

    lo = lo & 0x7fffffff | signhi;
    hi = hi & 0x7fffffff | signlo;

    int32_t los = (int32_t) lo;
    int32_t his = (int32_t) hi;

    std::cout << result << endl;
    std::cout << los << endl;
    std::cout << his << endl;


    int64_t back = (his << 32) | los;
    back = (back & 0x7fffffffffffffff) | ((los & 0x80000000) << 32);
    back = (back & 0xffffffff7fffffff) | (his & 0x80000000);

    std::cout << "back: " << back << endl;
    int32_t has_bit = (los & 0x80000000);
    std::cout << ((los & 0x80000000) << 32) << endl;


//    std::cout << "EPOLL_CTL_ADD = " << EPOLL_CTL_ADD << "," << endl;
//    std::cout << "EPOLL_CTL_MOD = " << EPOLL_CTL_MOD << "," << endl;
//    std::cout << "EPOLL_CTL_DEL = " << EPOLL_CTL_DEL << "," << endl;
//

//    std::cout << "AF_LOCAL = " << AF_LOCAL  << "," << endl;
//    std::cout << "AF_INET = " << AF_INET  << "," << endl;
//    std::cout << "AF_INET6 = " << AF_INET6  << "," << endl;
//    std::cout << "AF_IPX = " << AF_IPX  << "," << endl;
//    std::cout << "AF_NETLINK = " << AF_NETLINK  << "," << endl;
//    std::cout << "AF_X25 = " << AF_X25  << "," << endl;
//    std::cout << "AF_AX25 = " << AF_AX25  << "," << endl;
//    std::cout << "AF_ATMPVC = " << AF_ATMPVC  << "," << endl;
//    std::cout << "AF_APPLETALK = " << AF_APPLETALK  << "," << endl;
//    std::cout << "AF_PACKET = " << AF_PACKET  << "," << endl;
//    std::cout << "AF_ALG = " << AF_ALG  << "," << endl;
//
//    std::cout << "SOCK_STREAM = " << SOCK_STREAM  << "," << endl;
//    std::cout << "SOCK_DGRAM = " << SOCK_DGRAM  << "," << endl;
//    std::cout << "SOCK_SEQPACKET = " << SOCK_SEQPACKET  << "," << endl;
//    std::cout << "SOCK_RAW = " << SOCK_RAW  << "," << endl;
//    std::cout << "SOCK_RDM = " << SOCK_RDM  << "," << endl;
//    std::cout << "SOCK_PACKET = " << SOCK_PACKET  << "," << endl;
//    std::cout << "SOCK_NONBLOCK = " << SOCK_NONBLOCK  << "," << endl;
//    std::cout << "SOCK_CLOEXEC = " << SOCK_CLOEXEC  << "," << endl;

//    std::cout << "PROT_READ: " << PROT_READ  << "," << endl;
//    std::cout << "PROT_WRITE: " << PROT_WRITE  << "," << endl;
//    std::cout << "PROT_NONE: " << PROT_NONE  << "," << endl;
//    std::cout << "MAP_SHARED: " << PROT_NONE  << "," << endl;
//    std::cout << "MAP_PRIVATE: " << PROT_NONE  << "," << endl;
//    std::cout << "MAP_32BIT: " << MAP_32BIT  << "," << endl;
//    std::cout << "MAP_ANON: " << MAP_ANON  << "," << endl;
//    std::cout << "MAP_ANONYMOUS: " << MAP_ANONYMOUS  << "," << endl;
//    std::cout << "MAP_DENYWRITE: " << MAP_DENYWRITE  << "," << endl;
//    std::cout << "MAP_EXECUTABLE: " << MAP_EXECUTABLE  << "," << endl;
//    std::cout << "MAP_FILE: " << MAP_FILE  << "," << endl;
//    std::cout << "MAP_FIXED: " << MAP_FIXED  << "," << endl;
//    std::cout << "MAP_GROWSDOWN: " << MAP_GROWSDOWN  << "," << endl;
//    std::cout << "MAP_HUGETLB: " << MAP_HUGETLB  << "," << endl;
//    std::cout << "MAP_HUGE_SHIFT: " << MAP_HUGE_SHIFT  << "," << endl;
//    std::cout << "MAP_LOCKED: " << MAP_LOCKED  << "," << endl;
//    std::cout << "MAP_NONBLOCK: " << MAP_NONBLOCK  << "," << endl;
//    std::cout << "MAP_NORESERVE: " << MAP_NORESERVE  << "," << endl;
//    std::cout << "MAP_POPULATE: " << MAP_POPULATE  << "," << endl;
//    std::cout << "MAP_STACK: " << MAP_STACK  << "," << endl;

    return 0;
}

