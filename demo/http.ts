require('libsys/shim');
import * as libjs from '../src/index';

const IP = '0.0.0.0';
const PORT = 80;

const AF_INET = 2;
const SOCK_STREAM = 1;

const fd = libjs.socket(AF_INET, SOCK_STREAM, 0);
console.log('Socket fd: ', fd);

const addr_in = {
    sin_family: AF_INET,
    sin_port: libjs.htons32(PORT),
    sin_addr: {
        s_addr: new libjs.Ipv4(IP),
    },
    sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
};

setTimeout(() => {
    const buf = new Buffer(1000);
    const bytes = libjs.read(fd, buf);

    console.log('Byte received: ', bytes);
    console.log(buf.toString().substr(0, bytes));
    libjs.close(fd);
}, 1);
