import {Struct} from '../typebase';
import {uint64, int64, int16, uint16, uint32, pointer_t} from '../basetypes';

//  struct kevent64_s {
//      uint64_t    ident;      /* identifier for this event */
//      int16_t     filter;     /* filter for event */
//      uint16_t    flags;      /* general flags */
//      uint32_t    fflags;     /* filter-specific flags */
//      int64_t     data;       /* filter-specific data */
//      uint64_t    udata;      /* opaque user data identifier */
//      uint64_t    ext[2];     /* filter-specific extensions */
//  };
export const kevent64_sStruct = Struct.define(8 + 2 + 2 + 4 + 8 + 8 + 8, [
    [0, pointer_t, 'ident'],
    [8, int16, 'filter'],
    [8 + 2, uint16, 'flags'],
    [8 + 2 + 2, uint32, 'fflags'],
    [8 + 2 + 2 + 4, int64, 'data'],
    [8 + 2 + 2 + 4 + 8, uint64, 'udata'],
    [8 + 2 + 2 + 4 + 8 + 8, uint64, 'ext'],
]);

export interface Ikevent64_sStruct {
    ident: [number, number],
    filter: number,
    flags: number,
    fflags: number,
    data: [number, number],
    udata: [number, number],
    ext: [number, number],
}
