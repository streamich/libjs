require('libsys/shim');
import * as libjs from '..';
import {libsys} from '../libsys';
import {writeFileSync} from 'fs';

const SYS_write = libjs.SYS.write;
const STDOUT = 1;
const syscall = libsys.syscall;

const log = (str) => {
    const buf = Buffer.from(str + '\n');
    libjs.write(STDOUT, buf);
};

const log2 = (str) => {
    process.stdout.write(str + '\n');
};

const log3 = (str) => {
    const buf = Buffer.from(str + '\n');
    syscall(SYS_write, STDOUT, buf, buf.length);
};

const log4 = (str) => {
    writeFileSync(STDOUT, str + '\n');
};

const max = 100_000;

for (let i = 0; i < max; i++) {
    // real    0m2.544s
    // user    0m0.895s
    // sys     0m0.205s
    // console.log('hello world');

    // real    0m2.297s
    // user    0m0.461s
    // sys     0m0.157s
    // log('hello world');

    // real    0m2.401s
    // user    0m0.665s
    // sys     0m0.186s
    // log2('hello world');

    // real    0m2.693s
    // user    0m0.485s
    // sys     0m0.164s
    // log3('hello world');

    // log4('hello world');
}
