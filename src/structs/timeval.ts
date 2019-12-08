import {Struct} from '../typebase';
import {uint64} from '../basetypes';

export const timeval = Struct.define(16, [
    [0, uint64, 'tv_sec'],  // access time
    [8, uint64, 'tv_nsec'], // modification time
]);

type number64 = [number, number];

export interface Itimeval {
    tv_sec:     number64,
    tv_nsec:    number64,
}
