require('libsys/shim');
import * as libjs from '../src/index';

const IP = '0.0.0.0';
const PORT = 8080;

const AF_INET = 2;
const SOCK_STREAM = 1;

const fd = libjs.socket(AF_INET, SOCK_STREAM, 0);

const serv_addr = {
    sin_family: AF_INET,
    sin_port: libjs.hton16(PORT),
    sin_addr: {
        s_addr: new libjs.Ipv4(IP),
    },
    sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
};

libjs.bind(fd, serv_addr, libjs.sockaddr_in);
libjs.listen(fd, 10);

const client_addr_buf = new Buffer(libjs.sockaddr_in.size);
const sock = libjs.accept(fd, client_addr_buf);

setInterval(() => {
    const msg = new Buffer(255);
    const bytes = libjs.read(sock, msg);
    const str = msg.toString().substr(0, bytes) + ' to you!';

    libjs.write(sock, str);
}, 20);

// Now telnet to your server and talk to it:
// telnet 127.0.0.1 8080
