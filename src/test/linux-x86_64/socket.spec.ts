require('../setup');
import * as libjs from '../../platforms/linux-x86_64';
import {expect} from 'chai';

describe('Linux x86_64 > socket', () => {
    it('is a function', () => {
        expect(typeof libjs.socket).to.eql('function');
    });

    it('returns a file descriptor', () => {
        const fd = libjs.socket(libjs.AF.INET, libjs.SOCK.STREAM, 0);
        expect(typeof fd).eql('number');
        expect(fd > 2).eql(true);
    });
});
