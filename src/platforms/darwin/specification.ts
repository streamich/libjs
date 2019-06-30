/**
 * Maximal file path string length.
 */
export const PATH_MAX = 4096;

/**
 * Is little-endian.
 */
export const isLE = true;

export {default as SYS} from './SYS';

export * from './consts/MAP';

export * from '../../consts/FLAG';
export * from '../../consts/PROT';
export * from '../../consts/S';
export * from '../../consts/AMODE';
export * from '../../consts/SEEK';
export * from '../../consts/PF';
export * from '../../consts/AF';
export * from '../../consts/SOCK';
export * from '../../consts/IP';
export * from '../../consts/MCAST';
export * from '../../consts/SOL';
export * from '../../consts/SO';
export * from '../../consts/IPV6';
export * from '../../consts/IPPROTO';
export * from '../../consts/IPPORT';
export * from '../../consts/ERROR';
export * from '../../consts/MSG';
export * from '../../consts/SHUT';
export * from '../../consts/EPOLL_EVENTS';
export * from '../../consts/EPOLL';
export * from '../../consts/EPOLL_CTL';
export * from '../../consts/FCNTL';
export * from '../../consts/IPC';
export * from '../../consts/SHM';
export * from '../../consts/FD';
export * from '../../consts/DT';
export * from '../../consts/IN';
export * from '../../consts/EVFILT';
export * from '../../consts/EV';
export * from '../../consts/KEVENT';
export * from '../../consts/NOTE';

export * from './basetypes';
export {default as ipv4} from '../../structs/ipv4';

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
