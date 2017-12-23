import {Arr} from './typebase';
import {isLE as IS_LE, uint8, uint16} from './platform';


export function flip(buf: Buffer, offset = 0, len = buf.length) {
    var mid = len >> 1, tmp, lside, rside;
    for(var i = 0; i < mid; i++) {
        lside = i + offset;
        rside = offset + len - i - 1;
        tmp = buf.readInt8(lside);
        buf.writeInt8(buf.readInt8(rside), lside);
        buf.writeInt8(tmp, rside);
    }
    return buf;
}

// TODO: We cannot use 4-byte `htonl`, because JS allows bit shifting only up to 4-bytes
// TODO: AND those 4-bytes are treated as SIGNED int, so the 32-nd bit will change the sign of the number.
// export function htons32(num: number): number {
//     if(IS_LE) return ((num & 0xFF00) >> 8) + ((num & 0xFF) << 8);
//     else return num;
// }


export function hton16(num: number): number {
    if(IS_LE) return ((num & 0xFF00) >> 8) + ((num & 0xFF) << 8);
    else return num;
}


export function htons(buf: Buffer, offset = 0, len = buf.length) {
    if(IS_LE) return flip(buf, offset, len);
    else return buf;
}


// http://linux.die.net/man/3/inet_aton
// export function inet_aton(ip: string): number {
// export function inet_addr(ip: string): Ipv4 {
//     var ipobj = new Ipv4(ip);
//     htons(ipobj.buf);
//     return ipobj;
// }


export class Ip {
    sep = '.';

    buf: Buffer;

    constructor(ip: string|number[]) {
        if(typeof ip === 'string') {
            this.buf = new Buffer(ip.split(this.sep));
        } else if(ip instanceof Array) {
            this.buf = new Buffer(ip);
        }
    }

    toString() {
        return Ipv4.type.unpack(this.buf).join(this.sep);
    }

    toBuffer() {
        return this.buf;
    }

    presentationToOctet(presentation) {
        return +presentation;
    }

    octetToPresentation(octet) {
        return octet;
    }
}

export class Ipv4 extends Ip {
    static type = Arr.define(uint8, 4);

    constructor(ip: string|number[] = '127.0.0.1') {
        super(ip);
    }
}

export class Ipv6 extends Ip {
    static type = Arr.define(uint16, 16);

    sep = ':';

    constructor(ip: string|number[] = '0:0:0:0:0:0:0:1') {
        super(ip);
    }

    presentationToOctet(presentation) {
        return parseInt(presentation, 16);
    }

    octetToPresentation(octet) {
        return octet.toString(16);
    }
}
