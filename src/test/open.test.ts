require('./setup');
import {libjs} from './helpers/platform';
import {pass} from 'tap';
import {equal, ok} from 'assert';

equal(typeof libjs.open, 'function');
pass('is a function');

const fd1 = libjs.open(__filename, 0);

equal(typeof fd1, 'number');
pass('return a number as file descriptor');

ok(fd1 > 0);
pass('return a positive file descriptor');

const fd2 = libjs.open(__filename, 0);

equal(typeof fd2, 'number');
ok(fd2 > 0);
pass('opens the same file again');

ok(fd2 > fd1);
pass('creates a new file descriptor');
