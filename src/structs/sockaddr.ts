import AF from '../consts/AF';
import {Arr, Struct} from '../typebase';
import {uint16, int8} from '../basetypes';

// IPv6 AF_INET6 sockets:
//
//     struct sockaddr_in6 {
//         u_int16_t       sin6_family;   // address family, AF_INET6
//         u_int16_t       sin6_port;     // port number, Network Byte Order
//         u_int32_t       sin6_flowinfo; // IPv6 flow information
//         struct in6_addr sin6_addr;     // IPv6 address
//         u_int32_t       sin6_scope_id; // Scope ID
//     };
//     struct in6_addr {
//         unsigned char   s6_addr[16];   // load with inet_pton()
//     };
//     struct sockaddr {
//         sa_family_t sa_family;
//         char        sa_data[14];
//     }
//
const sockaddr = Struct.define(1, [
    [0, 'sa_family', uint16],
    [2, 'sa_data', Arr.define(int8, 14)],
]);

export interface Isockaddr {
    sa_family: AF;      // address family, AF_xxx
    sa_data: number[];  // 14 bytes of protocol address
}

export default sockaddr;
