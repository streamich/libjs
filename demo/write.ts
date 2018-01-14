require('libsys/shim');
import * as libjs from '../src/index';

const STDOUT = 1;
const buf = Buffer.from('Hello world!\n');

libjs.write(STDOUT, buf);
