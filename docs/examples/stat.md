Run `stat()` on a file

```ts
const stats = libjs.stat(__filename);

console.log(stats);
console.log(require('fs').statSync(__filename));
```
