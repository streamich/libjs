# readAsync

```ts
readAsync(fd: number, buf: Buffer, callback: (bytes: number) => void);
```

Asynchronous version of [`read`](./read.md) function.

  - `fd` - file descriptor
  - `buf` - `Buffer` where to place read data
  - `callback` - function that is called when read finished, receives one argument on success - number of bytes read. On failure returns a negative error number.
