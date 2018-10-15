require('libsys/shim');
import * as libjs from '..';
// const libjs = require('../lib');

const STDOUT = 1;
const buf = Buffer.from('Hello world!\n');

libjs.write(STDOUT, buf);
