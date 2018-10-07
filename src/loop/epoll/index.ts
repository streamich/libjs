import {Loop} from "../Loop";
import {epoll_create1, epoll_ctl, EPOLL_CTL, Iepoll_event} from '../..';
import {EPOLL_EVENTS} from "../../platforms/linux";

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
      data: [0, fd],
    };

    return epoll_ctl(this.epfd, EPOLL_CTL.ADD, fd, event);
  }

  asyscall = () => {

  };
}
