const enum SOCK {
    STREAM = 1,
    DGRAM = 2,
    SEQPACKET = 5,
    RAW = 3,
    RDM = 4,
    PACKET = 10,

    // accept4
    NONBLOCK = 2048,
    CLOEXEC = 524288,
}

export default SOCK;
