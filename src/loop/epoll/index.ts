import {Loop} from "../Loop";
import {epoll_create1, epoll_ctl, EPOLL_CTL, Iepoll_event} from '../..';
import {EPOLL_EVENTS} from "../../platforms/linux";

export class EpollLoop implements Loop {
  MAXEVENTS: number;
  epfd: number;

  constructor (MAXEVENTS: number = 64) {
    this.MAXEVENTS = MAXEVENTS;
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
