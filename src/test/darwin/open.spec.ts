require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';

describe('Darwin > open', () => {
    it('is a function', () => {
        expect(typeof libjs.open).to.eql('function');
    });

    it('return a number as file descriptor', () => {
        const fd = libjs.open(__filename, 0);
        expect(typeof fd).to.eql('number');
        expect(fd > 0).to.eql(true);
    });

    it('opens the same file again', () => {
        const fd = libjs.open(__filename, 0);
        expect(typeof fd).to.eql('number');
        expect(fd > 0).to.eql(true);
    });

    it('creates a new file descriptor', () => {
        const fd1 = libjs.open(__filename, 0);
        const fd2 = libjs.open(__filename, 0);
        expect(fd2 > fd1).to.eql(true);
    });
});
