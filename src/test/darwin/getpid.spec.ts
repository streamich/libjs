require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';

describe('Darwin > getpid', () => {
    it('is a function', () => {
        expect(typeof libjs.getpid).to.eql('function');
    });

    it('should return a number', () => {
        expect(typeof libjs.getpid()).eql('number');
    });

    it('returns the same process id on multiple calls', () => {
        expect(libjs.getpid()).eql(libjs.getpid());
    });

    it('returns correct process id', () => {
        expect(libjs.getpid()).eql(process.pid);
    });
});
