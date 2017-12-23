const enum EPOLL_EVENTS {
    // The associated file is available for read(2) operations
    EPOLLIN = 1,

    // The associated file is available for write(2) operations.
    EPOLLOUT = 4,

    // Stream socket peer closed connection, or shut down writing
    // half of connection.  (This flag is especially useful for
    // writing simple code to detect peer shutdown when using Edge
    // Triggered monitoring.)
    EPOLLRDHUP = 8192,

    // There is urgent data available for read(2) operations.
    EPOLLPRI = 2,

    // Error condition happened on the associated file descriptor.
    // epoll_wait(2) will always wait for this event; it is not
    // necessary to set it in events.
    EPOLLERR = 8,

    // Hang up happened on the associated file descriptor.
    // epoll_wait(2) will always wait for this event; it is not
    // necessary to set it in events.  Note that when reading from a
    // channel such as a pipe or a stream socket, this event merely
    // indicates that the peer closed its end of the channel.
    // Subsequent reads from the channel will return 0 (end of file)
    // only after all outstanding data in the channel has been
    // consumed.
    EPOLLHUP = 16,

    // Sets the Edge Triggered behavior for the associated file descriptor
    EPOLLET = 2147483648,

    // Once events fired, kernel fd will be disabled.
    EPOLLONESHOT = 1073741824,

    // Don't "hibernate"
    EPOLLWAKEUP = 536870912,

    // EPOLLEXCLUSIVE = ?
}

export default EPOLL_EVENTS;
