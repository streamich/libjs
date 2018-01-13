"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SA = {
    ONSTACK: 0x0001,
    RESTART: 0x0002,
    RESETHAND: 0x0004,
    NOCLDSTOP: 0x0008,
    NODEFER: 0x0010,
    NOCLDWAIT: 0x0020,
    SIGINFO: 0x0040,
    USERTRAMP: 0x0100,
    '64REGSET': 0x0200,
};
/* the following are the only bits we support from user space, the
 * rest are for kernel use only.
 */
SA.USERSPACE_MASK = SA.ONSTACK | SA.RESTART | SA.RESETHAND | SA.NOCLDSTOP | SA.NODEFER | SA.NOCLDWAIT | SA.SIGINFO;
exports.default = SA;
