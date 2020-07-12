import {Type, Arr} from '../../typebase';

export const NULL = 0;

const buf = Buffer.prototype;

export const int8    = Type.define(1, buf.readInt8,       buf.writeInt8);
export const uint8   = Type.define(1, buf.readUInt8,      buf.writeUInt8);

export const int16   = Type.define(2, buf.readInt16LE,    buf.writeInt16LE);
export const uint16  = Type.define(2, buf.readUInt16LE,   buf.writeUInt16LE);

export const int32   = Type.define(4, buf.readInt32LE,    buf.writeInt32LE);
export const uint32  = Type.define(4, buf.readUInt32LE,   buf.writeUInt32LE);

export const int64   = Arr.define(int32, 2);
export const uint64  = Arr.define(uint32, 2);

export type uint64 = [number, number];
