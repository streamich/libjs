const enum IP {
    OPTIONS = 4, /* ip_opts; IP per-packet options.  */
    HDRINCL = 3, /* int; Header is included with data.  */
    TOS = 1, /* int; IP type of service and precedence.  */
    TTL = 2, /* int; IP time to live.  */
    RECVOPTS = 6, /* bool; Receive all IP options w/datagram.  */
    /* For BSD compatibility.  */
    RETOPTS = 7, /* ip_opts; Set/get IP per-packet options.  */
    RECVRETOPTS = IP.RETOPTS, /* bool; Receive IP options for response.  */
    MULTICAST_IF = 32, /* in_addr; set/get IP multicast i/f */
    MULTICAST_TTL = 33, /* u_char; set/get IP multicast ttl */
    MULTICAST_LOOP = 34, /* i_char; set/get IP multicast loopback */
    ADD_MEMBERSHIP = 35, /* ip_mreq; add an IP group membership */
    DROP_MEMBERSHIP = 36, /* ip_mreq; drop an IP group membership */
    UNBLOCK_SOURCE = 37, /* ip_mreq_source: unblock data from source */
    BLOCK_SOURCE = 38, /* ip_mreq_source: block data from source */
    ADD_SOURCE_MEMBERSHIP = 39, /* ip_mreq_source: join source group */
    DROP_SOURCE_MEMBERSHIP = 40, /* ip_mreq_source: leave source group */
    MSFILTER = 41,
    MULTICAST_ALL = 49,
    UNICAST_IF = 50,
    ROUTER_ALERT = 5, /* bool */
    PKTINFO = 8, /* bool */
    PKTOPTIONS = 9,
    PMTUDISC = 10, /* obsolete name? */
    MTU_DISCOVER = 10, /* int; see below */
    RECVERR = 11, /* bool */
    RECVTTL = 12, /* bool */
    RECVTOS = 13, /* bool */
    MTU = 14, /* int */
    FREEBIND = 15,
    IPSEC_POLICY = 16,
    XFRM_POLICY = 17,
    PASSSEC = 18,
    TRANSPARENT = 19,
    /* TProxy original addresses */
    ORIGDSTADDR = 20,
    RECVORIGDSTADDR = IP.ORIGDSTADDR,
    MINTTL = 21,
    /* IP_MTU_DISCOVER arguments.  */
    PMTUDISC_DONT = 0, /* Never send DF frames.  */
    PMTUDISC_WANT = 1, /* Use per route hints.  */
    PMTUDISC_DO = 2, /* Always DF.  */
    PMTUDISC_PROBE = 3, /* Ignore dst pmtu.  */

    DEFAULT_MULTICAST_TTL = 1,
    DEFAULT_MULTICAST_LOOP = 1,
    MAX_MEMBERSHIPS = 20,
}

export default IP;
