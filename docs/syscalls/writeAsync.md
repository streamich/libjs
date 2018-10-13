# writeAsync

```ts
write(fd: number, buf: Buffer, callback: (bytes: number) => void);
```

  - `fd` - file descriptor
  - `buf` - Buffer with data to write
  - `callback` - function called when write finishes

Writes data from buffer `buf` to file descriptor `fd`.

`callback` is called once the write is done, callback receives a signle argument - number of bytes writte on success, or a negative error number.
