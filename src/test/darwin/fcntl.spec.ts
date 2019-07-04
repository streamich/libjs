require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';

describe('Darwin > fcntl', () => {
    it('is a function', () => {
        expect(typeof libjs.fcntl).to.eql('function');
    });

    it('can execute basic fcntl() operation', () => {
        const res = libjs.fcntl(1, 1, 0);
        expect(res).eql(1);
    });
});
