require('./setup');
import {pass} from 'tap';
import {libjs} from './helpers/platform';
import {equal, ok} from 'assert';
import * as fs from 'fs';

equal(typeof libjs.stat, 'function');
pass('is a function');

const res = libjs.stat(__filename);
const stats = fs.statSync(__filename);
console.log('libjs:', res);
console.log('Node.js:', stats);

equal(typeof res, 'object');
pass('returns an object');

equal(typeof res.dev, 'number');
pass('dev is a number');
equal(typeof res.ino, 'number');
pass('ino is an object');
equal(typeof res.nlink, 'number');
pass('nlink is number');
equal(typeof res.mode, 'number');
pass('mode is number');
equal(typeof res.uid, 'number');
pass('uid is number');
equal(typeof res.gid, 'number');
pass('gid is number');
equal(typeof res.rdev, 'number');
pass('rdev is number');
equal(typeof res.size, 'object');
pass('size is object');
equal(typeof res.blksize, 'number');
pass('blksize is number');
equal(typeof res.blocks, 'object');
pass('blocks is object');

equal(typeof res.atime, 'object');
equal(typeof res.atimensec, 'object');
equal(typeof res.mtime, 'object');
equal(typeof res.mtimensec, 'object');
equal(typeof res.ctime, 'object');
equal(typeof res.ctimensec, 'object');
pass('returns times in correct format');

equal(stats.uid, res.uid);
pass('returns correct user ID');

equal(stats.gid, res.gid);
pass('returns correct group ID');

equal(stats.nlink, res.nlink);
pass('returns correct link number');

equal(stats.blocks, res.blocks[0]);
pass('returns correct block number');

equal(stats.ino, res.ino);
pass('returns correct inode number');

equal(stats.mode, res.mode);
pass('returns correct mode');

equal(stats.size, res.size[0]);
pass('returns correct size');
