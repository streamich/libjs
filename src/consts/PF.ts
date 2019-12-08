/**
 * Protocol families.
 */
export enum PF {
    /**
     * Unspecified.
     */
    UNSPEC = 0,
    /**
     * Local to host (pipes and file-domain).
     */
    LOCAL = 1,
    /**
     * POSIX name for PF_LOCAL.
     */
    UNIX = PF.LOCAL,
    /**
     * Another non-standard name for PF_LOCAL.
     */
    FILE = PF.LOCAL,
    /**
     * IP protocol family.
     */
    INET = 2,
    /**
     * Amateur Radio AX.25.
     */
    AX25 = 3,
    /**
     * Novell Internet Protocol.
     */
    IPX = 4,
    /**
     * Appletalk DDP.
     */
    APPLETALK = 5,
    /**
     * Amateur radio NetROM.
     */
    NETROM = 6,
    /**
     * Multiprotocol bridge.
     */
    BRIDGE = 7,
    /**
     * ATM PVCs.
     */
    ATMPVC = 8,
    /**
     * Reserved for X.25 project.
     */
    X25 = 9,
    /**
     * IP version 6.
     */
    INET6 = 10,
    /**
     * Amateur Radio X.25 PLP.
     */
    ROSE = 11,
    /**
     * Reserved for DECnet project.
     */
    DECnet = 12,
    /**
     * Reserved for 802.2LLC project.
     */
    NETBEUI = 13,
    /**
     * Security callback pseudo AF.
     */
    SECURITY = 14,
    /**
     * PF_KEY key management API.
     */
    KEY = 15,
    /**
     * Alias to emulate 4.4BSD.
     */
    NETLINK = 16,
    /**
     * Alias to emulate 4.4BSD. Alias for `PF.NETLINK`.
     */
    ROUTE = PF.NETLINK,
    /**
     * Packet family.
     */
    PACKET = 17,
    /**
     * Ash.
     */
    ASH = 18,
    /**
     * Acorn Econet.
     */
    ECONET = 19,
    /**
     * ATM SVCs.
     */
    ATMSVC = 20,
    /**
     * RDS sockets.
     */
    RDS = 21,
    /**
     * Linux SNA Project.
     */
    SNA = 22,
    /**
     * IRDA sockets.
     */
    IRDA = 23,
    /**
     * PPPoX sockets.
     */
    PPPOX = 24,
    /**
     * Wanpipe API sockets.
     */
    WANPIPE = 25,
    /**
     * Linux LLC.
     */
    LLC = 26,
    /**
     * Controller Area Network.
     */
    CAN = 29,
    /**
     * TIPC sockets.
     */
    TIPC = 30,
    /**
     * Bluetooth sockets.
     */
    BLUETOOTH = 31,
    /**
     * IUCV sockets.
     */
    IUCV = 32,
    /**
     * RxRPC sockets.
     */
    RXRPC = 33,
    /**
     * mISDN sockets.
     */
    ISDN = 34,
    /**
     * Phonet sockets.
     */
    PHONET = 35,
    /**
     * IEEE 802.15.4 sockets.
     */
    IEEE802154 = 36,
    /**
     * CAIF sockets.
     */
    CAIF = 37,
    /**
     * Algorithm sockets.
     */
    ALG = 38,
    /**
     * NFC sockets.
     */
    NFC = 39,
    /**
     * vSockets.
     */
    VSOCK = 40,
    /**
     * For now..
     */
    MAX = 41,
}
