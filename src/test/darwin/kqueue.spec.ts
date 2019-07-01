require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';

describe('Darwin > kqueue', () => {
    it('is a function', () => {
        expect(typeof libjs.kqueue).to.eql('function');
    });

    it('returns a file descriptor', () => {
        const fd = libjs.kqueue();
        expect(typeof fd).eql('number');
        expect(fd > 2).eql(true);    
    });

    it('can close kqueue file descriptor', () => {
        const fd = libjs.kqueue();
        
        const res = libjs.close(fd);
        expect(res).equal(0);

        const res2 = libjs.close(fd);
        expect(res2 < 0).equal(true);
    });
});
