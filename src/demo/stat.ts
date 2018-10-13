require('libsys/shim');
import * as libjs from '../src';

const stats = libjs.stat(__filename);

console.log(stats);
console.log(require('fs').statSync(__filename));
