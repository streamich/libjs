import {Struct} from '../typebase';
import {uint32, uint64} from '../basetypes';
import EPOLL_EVENTS from '../consts/EPOLL_EVENTS';

//     typedef union epoll_data {
//         void    *ptr;
//         int      fd;
//         uint32_t u32;
//         uint64_t u64;
//     } epoll_data_t;
//
//     struct epoll_event {
//         uint32_t     events;    /* Epoll events */
//         epoll_data_t data;      /* User data variable */
//     };
//
const epoll_event = Struct.define(4 + 8, [
    [0, uint32, 'events'],
    [4, uint64, 'data'],
]);

export interface Iepoll_event {
    events: EPOLL_EVENTS;
    data: [number, number];
}

export default epoll_event;
