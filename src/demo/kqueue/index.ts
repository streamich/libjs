require('libsys/shim');
import * as libjs from '../../platforms/darwin';

// See: http://julio.meroh.net/2004/10/example-of-kqueue.html
const main = () => {
    const kq = libjs.kqueue();

    const filename = __dirname + '/foo';
    const f = libjs.open(filename, libjs.FLAG.O_RDONLY);

    const change = libjs.EV_SET(f, libjs.EVFILT.VNODE,
        libjs.EV.ADD | libjs.EV.ENABLE | libjs.EV.ONESHOT,
        libjs.NOTE.DELETE | libjs.NOTE.EXTEND | libjs.NOTE.WRITE | libjs.NOTE.ATTRIB,
        [0, 0], [0, 0]);
    
    console.log(`Waiting for event on ${filename} file.`);
    console.log('Go modify it.');
    
    for (;;) {
        const event = Buffer.allocUnsafe(libjs.keventStruct.size);
        const nev = libjs.__kevent(kq, change, 1, event, 1, libjs.NULL);

        if (nev < 0) {
            console.log(`Error happened: ${nev}`);
            break;
        } else if (nev > 0) {
            const data = libjs.keventStruct.unpack(event) as libjs.IkeventStruct;
            console.log('Event:', data);

            if (data.fflags & libjs.NOTE.DELETE) {
                console.log('File deleted.');
                break;
            }

            if ((data.fflags & libjs.NOTE.EXTEND) || (data.fflags & libjs.NOTE.WRITE)) {
                console.log('File modified.');
            }

            if (data.fflags & libjs.NOTE.ATTRIB) {
                console.log('File attributes modified.');
            }
        }
    }
};

main();
