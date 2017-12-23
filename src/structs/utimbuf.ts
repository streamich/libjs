import {Struct} from '../typebase';
import {uint64} from '../basetypes';

// ## Time
//
//     struct utimbuf {
//         time_t actime;       /* access time */
//         time_t modtime;      /* modification time */
//     };
//
const utimbuf = Struct.define(16, [
    [0, uint64, 'actime'], // access time
    [8, uint64, 'modtime'], // modification time
]);

export type numberLo = number;
export type numberHi = number;
export type number64 = [numberLo, numberHi];

export interface Iutimbuf {
    actime:     number64,
    modtime:    number64,
}

export default utimbuf;
