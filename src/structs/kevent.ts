import {Struct} from '../typebase';
import {uint64, int16, uint16, uint32, pointer_t} from '../basetypes';

//  struct kevent {
//      uintptr_t	ident;		/* identifier for this event */
// 	    int16_t		filter;		/* filter for event */
//      uint16_t	flags;		/* general flags */
//      uint32_t	fflags;		/* filter-specific flags */
//      intptr_t	data;		/* filter-specific data */
//      void		*udata;		/* opaque user data identifier */
//  };
export const kevent = Struct.define(8 + 2 + 2 + 4 + 8 + 8, [
    [0, pointer_t, 'ident'],
    [8, int16, 'filter'],
    [8 + 2, uint16, 'flags'],
    [8 + 2 + 2, uint32, 'fflags'],
    [8 + 2 + 2 + 4, pointer_t, 'data'],
    [8 + 2 + 2 + 4 + 8, uint64, 'udata'],
]);

export interface Ikevent {
    ident: [number, number],
    filter: number,
    flags: number,
    fflags: number,
    data: [number, number],
    udata: [number, number],
}
