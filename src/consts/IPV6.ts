const enum IPV6 {
    ADDRFORM = 1,
    IPV6_2292PKTINFO = 2,
    IPV6_2292HOPOPTS = 3,
    IPV6_2292DSTOPTS = 4,
    IPV6_2292RTHDR = 5,
    IPV6_2292PKTOPTIONS = 6,
    CHECKSUM = 7,
    IPV6_2292HOPLIMIT = 8,
    NEXTHOP = 9,
    AUTHHDR = 10,
    UNICAST_HOPS = 16,
    MULTICAST_IF = 17,
    MULTICAST_HOPS = 18,
    MULTICAST_LOOP = 19,
    JOIN_GROUP = 20,
    LEAVE_GROUP = 21,
    ROUTER_ALERT = 22,
    MTU_DISCOVER = 23,
    MTU = 24,
    RECVERR = 25,
    V6ONLY = 26,
    JOIN_ANYCAST = 27,
    LEAVE_ANYCAST = 28,
    IPSEC_POLICY = 34,
    XFRM_POLICY = 35,
    RECVPKTINFO = 49,
    PKTINFO = 50,
    RECVHOPLIMIT = 51,
    HOPLIMIT = 52,
    RECVHOPOPTS = 53,
    HOPOPTS = 54,
    RTHDRDSTOPTS = 55,
    RECVRTHDR = 56,
    RTHDR = 57,
    RECVDSTOPTS = 58,
    DSTOPTS = 59,
    RECVTCLASS = 66,
    TCLASS = 67,
    /* IPV6_MTU_DISCOVER values.  */
    PMTUDISC_DONT = 0, /* Never send DF frames.  */
    PMTUDISC_WANT = 1, /* Use per route hints.  */
    PMTUDISC_DO = 2, /* Always DF.  */
    PMTUDISC_PROBE = 3, /* Ignore dst pmtu.  */
    /* Routing header options for IPv6.  */
    RTHDR_LOOSE = 0, /* Hop doesn't need to be neighbour. */
    RTHDR_STRICT = 1, /* Hop must be a neighbour.  */
    RTHDR_TYPE_0 = 0, /* IPv6 Routing header type 0.  */
}

export default IPV6;
