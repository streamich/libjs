import {Type} from '../typebase';
import {Ipv4} from '../socket';

const ipv4 = Type.define(4,function (offset: number = 0) {
    const buf = this as Buffer;
    const socket = require('../../socket');
    const octets = socket.Ipv4.type.unpack(buf, offset);
    return new socket.Ipv4(octets);
}, function (data: Ipv4, offset: number = 0) {
    const buf = this as Buffer;
    data.toBuffer().copy(buf, offset);
});

export default ipv4;
