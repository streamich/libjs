require('../setup');
import * as libjs from '../../platforms/linux-x86_64';
import {expect} from 'chai';
import * as path from 'path';
import * as fs from 'fs';

const str = 'Hello world!';
const filePath = path.join(__dirname, '../fixtures/write.txt');

describe('Linux x86_64 > write', () => {
    it('is a function', () => {
        expect(typeof libjs.write).to.eql('function');
    });

    it('writes to console', () => {
        const res = libjs.write(1, str);
        expect(res).eql(str.length);
    });

    it('writes to file', () => {
        const fd = libjs.open(filePath, 2 | 64 | 512 /* FLAG.O_RDWR | FLAG.O_CREAT | FLAG.O_TRUNC */, 448 /* S.IRWXU */);
        const res = libjs.write(fd, str);

        expect(fd > 0).eql(true);
        expect(res).eql(str.length);
        expect(fs.existsSync(filePath)).eql(true);
        expect(str).eql(fs.readFileSync(filePath, 'utf8'));

        fs.unlinkSync(filePath);
    });
});
