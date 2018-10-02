Run `stat()` on a file

```ts
require('libsys/shim');
const libjs = require('libjs');
const stats = libjs.stat(__filename);

console.log(stats);
console.log(require('fs').statSync(__filename));
```
