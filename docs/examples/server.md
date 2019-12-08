A basic TCP *echo* server in TypeScript.

```ts
// server.ts

require('libsys/shim');
import {socket, AF, SOCK, hton16, Ipv4, setsockopt, SOL,
    SO, bind, sockaddr_in, sockaddr, listen, accept, recv, send, Isockaddr_in} from 'libjs';

let err;
const BUFFER_SIZE = 1024;
const printf = console.log;
const on_error = (...args: any[]) => {
    printf(...args);
    process.exit(1);
};

if (process.argv.length < 3) on_error("Usage: ts-node %s <port>\n", process.argv[1]);
const port = parseInt(process.argv[2]);

const client = new Buffer(sockaddr.size);
const buf = new Buffer(BUFFER_SIZE);

const server_fd = socket(AF.INET, SOCK.STREAM, 0);
if (server_fd < 0) on_error("Could not create socket\n");

const server: Isockaddr_in = {
    sin_family: AF.INET,
    sin_port: hton16(port),
    sin_addr: {
        s_addr: new Ipv4('0.0.0.0'),
    },
    sin_zero: [0, 0, 0, 0, 0, 0, 0, 0],
};

const opt_val = new Buffer([1]);
setsockopt(server_fd, SOL.SOCKET, SO.REUSEADDR, opt_val);

err = bind(server_fd, server, sockaddr_in);
if (err < 0) on_error("Could not bind socket\n");

err = listen(server_fd, 128);
if (err < 0) on_error("Could not listen on socket\n");

printf("Server is listening on %d\n", port);

while (1) {
    const client_fd = accept(server_fd, client);
    if (client_fd < 0) on_error("Could not establish new connection\n");

    while (1) {
        const read = recv(client_fd, buf, 0);
        if (!read) break; // done reading
        if (read < 0) on_error("Client read failed\n");

        const copy = buf.slice(0, read);
        err = send(client_fd, copy, 0);
        if (err < 0) on_error("Client write failed\n");
    }
}
```

Run it with.

```shell
ts-node server.ts 8080
```

Now `nc` or `telnet` into your server.

```shell
nc 127.0.0.1 8080
telnet 127.0.0.1 8080
```
