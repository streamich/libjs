import './setup';
import {libjs} from './helpers/platform';
import {pass} from 'tap';
import {equal} from 'assert';

equal(typeof libjs.getpid, 'function');
pass('is a function');

equal(typeof libjs.getpid(), 'number');
pass('should return a number');

equal(libjs.getpid(), libjs.getpid());
pass('returns the same process id on multiple calls');

equal(libjs.getpid(), process.pid);
pass('returns correct process id');
