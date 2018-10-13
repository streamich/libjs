require('./setup');
import {pass} from 'tap';
import {open, write, S, FLAG} from '..';
import {equal, ok} from 'assert';
import * as path from 'path';
import * as fs from 'fs';

const str = 'Hello world!';
const filePath = path.join(__dirname, '/fixtures/write.txt');

let res = write(1, str);
equal(res, str.length);
pass('writes to console');

const fd = open(filePath, 2 | 64 | 512 /* FLAG.O_RDWR | FLAG.O_CREAT | FLAG.O_TRUNC */, 448 /* S.IRWXU */);
res = write(fd, str);
ok(fd > 0);
equal(res, str.length);
ok(fs.existsSync(filePath));
equal(str, fs.readFileSync(filePath, 'utf8'));
pass('writes to file');
fs.unlinkSync(filePath);
