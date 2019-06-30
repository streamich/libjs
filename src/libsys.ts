import {ILibSys} from './types';

export const libsys: ILibSys = (global as any).libsys;

const {syscall, syscall64, asyscall, asyscall64} = libsys;

export {
    syscall,
    syscall64,
    asyscall,
    asyscall64,
};
