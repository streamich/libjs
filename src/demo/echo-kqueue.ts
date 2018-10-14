require('libsys/shim');
import {socket, AF, SOCK, hton16, Ipv4, setsockopt, SOL, fcntl, FCNTL, FLAG,
    SO, bind, sockaddr_in, sockaddr, listen, accept, recv, send, Isockaddr_in,
    kqueue, ERROR, EVFILT, EV, keventStruct, IkeventStruct} from '..';

let err;
const BUFFER_SIZE = 1024;
const printf = console.log;
const strerror = (errno: number) => ERROR[Math.abs(errno)];
const on_error = (...args: any[]) => {
    printf(...args);
    process.exit(1);
};

if (process.argv.length < 3) on_error("Usage: ts-node %s <port>\n", process.argv[1]);
const port = parseInt(process.argv[2]);

function event_server_listen (port: number): [number, number] {
    let err;

    const queue = kqueue();
    if (queue < 0) on_error("Could not create kqueue: %s\n", ERROR[-queue]);

    const server_fd = socket(AF.INET, SOCK.STREAM, 0);
    if (server_fd < 0) on_error("Could not create server socket: %s\n", strerror(server_fd));

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
    if (err < 0) on_error("Could not bind server socket: %s\n", strerror(err));

    const flags = fcntl(server_fd, FCNTL.GETFL, 0);
    if (flags < 0) on_error("Could not get server socket flags: %s\n", strerror(flags))

    err = fcntl(server_fd, FCNTL.SETFL, flags | FLAG.O_NONBLOCK);
    if (err < 0) on_error("Could set server socket to be non blocking: %s\n", strerror(err));
    
    err = listen(server_fd, 128);
    if (err < 0) on_error("Could not listen: %s\n", strerror(err));

    return [server_fd, queue];
}

/*
function event_change (server_fd: number, filter: number, flags: number, udata: [number, number]) {
    const e: IkeventStruct = {
        ident: [server_fd, 0],
        filter,
        flags,
        fflags: 0,
        data: [0, 0],
        udata: udata,
    };
    const event = keventStruct.pack(e);
struct kevent *e;

if (events_alloc == 0) {
events_alloc = 64;
events = malloc(events_alloc * sizeof(struct kevent));
}
if (events_alloc <= events_used) {
events_alloc *= 2;
events = realloc(events, events_alloc * sizeof(struct kevent));
}

int index = events_used++;
e = &events[index];

e->udata = udata;
}
*/

function event_loop () {
    // int new_events;

    while (1) {
        new_events = kevent(queue, events, events_used, events, events_alloc, NULL);
        // if (new_events < 0) on_error("Event loop failed: %s\n", strerror(errno));
        // events_used = 0;

        // for (int i = 0; i < new_events; i++) {
        // struct kevent *e = &events[i];
        // struct event_data *udata = (struct event_data *) e->udata;

        // if (udata == NULL) continue;
        // if (udata->on_write != NULL && e->filter == EVFILT_WRITE) while (udata->on_write(udata, e));
        // if (udata->on_read != NULL && e->filter == EVFILT_READ) while (udata->on_read(udata, e));
        // }
    }
}

const event_on_accept = () => {};
const event_on_read = () => {};

const server = {
    on_read: event_on_accept,
    on_write: null,
};

const [server_fd, queue] = event_server_listen(port);
// event_change(server_fd, EVFILT.READ, EV.ADD | EV.ENABLE, server);
const e: IkeventStruct = {
    ident: [server_fd, 0],
    filter: EVFILT.READ,
    flags: EV.ADD | EV.ENABLE,
    fflags: 0,
    data: [0, 0],
    udata: [0, 0],
};
const event = keventStruct.pack(e);
event_loop();

console.log('queue', queue);

/*
static struct kevent *events;
static int events_used = 0;
static int events_alloc = 0;

static struct sockaddr_in server;

struct event_data {
  char buffer[BUFFER_SIZE];
  int buffer_read;
  int buffer_write;

  int (*on_read) (struct event_data *self, struct kevent *event);
  int (*on_write) (struct event_data *self, struct kevent *event);
};



static int event_flush_write (struct event_data *self, struct kevent *event) {
  int n = write(event->ident, self->buffer + self->buffer_write, self->buffer_read - self->buffer_write);

  if (n < 0) {
    if (errno == EWOULDBLOCK || errno == EAGAIN) return 0;
    on_error("Write failed (should this be fatal?): %s\n", strerror(errno));
  }

  if (n == 0) {
    free(self);
    close(event->ident);
    return 0;
  }

  self->buffer_write += n;

  if (self->buffer_write == self->buffer_read) {
    self->buffer_read = 0;
    self->buffer_write = 0;
  }

  return 0;
}

static int event_on_read (struct event_data *self, struct kevent *event) {
  if (self->buffer_read == BUFFER_SIZE) {
    event_change(event->ident, EVFILT_READ, EV_DISABLE, self);
    return 0;
  }

  int n = read(event->ident, self->buffer + self->buffer_read, BUFFER_SIZE - self->buffer_read);

  if (n < 0) {
    if (errno == EWOULDBLOCK || errno == EAGAIN) return 0;
    on_error("Read failed (should this be fatal?): %s\n", strerror(errno));
  }

  if (n == 0) {
    free(self);
    close(event->ident);
    return 0;
  }

  if (self->buffer_read == 0) {
    event_change(event->ident, EVFILT_WRITE, EV_ENABLE, self);
  }

  self->buffer_read += n;
  return event_flush_write(self, event);
}

static int event_on_write (struct event_data *self, struct kevent *event) {
  if (self->buffer_read == self->buffer_write) {
    event_change(event->ident, EVFILT_WRITE, EV_DISABLE, self);
    return 0;
  }

  return event_flush_write(self, event);
}

static int event_on_accept (struct event_data *self, struct kevent *event) {
  struct sockaddr client;
  socklen_t client_len = sizeof(client);

  int client_fd = accept(server_fd, &client, &client_len);
  int flags;
  int err;

  if (client_fd < 0) {
    if (errno == EWOULDBLOCK || errno == EAGAIN) return 0;
    on_error("Accept failed (should this be fatal?): %s\n", strerror(errno));
  }

  flags = fcntl(client_fd, F_GETFL, 0);
  if (flags < 0) on_error("Could not get client socket flags: %s\n", strerror(errno));

  err = fcntl(client_fd, F_SETFL, flags | O_NONBLOCK);
  if (err < 0) on_error("Could not set client socket to be non blocking: %s\n", strerror(errno));

  struct event_data *client_data = (struct event_data *) malloc(sizeof(struct event_data));
  client_data->on_read = event_on_read;
  client_data->on_write = event_on_write;

  event_change(client_fd, EVFILT_READ, EV_ADD | EV_ENABLE, client_data);
  event_change(client_fd, EVFILT_WRITE, EV_ADD | EV_ENABLE, client_data);

  return 1;
}
*/
