require('../setup');
import * as libjs from '../../platforms/linux-x86_64';
import {expect} from 'chai';

describe('Linux x86_64 > getcwd', () => {
    it('is a function', () => {
        expect(typeof libjs.getcwd).to.eql('function');
    });

    it('returns current directory path', () => {
        const res = libjs.getcwd();
        expect(res).to.eql(process.cwd());
    });
});
