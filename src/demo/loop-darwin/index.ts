require('libsys/shim');
import {createLoop} from '../../platforms/darwin/asyscall/loop';

const loop = createLoop();

console.log('loop', loop);
