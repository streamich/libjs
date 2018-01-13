"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Codes for SIGCHLD */
var CLD = {
    NOOP: 0,
    EXITED: 1,
    KILLED: 2,
    DUMPED: 3,
    TRAPPED: 4,
    STOPPED: 5,
    CONTINUED: 6,
};
exports.default = CLD;
