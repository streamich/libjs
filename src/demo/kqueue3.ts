require('libsys/shim');
import {AF, hton16, Ipv4, Isockaddr_in, socket, SOCK, setsockopt, SOL, SO, bind,
    sockaddr_in, listen, kqueue, __kevent, EV_SET, EVFILT, EV, kevent, keventStruct, timespec} from '..';
import { IkeventStruct } from '../structs/kevent';

const addr: Isockaddr_in = {
    sin_family: AF.INET,
    sin_port: hton16(8099),
    sin_addr: {
        s_addr: new Ipv4('0.0.0.0'),
    },
    sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
};

const localFd = socket(AF.INET, SOCK.STREAM, 0);
const one = new Buffer([1]);
setsockopt(localFd, SOL.SOCKET, SO.REUSEADDR, one);
const bindRes = bind(localFd, addr, sockaddr_in);
const listenRes = listen(localFd, 128);
const kq = kqueue();

console.log('localFd', localFd);
console.log('bindRes', bindRes);
console.log('listenRes', listenRes);
console.log('kq', kq);

const buf = EV_SET(localFd, EVFILT.READ, EV.ADD, 0, [0, 0], [0, 0]);
const keventRes = __kevent(kq, buf, 1, null, 0, 0);
console.log('keventRes', keventRes);

const evList = new Buffer(keventStruct.size);
while (1) {
    const nev = __kevent(kq, null, 0, evList, 1, 0);
    const event: IkeventStruct = keventStruct.unpack(evList);

    
    if (event.filter & EVFILT.WRITE) {
        console.log('WRITE')
    }
}
