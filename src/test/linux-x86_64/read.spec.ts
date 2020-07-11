require('../setup');
import * as libjs from '../../platforms/linux-x86_64';
import {expect} from 'chai';
import * as path from 'path';
import * as fs from 'fs';

describe('Darwin > read', () => {
    it('is a function', () => {
        expect(typeof libjs.read).to.eql('function');
    });

    it('reads file', () => {
        const filePath = path.join(__dirname, '..', 'fixtures', 'foo');
        const fd = fs.openSync(filePath, 'r');

        const buf = Buffer.alloc(10);
        const res = libjs.read(fd, buf);

        expect(buf.toString().substr(0, 4)).eql('bar\n');
        expect(res).eql(4);
    });
});
