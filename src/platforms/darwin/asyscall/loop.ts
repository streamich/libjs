import {ILibSys} from '../../../libsys';
import {kqueue, __kevent} from '../syscalls/events';
import {keventStruct} from '../specification';

export interface Loop {
    asyscall: ILibSys['asyscall'];
    asyscall64: ILibSys['asyscall64'];
    timer: () => {},
}

export const createLoop = (): Loop => {
    const kq = kqueue();
    if (kq < 0) throw new Error('Could not create kqueue.');

    while (1) {
        const events = Buffer.allocUnsafe(keventStruct.size);
        const newEventCount = __kevent(kq, null, 0, events, 1, 0);
    }

    return {
        asyscall: () => { throw new Error('not implemented'); },
        asyscall64: () => { throw new Error('not implemented'); },
        timer: () => { throw new Error('not implemented'); },
    };
};
