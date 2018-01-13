import PF from './PF';

// Address families.
const enum AF {
    UNSPEC = 0,	/* Unspecified.  */
    LOCAL = 1,	/* Local to host (pipes and file-domain).  */
    UNIX = AF.LOCAL, /* POSIX name for PF_LOCAL.  */
    FILE = AF.LOCAL, /* Another non-standard name for PF_LOCAL.  */
    INET = 2,	/* IP protocol family.  */
    AX25 = 3,	/* Amateur Radio AX.25.  */
    IPX = 4,	/* Novell Internet Protocol.  */
    APPLETALK = 5,	/* Appletalk DDP.  */
    NETROM = 6,	/* Amateur radio NetROM.  */
    BRIDGE = 7,	/* Multiprotocol bridge.  */
    ATMPVC = 8,	/* ATM PVCs.  */
    X25 = 9,	/* Reserved for X.25 project.  */
    INET6 = 10,	/* IP version 6.  */
    ROSE = 11,	/* Amateur Radio X.25 PLP.  */
    DECnet = 12,	/* Reserved for DECnet project.  */
    NETBEUI = 13,	/* Reserved for 802.2LLC project.  */
    SECURITY = 14,	/* Security callback pseudo AF.  */
    KEY = 15,	/* PF_KEY key management API.  */
    NETLINK = 16,
    ROUTE = AF.NETLINK, /* Alias to emulate 4.4BSD.  */
    PACKET = 17,	/* Packet family.  */
    ASH = 18,	/* Ash.  */
    ECONET = 19,	/* Acorn Econet.  */
    ATMSVC = 20,	/* ATM SVCs.  */
    RDS = 21,	/* RDS sockets.  */
    SNA = 22,	/* Linux SNA Project */
    IRDA = 23,	/* IRDA sockets.  */
    PPPOX = 24,	/* PPPoX sockets.  */
    WANPIPE = 25,	/* Wanpipe API sockets.  */
    LLC = 26,	/* Linux LLC.  */
    CAN = 29,	/* Controller Area Network.  */
    TIPC = 30,	/* TIPC sockets.  */
    BLUETOOTH = 31,	/* Bluetooth sockets.  */
    IUCV = 32,	/* IUCV sockets.  */
    RXRPC = 33,	/* RxRPC sockets.  */
    ISDN = 34,	/* mISDN sockets.  */
    PHONET = 35,	/* Phonet sockets.  */
    IEEE802154 = 36,	/* IEEE 802.15.4 sockets.  */
    CAIF = 37,	/* CAIF sockets.  */
    ALG = 38,	/* Algorithm sockets.  */
    NFC = 39,	/* NFC sockets.  */
    VSOCK = 40,	/* vSockets.  */
    MAX = 41,	/* For now..  */
}

export default AF;
