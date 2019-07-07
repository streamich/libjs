import {ILibSys} from '../libsys';

export const createFakeAsyncSyscalls = (syscall: ILibSys['syscall'], syscall64: ILibSys['syscall64']) => {
    const asyscall: ILibSys['asyscall'] = (...args) => {
        Promise.resolve(0).then(() => {
            const argsSansCallback = args.slice(0, args.length - 1);
            const callback = args[args.length - 1];
            const result = syscall.apply(null, argsSansCallback);
            callback(result);
        });
    };

    const asyscall64: ILibSys['asyscall64'] = (...args) => {
        Promise.resolve(0).then(() => {
            const argsSansCallback = args.slice(0, args.length - 1);
            const callback = args[args.length - 1];
            const result = syscall64.apply(null, argsSansCallback);
            callback(result);
        });
    };

    return {
        asyscall,
        asyscall64,
    };
};
