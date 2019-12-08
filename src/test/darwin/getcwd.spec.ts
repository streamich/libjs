require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';
import * as path from 'path';
import * as fs from 'fs';

describe('Darwin > getcwd', () => {
    it('is a function', () => {
        expect(typeof libjs.getcwd).to.eql('function');
    });

    it('returns current directory path', () => {
        const res = libjs.getcwd();
        expect(res).to.eql(process.cwd());
    });
});
