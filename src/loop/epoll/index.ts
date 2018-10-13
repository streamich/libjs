import {Loop} from "../Loop";
import {
  epoll_create1, 
  epoll_ctl, 
  EPOLL_CTL, 
  Iepoll_event, 
  epoll_wait, 
  EPOLL_EVENTS, 
  epoll_event
} from '../..';

export class EpollLoop implements Loop {
  maxEvents: number; // Number of events to receive from `epoll_wait`.
  epfd: number;

  constructor (maxEvents: number = 64) {
    this.maxEvents = maxEvents;
    this.epfd = epoll_create1(0);

    if (this.epfd < 0) {
        throw new Error('Could not create epoll.');
    }
  }

  listen (fd, callback) {
    const event: Iepoll_event = {
      events: EPOLL_EVENTS.EPOLLIN | EPOLL_EVENTS.EPOLLET,
      data: [fd, 0],
    };

    return epoll_ctl(this.epfd, EPOLL_CTL.ADD, fd, event);
  }

  run () {
    const evbuf = new Buffer(epoll_event.size * this.maxEvents);
    const waitres = epoll_wait(this.epfd, evbuf, this.maxEvents, 5000);

    if (waitres > 0) { // New events arrived.
      const event = epoll_event.unpack(evbuf);
      console.log('event', event);
      
      if (event.events & EPOLL_EVENTS.EPOLLOUT) { // Socket to send data.
        console.log('EPOLLOUT', event.events & EPOLL_EVENTS.EPOLLOUT);
      }
      if (event.events & EPOLL_EVENTS.EPOLLIN) { // Socket received data.
        console.log('EPOLLIN', event.events & EPOLL_EVENTS.EPOLLIN);
        /*
        var buf = new Buffer(1000);
        var bytes = libjs.read(this.fd, buf);
        if (bytes < -1) {
          this.onerror(Error(`Error reading data: ${bytes}`));
        }
        if (bytes > 0) {
          var data = buf.toString().substr(0, bytes);
          this.ondata(data);
        }
        */
      }
      if(event.events & EPOLL_EVENTS.EPOLLERR) { // Check for errors.
        console.log('EPOLLERR', event.events & EPOLL_EVENTS.EPOLLERR);
      }
    }
  }

  asyscall = () => {

  };
}
