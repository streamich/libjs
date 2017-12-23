// # x86_64 Linux
import SYS from './SYS';
import FLAG from '../../consts/FLAG';
import PROT from '../../consts/PROT';
import MAP from '../../consts/MAP';
import S from '../../consts/S';
import AMODE from '../../consts/AMODE';
import SEEK from '../../consts/SEEK';
import PF from '../../consts/PF';
import AF from '../../consts/AF';
import SOCK from '../../consts/SOCK';
import IP from '../../consts/IP';
import MCAST from '../../consts/MCAST';
import SOL from '../../consts/SOL';
import SO from '../../consts/SO';
import IPV6 from '../../consts/IPV6';
import IPPROTO from '../../consts/IPPROTO';
import IPPORT from '../../consts/IPPORT';
import ERROR from '../../consts/ERROR';
import MSG from '../../consts/MSG';
import SHUT from '../../consts/SHUT';
import EPOLL_EVENTS from '../../consts/EPOLL_EVENTS';
import EPOLL from '../../consts/EPOLL';
import EPOLL_CTL from '../../consts/EPOLL_CTL';
import FCNTL from '../../consts/FCNTL';
import IPC from '../../consts/IPC';
import SHM from '../../consts/SHM';
import FD from '../../consts/FD';
import DT from '../../consts/DT';
import IN from '../../consts/IN';
import {NULL, int8, uint8, int16, uint16, int32, uint32, int64, uint64,
        size_t, optval_t, pid_t, pointer_t, time_t} from './basetypes';
import ipv4 from '../../structs/ipv4';
import stat, {Istat} from '../../structs/stat';
import in_addr, {Iin_addr} from '../../structs/in_addr';
import sockaddr_in, {Isockaddr_in} from '../../structs/sockaddr_in';
import sockaddr, {Isockaddr} from '../../structs/sockaddr';
import epoll_event, {Iepoll_event} from '../../structs/epoll_event';
import ipc_perm, {Iipc_perm} from '../../structs/ipc_perm';
import shmid_ds, {Ishmid_ds} from '../../structs/shmid_ds';
import utimbuf, {Iutimbuf} from '../../structs/utimbuf';
import timeval, {Itimeval} from '../../structs/timeval';
import timevalarr, {Itimevalarr} from '../../structs/timevalarr';
import timespec from '../../structs/timespec';
import linux_dirent64, {Ilinux_dirent64} from '../../structs/linux_dirent64';
import inotify_event, {Iinotify_event} from '../../structs/inotify_event';

// Maximal file path string length;
export const PATH_MAX = 4096;

// Is little-endian.
export const isLE = true;

const timespecarr = timevalarr;
interface Itimespec extends Itimeval {}
type Itimespecarr = [Itimespec, Itimespec];

export {
    SYS,
    FLAG,
    PROT,
    MAP,
    S,
    AMODE,
    SEEK,
    PF,
    AF,
    SOCK,
    IP,
    MCAST,
    SOL,
    SO,
    IPV6,
    IPPROTO,
    IPPORT,
    ERROR,
    MSG,
    SHUT,
    EPOLL_EVENTS,
    EPOLL,
    EPOLL_CTL,
    FCNTL,
    IPC,
    SHM,
    FD,
    DT,
    IN,

    NULL, int8, uint8, int16, uint16, int32, uint32, int64, uint64,
    size_t, optval_t, pid_t, pointer_t, time_t,

    ipv4,
    stat,
    Istat,
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
    timespecarr,
    Itimespecarr,
    linux_dirent64,
    Ilinux_dirent64,
    inotify_event,
    Iinotify_event,
};
