import { AddressInfo } from "dgram";

export interface Loop {
    setTimeout(callback: () => void, delay?: number, ...args: unknown[]): unknown;
    setImmediate(callback: () => void, ...args: unknown[]): unknown;
    newTcpSocket(): LoopTcpSocket;
}

export interface LoopUdpSocket {
    open();
    bind(addr: string, flags: number);
    connect(addr: string);
    getPeerName(): object;
    getSocketName(): object;
    send(buf: Buffer);
    start();
    stop();
}

export interface LoopTcpSocket {
    open();
    nodelay(enable: number);
    keepalive(enable: number, delay: number);
    bind(addr: string, flags: number);
    getSocketName(): object;
    getPeerName(): object;
    connect(options: LoopTcpConnectOptions);
}

export interface LoopTcpConnectOptions {
    port: number;
    host?: string;
}