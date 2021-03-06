export enum ERROR {
    EACCES = 13, // The address is protected, and the user is not the superuser.
    EADDRINUSE = 98, // The given address is already in use.
    EBADF = 9, // sockfd is not a valid descriptor.
    EINVAL = 22, // The socket is already bound to an address.
    ENOTSOCK = 88, // `sockfd` is a descriptor for a file, not a socket.

    // The following errors are specific to UNIX domain (AF_UNIX) sockets:
    // EACCES, // Search permission is denied on a component of the path prefix. (See also path_resolution(2).)
    EADDRNOTAVAIL = 99, // A non-existent interface was requested or the requested address was not local.
    EFAULT = 14, // `my_addr` points outside the user’s accessible address space.
    // EINVAL, // The addrlen is wrong, or the socket was not in the AF_UNIX family.
    ELOOP = 40, // Too many symbolic links were encountered in resolving my_addr.
    ENAMETOOLONG = 36, // `my_addr` is too long.
    ENOENT = 2, // The file does not exist.
    ENOMEM = 12, // Insufficient kernel memory was available.
    ENOTDIR = 20, // A component of the path prefix is not a directory.
    EROFS = 30,

    // More socket errors:
    EAGAIN = 11,
    EWOULDBLOCK = 11,
    ECONNREFUSED = 111,
    EINTR = 4,
    ENOTCONN = 107,


    E2BIG = 7,
    EAFNOSUPPORT = 97,
    EBADE = 52,
    EBADFD = 77,
    EBADMSG = 74,
    EBADR = 53,
    EBADRQC = 56,
    EBADSLT = 57,
    EBUSY = 16,
    ECANCELED = 125,
    ECHILD = 10,
    ECHRNG = 44,
    ECOMM = 70,
    ECONNABORTED = 103,
    ECONNRESET = 104,
    EDEADLK = 35,
    EDEADLOCK = 35,
    EDESTADDRREQ = 89,
    EDOM = 33,
    EDQUOT = 122,
    EEXIST = 17,
    EFBIG = 27,
    EHOSTDOWN = 112,
    EHOSTUNREACH = 113,
    EIDRM = 43,
    EILSEQ = 84,
    EINPROGRESS = 115,
    EIO = 5,
    EISCONN = 106,
    EISDIR = 21,
    EISNAM = 120,
    EKEYEXPIRED = 127,
    EKEYREJECTED = 129,
    EKEYREVOKED = 128,
    EL2HLT = 51,
    EL2NSYNC = 45,
    EL3HLT = 46,
    EL3RST = 47,
    ELIBACC = 79,
    ELIBBAD = 80,
    ELIBMAX = 82,
    ELIBSCN = 81,
    ELIBEXEC = 83,
    EMEDIUMTYPE = 124,
    EMFILE = 24,
    EMLINK = 31,
    EMSGSIZE = 90,
    EMULTIHOP = 72,
    ENETDOWN = 100,
    ENETRESET = 102,
    ENETUNREACH = 101,
    ENFILE = 23,
    ENOBUFS = 105,
    ENODATA = 61,
    ENODEV = 19,
    ENOEXEC = 8,
    ENOKEY = 126,
    ENOLCK = 37,
    ENOLINK = 67,
    ENOMEDIUM = 123,
    ENOMSG = 42,
    ENONET = 64,
    ENOPKG = 65,
    ENOPROTOOPT = 92,
    ENOSPC = 28,
    ENOSR = 63,
    ENOSTR = 60,
    ENOSYS = 38,
    ENOTBLK = 15,
    ENOTEMPTY = 39,
    ENOTSUP = 95,
    ENOTTY = 25,
    ENOTUNIQ = 76,
    ENXIO = 6,
    EOPNOTSUPP = 95,
    EOVERFLOW = 75,
    EPERM = 1,
    EPFNOSUPPORT = 96,
    EPIPE = 32,
    EPROTO = 71,
    EPROTONOSUPPORT = 93,
    EPROTOTYPE = 91,
    ERANGE = 34,
    EREMCHG = 78,
    EREMOTE = 66,
    EREMOTEIO = 121,
    ERESTART = 85,
    ESHUTDOWN = 108,
    ESPIPE = 29,
    ESOCKTNOSUPPORT = 94,
    ESRCH = 3,
    ESTALE = 116,
    ESTRPIPE = 86,
    ETIME = 62,
    ETIMEDOUT = 110,
    ETXTBSY = 26,
    EUCLEAN = 117,
    EUNATCH = 49,
    EUSERS = 87,
    EXDEV = 18,
    EXFULL = 54,
}
