require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';
import * as path from 'path';
import * as fs from 'fs';

describe('Darwin > pipe', () => {
    it('is a function', () => {
        expect(typeof libjs.pipe).to.eql('function');
    });

    it('return two file descriptors', () => {
        const fd = libjs.pipe();
        expect(fd[0] < fd[1]).eql(true);
        expect(fd[0] > 2).eql(true);
    });

    it('can write to and read from file descriptors', () => {
        const fd = libjs.pipe();
        const buf = Buffer.from('hello');
        libjs.write(fd[1], buf);
        const buf2 = Buffer.alloc(10);
        const res = libjs.read(fd[0], buf2);
        const str = buf2.slice(0, res).toString();
        expect(str).eql('hello');
    });
});
