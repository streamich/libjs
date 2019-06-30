export * from '../../structs/ipv4';
export * from '../../structs/stat';
export * from '../../structs/in_addr';
export * from '../../structs/sockaddr_in';
export * from '../../structs/sockaddr';
export * from '../../structs/epoll_event';
export * from '../../structs/ipc_perm';
export * from '../../structs/shmid_ds';
export * from '../../structs/utimbuf';
export * from '../../structs/timeval';
export * from '../../structs/timevalarr';
export * from '../../structs/timespec';
export * from '../../structs/linux_dirent64';
export * from '../../structs/inotify_event';
export * from '../../structs/kevent';
export * from '../../structs/kevent64_s';

import {Itimeval} from '../../structs/timeval';
import {timevalarr} from '../../structs/timevalarr';
export const timespecarr = timevalarr;
export interface Itimespec extends Itimeval {}
export type Itimespecarr = [Itimespec, Itimespec];
