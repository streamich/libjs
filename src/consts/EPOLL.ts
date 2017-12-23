const enum EPOLL {
    // Set the close-on-exec (FD_CLOEXEC) flag on the new file descriptor.  See the description of the O_CLOEXEC flag in open(2) for reasons why this may be useful.
    CLOEXEC = 524288,
}

export default EPOLL;
