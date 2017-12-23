require('./setup');
import {pass} from 'tap';
import {stat} from '../src/index';
import {equal, ok} from 'assert';
import * as fs from 'fs';
import * as path from 'path';

equal(typeof stat, 'function');
pass('is a function');

const res = stat(__filename);

equal(typeof res, 'object');
pass('returns an object');

equal(typeof res.dev, 'number');
equal(typeof res.ino, 'number');
equal(typeof res.nlink, 'number');
equal(typeof res.mode, 'number');
equal(typeof res.uid, 'number');
equal(typeof res.gid, 'number');
equal(typeof res.rdev, 'number');
equal(typeof res.size, 'number');
equal(typeof res.blksize, 'number');
equal(typeof res.blocks, 'number');
equal(typeof res.atime, 'number');
equal(typeof res.atime_nsec, 'number');
equal(typeof res.mtime, 'number');
equal(typeof res.mtime_nsec, 'number');
equal(typeof res.ctime, 'number');
equal(typeof res.ctime_nsec, 'number');
pass('returns correct object');

const stats = fs.statSync(__filename);
equal(stats.ino, res.ino);
pass('returns correct inode number');
