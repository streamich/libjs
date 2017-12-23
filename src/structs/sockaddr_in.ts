import AF from '../consts/AF';
import {Arr, Struct} from '../typebase';
import in_addr, {Iin_addr} from "./in_addr";
import {int8, int16, uint16} from '../basetypes';

const sockaddr_in = Struct.define(16, [
    [0, int16, 'sin_family'], // e.g. AF_INET
    [2, uint16, 'sin_port'], // htons(3490);
    [4, in_addr, 'sin_addr'],
    [8, Arr.define(int8, 8), 'sin_zero'],
]);

export interface Isockaddr_in {
    sin_family: AF;
    sin_port: number;
    sin_addr: Iin_addr;
    sin_zero?: number[];
}

export default sockaddr_in;
