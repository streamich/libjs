require('libsys/shim');
import * as libjs from '../src/index';

const AF_INET = 2;
const SOCK_STREAM = 1;

const fd = libjs.socket(AF_INET, SOCK_STREAM, 0);
process.exit();
const addr_in = {
    sin_family: AF_INET,
    sin_port: libjs.htons32(80),
    sin_addr: {
        s_addr: new libjs.Ipv4('192.168.1.150'),
    },
    sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
};

console.log(addr_in);
process.exit();

libjs.connect(fd, addr_in);
libjs.write(fd, 'GET / \n\n');

setTimeout(() => {
    const buf = new Buffer(1000);
    const bytes = libjs.read(fd, buf);

    console.log(buf.toString().substr(0, bytes));
    libjs.close(fd);
}, 25);
