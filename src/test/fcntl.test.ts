require('./setup');
import {pass} from 'tap';
import {equal, ok} from 'assert';
import * as path from 'path';
import * as fs from 'fs';
import {libjs} from './helpers/platform';

equal(typeof libjs.fcntl, 'function');
pass('fcntl is a function');


// libjs.fcntl(1, 1);
// const fd = fs.openSync(__filename, 'r');
// console.log('fd', fd)
// const res = libjs.fcntl(fd, libjs.F.GETFD);
// console.log('res', res);
