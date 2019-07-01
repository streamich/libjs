require('../setup');
import * as path from 'path';
import * as fs from 'fs';
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';

const filePath = path.join(__dirname, '..', 'fixtures', 'foo');

describe('Darwin > close', () => {
    it('is a function', () => {
        expect(typeof libjs.open).to.eql('function');
    });

    it('closes file successfully', () => {
        const fd = fs.openSync(filePath, 0);
        const buf = Buffer.alloc(100);

        fs.readSync(fd, buf, 0, 3, 0);
        const res = libjs.close(fd);

        expect(res).eql(0);

        try {
            const buf = Buffer.alloc(100);
            fs.readSync(fd, buf, 0, 3, 0);
            throw 123;
        } catch (error) {
            expect(error).not.eql(123);
        }
    });
});
