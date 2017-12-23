export enum MCAST {
    JOIN_GROUP = 42, /* group_req: join any-source group */
    BLOCK_SOURCE = 43, /* group_source_req: block from given group */
    UNBLOCK_SOURCE = 44, /* group_source_req: unblock from given group*/
    LEAVE_GROUP = 45, /* group_req: leave any-source group */
    JOIN_SOURCE_GROUP = 46, /* group_source_req: join source-spec gr */
    LEAVE_SOURCE_GROUP = 47, /* group_source_req: leave source-spec gr*/
    MSFILTER = 48,
    EXCLUDE = 0,
    INCLUDE = 1,
}

export default MCAST;
