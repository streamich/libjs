require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';

describe('Darwin > access', () => {
    it('is a function', () => {
        expect(typeof libjs.access).to.eql('function');
    });

    it('returns 0 on current file', () => {
        const res2 = libjs.access(__filename, 0);
        expect(res2).eql(0);
    });
});
