export const enum IPPROTO {
    IP = 0,	       /* Dummy protocol for TCP.  */
    ICMP = 1,	   /* Internet Control Message Protocol.  */
    IGMP = 2,	   /* Internet Group Management Protocol. */
    IPIP = 4,	   /* IPIP tunnels (older KA9Q tunnels use 94).  */
    TCP = 6,	   /* Transmission Control Protocol.  */
    EGP = 8,	   /* Exterior Gateway Protocol.  */
    PUP = 12,	   /* PUP protocol.  */
    UDP = 17,	   /* User Datagram Protocol.  */
    IDP = 22,	   /* XNS IDP protocol.  */
    TP = 29,	   /* SO Transport Protocol Class 4.  */
    DCCP = 33,	   /* Datagram Congestion Control Protocol.  */
    IPV6 = 41,     /* IPv6 header.  */
    RSVP = 46,	   /* Reservation Protocol.  */
    GRE = 47,	   /* General Routing Encapsulation.  */
    ESP = 50,      /* encapsulating security payload.  */
    AH = 51,       /* authentication header.  */
    MTP = 92,	   /* Multicast Transport Protocol.  */
    BEETPH = 94,   /* IP option pseudo header for BEET.  */
    ENCAP = 98,	   /* Encapsulation Header.  */
    PIM = 103,	   /* Protocol Independent Multicast.  */
    COMP = 108,	   /* Compression Header Protocol.  */
    SCTP = 132,	   /* Stream Control Transmission Protocol.  */
    UDPLITE = 136, /* UDP-Lite protocol.  */
    RAW = 255,	   /* Raw IP packets.  */
    // MAX
    HOPOPTS = 0,   /* IPv6 Hop-by-Hop options.  */
    ROUTING = 43,  /* IPv6 routing header.  */
    FRAGMENT = 44, /* IPv6 fragmentation header.  */
    ICMPV6 = 58,   /* ICMPv6.  */
    NONE = 59,     /* IPv6 no next header.  */
    DSTOPTS = 60,  /* IPv6 destination options.  */
    MH = 135,      /* IPv6 mobility header.  */
}

export default IPPROTO;
