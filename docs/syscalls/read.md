# `read`

Read data from file associated with `fd` file descriptor into buffer `buf`.
Up to size of the `buf.length` will be read, or less.

```ts
read(fd: number, buf: Buffer): number;
```

  - `fd` - file descriptor
  - `buf` - `Buffer` where to place read data

Returns a `number` which is the actual bytes read into the buffer, if negative,
represents an error. If zero, represents *end-of-file*, but if `buf` is of length
zero than zero does not necessarily mean *end-of-file*.

See [`readAsync`](./readAsync.md) for asynchronous variant.

## Example

```ts
require('libsys/shim');
const libjs = require('libjs');

const O_RDONLY = 0;
const fd = libjs.open(__filename, O_RDONLY);

if(fd > -1) {
    const buf = new Buffer(1024);
    const bytes_read = libjs.read(fd, buf);

    console.log('Bytes read: ', bytes_read);
    console.log(buf.toString().substr(0, bytes_read));
} else {
    console.log('Error: ', fd);
}
```
