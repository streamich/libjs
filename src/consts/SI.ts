/* POSIX 1003.1b required values. */
const SI = {
    USER: 0x10001, /* [CX] signal from kill() */
    QUEUE: 0x10002, /* [CX] signal from sigqueue() */
    TIMER: 0x10003, /* [CX] timer expiration */
    ASYNCIO: 0x10004, /* [CX] aio request completion */
    MESGQ: 0x10005, /* [CX]	from message arrival on empty queue */
};

export default SI;
