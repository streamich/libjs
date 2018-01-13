"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MCAST;
(function (MCAST) {
    MCAST[MCAST["JOIN_GROUP"] = 42] = "JOIN_GROUP";
    MCAST[MCAST["BLOCK_SOURCE"] = 43] = "BLOCK_SOURCE";
    MCAST[MCAST["UNBLOCK_SOURCE"] = 44] = "UNBLOCK_SOURCE";
    MCAST[MCAST["LEAVE_GROUP"] = 45] = "LEAVE_GROUP";
    MCAST[MCAST["JOIN_SOURCE_GROUP"] = 46] = "JOIN_SOURCE_GROUP";
    MCAST[MCAST["LEAVE_SOURCE_GROUP"] = 47] = "LEAVE_SOURCE_GROUP";
    MCAST[MCAST["MSFILTER"] = 48] = "MSFILTER";
    MCAST[MCAST["EXCLUDE"] = 0] = "EXCLUDE";
    MCAST[MCAST["INCLUDE"] = 1] = "INCLUDE";
})(MCAST = exports.MCAST || (exports.MCAST = {}));
exports.default = MCAST;
