import {IType} from './typebase';
import SYS from './platforms/linux/SYS';
import AF from './consts/AF';
import AMODE from './consts/AMODE';
import DT from './consts/DT';
import EPOLL from './consts/EPOLL';
import EPOLL_CTL from './consts/EPOLL_CTL';
import EPOLL_EVENTS from './consts/EPOLL_EVENTS';
import ERROR from './consts/ERROR';
import FCNTL from './consts/FCNTL';
import FD from './consts/FD';
import FLAG from './consts/FLAG';
import IN from './consts/IN';
import IP from './consts/IP';
import IPC from './consts/IPC';
import IPPORT from './consts/IPPORT';
import IPPROTO from './consts/IPPROTO';
import IPV6 from './consts/IPV6';
import MAP from './consts/MAP';
import MCAST from './consts/MCAST';
import MSG from './consts/MSG';
import PF from './consts/PF';
import PROT from './consts/PROT';
import S from './consts/S';
import SEEK from './consts/SEEK';
import SHM from './consts/SHM';
import SHUT from './consts/SHUT';
import SO from './consts/SO';
import SOCK from './consts/SOCK';
import SOL from './consts/SOL';
import ipv4 from './structs/ipv4';
import statStruct, {IstatStruct} from './structs/stat';
import in_addr, {Iin_addr} from './structs/in_addr';
import sockaddr_in, {Isockaddr_in} from './structs/sockaddr_in';
import sockaddr, {Isockaddr} from './structs/sockaddr';
import epoll_event, {Iepoll_event} from './structs/epoll_event';
import ipc_perm, {Iipc_perm} from './structs/ipc_perm';
import shmid_ds, {Ishmid_ds} from './structs/shmid_ds';
import utimbuf, {Iutimbuf} from './structs/utimbuf';
import timeval, {Itimeval} from './structs/timeval';
import timevalarr, {Itimevalarr} from './structs/timevalarr';
import timespec from './structs/timespec';
import linux_dirent64, {Ilinux_dirent64} from './structs/linux_dirent64';
import inotify_event, {Iinotify_event} from './structs/inotify_event';

export {
    SYS,
    AF,
    AMODE,
    DT,EPOLL,
    EPOLL_CTL,
    EPOLL_EVENTS,
    ERROR,
    FCNTL,
    FD,
    FLAG,
    IN,
    IP,
    IPC,
    IPPORT,
    IPPROTO,
    IPV6,
    MAP,
    MCAST,
    MSG,
    PF,
    PROT,
    S,
    SEEK,
    SHM,
    SHUT,
    SO,
    SOCK,
    SOL,

    ipv4,
    statStruct,
    IstatStruct,
    in_addr,
    Iin_addr,
    sockaddr_in,
    Isockaddr_in,
    sockaddr,
    Isockaddr,
    epoll_event,
    Iepoll_event,
    ipc_perm,
    Iipc_perm,
    shmid_ds,
    Ishmid_ds,
    utimbuf,
    Iutimbuf,
    timeval,
    Itimeval,
    timevalarr,
    Itimevalarr,
    timespec,
    linux_dirent64,
    Ilinux_dirent64,
    inotify_event,
    Iinotify_event,
};

export const isLE: boolean;
export const PATH_MAX: number;

export const NULL: number;
export const int8: IType;
export const uint8: IType;
export const int16: IType;
export const uint16: IType;
export const int32: IType;
export const uint32: IType;
export const int64: IType;
export const uint64: IType;
export type uint64 = [number, number];
export const size_t: IType;
export const time_t: IType;
export const pid_t: IType;
export const optval_t: IType;
export const pointer_t: IType;
export type pointer_t = uint64;
