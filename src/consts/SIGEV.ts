const SIGEV = {
    NONE: 0, /* No async notification */
    SIGNAL: 1, /* aio - completion notification */
    THREAD: 3, /* [NOTIMP] [RTS] call notification function */
};

export default SIGEV;
