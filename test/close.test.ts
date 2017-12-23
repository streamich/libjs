require('./setup');
import {pass} from 'tap';
import {close} from '../src/index';
import {equal, ok} from 'assert';
import * as path from 'path';
import * as fs from 'fs';

const filePath = path.join(__dirname, 'fixtures', 'foo');
const fd = fs.openSync(filePath, 0);

try {
    const buf = Buffer.alloc(100);
    fs.readSync(fd, buf, 0, 3, 0);
} catch (error) {

}

const res = close(fd);
equal(res, 0);
try {
    const buf = Buffer.alloc(100);
    fs.readSync(fd, buf, 0, 3, 0);
    throw 123;
} catch (error) {
    ok(error !== 123, 'should not throw 123');
}
pass('closes file successfully');
