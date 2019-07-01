require('./setup');
import {pass} from 'tap';
import {libjs} from './helpers/platform';
import {equal} from 'assert';

const fd = libjs.kqueue();
equal(typeof fd, 'number');
equal(fd > 2, true);
pass('returns a file descriptor');

const res = libjs.close(fd);
equal(res, 0);
pass('can close kqueue file descriptor');

const res2 = libjs.close(fd);
equal(res2 < 0, true);
pass('returns error when closing kqueue file descriptor again');
