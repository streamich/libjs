require('libsys/shim');
import {EpollLoop} from '../platforms/linux-x86_64/loop/loop';

const loop = new EpollLoop();
const socket = loop.newTcpSocket();
socket.connect({ port: 8080, host: '127.0.0.1' });
