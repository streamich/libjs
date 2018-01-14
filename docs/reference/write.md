# write

```ts
write(fd: number, buf: Buffer): number;
```

  - `fd` - file descriptor
  - `buf` - Buffer with data to write

Writes to data from buffer `buf` to file descriptor `fd`.

Returns number of bytes writte on success, or negative error number.

## Example

Write to console

```js
const STDOUT = 1;
const buf = Buffer.from('Hello world!\n');

libjs.write(STDOUT, buf);
```
