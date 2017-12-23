import './setup';
import {getpid} from '../src/index';
import {pass} from 'tap';
import {equal} from 'assert';

equal(typeof getpid, 'function');
pass('is a function');

equal(typeof getpid(), 'number');
pass('should return a number');

equal(getpid(), getpid());
pass('returns the same process id on multiple calls');

equal(getpid(), process.pid);
pass('returns correct process id');
