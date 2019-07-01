require('./setup');
import {pass} from 'tap';
import {equal} from 'assert';
import {libjs} from './helpers/platform';

equal(typeof libjs.fcntl, 'function');
pass('fcntl is a function');

const res = libjs.fcntl(1, 1);
equal(res, 1);
pass('can execute basic fcntl() operation');
