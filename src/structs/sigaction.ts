import {Struct} from '../typebase';
import {int32, uint64} from '../basetypes';

const sigaction = Struct.define(16, [
    [0, uint64, 'handler'], // 8
    [8, int32, 'mask'], // 4
    [12, int32, 'flags'], // 4
]);

export default sigaction;
