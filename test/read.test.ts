require('./setup');
import {pass} from 'tap';
import {read} from '../src/index';
import {equal, ok} from 'assert';
import * as path from 'path';
import * as fs from 'fs';

const filePath = path.join(__dirname, 'fixtures', 'foo');
const fd = fs.openSync(filePath, 'r');
const buf = Buffer.alloc(10);
const res = read(fd, buf);

equal(buf.toString().substr(0, 4), 'bar\n');
pass('reads file');
