Write to console

```ts
require('libsys/shim');
const {write} = require('libjs');

const STDOUT = 1;
const buf = Buffer.from('Hello world!\n');

write(STDOUT, buf);
```
