require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';

describe('Darwin > socket', () => {
    it('is a function', () => {
        expect(typeof libjs.socket).to.eql('function');
    });

    it('returns a file descriptor', () => {
        const fd = libjs.socket(libjs.AF.INET, libjs.SOCK.STREAM, 0);
        expect(typeof fd).eql('number');
        expect(fd > 2).eql(true);
    });
});
