import {Struct} from '../typebase';
import ipv4 from './ipv4';
import {Ipv4} from '../socket';

// From http://beej.us/guide/bgnet/output/html/multipage/sockaddr_inman.html
//
//     struct sockaddr_in {
//         short            sin_family;   // e.g. AF_INET
//         unsigned short   sin_port;     // e.g. htons(3490)
//         struct in_addr   sin_addr;     // see struct in_addr, below
//         char             sin_zero[8];  // zero this if you want to
//     };
//     struct in_addr {
//         unsigned long s_addr;  // load with inet_aton()
//     };
//
const in_addr = Struct.define(4, [
    [0, ipv4, 's_addr'], // load with inet_aton()
]);

export interface Iin_addr {
    s_addr: Ipv4;
}

export default in_addr;
