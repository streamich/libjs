import {Struct} from '../typebase';
import {int32, uint32} from '../basetypes';

// Stucture that `inotify` returns when reading from one of its descriptors, in `libc`:
//
//     struct inotify_event {
//         int      wd;       /* Watch descriptor */
//         uint32_t mask;     /* Mask describing event */
//         uint32_t cookie;   /* Unique cookie associating related events (for rename(2)) */
//         uint32_t len;      /* Size of name field */
//         char     name[];   /* Optional null-terminated name */
//     };
//
const inotify_event = Struct.define(16, [
    [0, int32, 'wd'],
    [4, uint32, 'mask'],
    [8, uint32, 'cookie'],
    [12, uint32, 'len'],
    /* [16, Arr.define(int8, 0), 'name'], */
]);

export interface Iinotify_event {
    wd: number;
    mask: number;
    cookie: number;
    len: number;
    name?: string;
}

export default inotify_event;
