import {Struct} from '../typebase';
import {uint64} from '../basetypes';

const timeval = Struct.define(16, [
    [0, uint64, 'tv_sec'],  // access time
    [8, uint64, 'tv_nsec'], // modification time
]);

export type numberLo = number;
export type numberHi = number;
export type number64 = [numberLo, numberHi];

export interface Itimeval {
    tv_sec:     number64,
    tv_nsec:    number64,
}

export default timeval;