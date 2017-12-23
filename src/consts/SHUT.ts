const enum SHUT {
    RD = 0,		/* No more receptions.  */
    WR,		    /* No more transmissions.  */
    RDWR,		/* No more receptions or transmissions.  */
}

export default SHUT;
