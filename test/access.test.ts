require('./setup');
import {pass} from 'tap';
import {access} from '../src/index';
import {equal, ok} from 'assert';

const res2 = access(__filename, 0);
equal(res2, 0);
pass('returns 0 on current file');
