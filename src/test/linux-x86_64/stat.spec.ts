require('../setup');
import * as libjs from '../../platforms/linux-x86_64';
import {expect} from 'chai';
import * as fs from 'fs';

describe('Linux x86_64 > stat', () => {
    it('is a function', () => {
        expect(typeof libjs.stat).to.eql('function');
    });

    it('returns correct data', () => {
        const res = libjs.stat(__filename);
        const stats = fs.statSync(__filename);
        const equal = (a, b) => expect(a).eql(b);

        equal(typeof res, 'object');

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
        // equal(typeof res.atimensec, 'object');
        equal(typeof res.mtime, 'number');
        // equal(typeof res.mtimensec, 'object');
        equal(typeof res.ctime, 'number');
        // equal(typeof res.ctimensec, 'object');

        equal(stats.uid, res.uid);
        equal(stats.gid, res.gid);
        equal(stats.nlink, res.nlink);
        equal(stats.blocks, res.blocks);
        equal(stats.ino, res.ino);
        equal(stats.mode, res.mode);
        equal(stats.size, res.size);
    });
});
