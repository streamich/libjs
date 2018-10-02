Write to console

```ts
require('libsys/shim');
const libjs = require('libjs');

const STDOUT = 1;
const buf = Buffer.from('Hello world!\n');

libjs.write(STDOUT, buf);
```
