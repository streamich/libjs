require('./setup');
import {pass} from 'tap';
import {equal} from 'assert';
import {libjs} from './helpers/platform';

const res2 = libjs.access(__filename, 0);
equal(res2, 0);
pass('returns 0 on current file');
