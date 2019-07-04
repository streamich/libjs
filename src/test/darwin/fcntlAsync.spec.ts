require('../setup');
import * as libjs from '../../platforms/darwin';
import {expect} from 'chai';

describe('Darwin > fcntlAsync', () => {
    it('is a function', () => {
        expect(typeof libjs.fcntlAsync).to.eql('function');
    });

    // it('can execute basic fcntlAsync() operation', async () => {
        // const res = await new Promise(r => libjs.fcntlAsync(1, 1, 0, r));
        // expect(res).eql(1);
    // });
});
