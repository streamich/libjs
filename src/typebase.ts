// When less data provided than the C structs hold, the `.pack()` commad
// should still generate a `Buffer` of the kernel's C struct size, otherwise
// kernel read/overwrite some memory that does not belong to us ^^.
// Thus we define `Struct` fields with offset param, so that we can ignore
// the fields we don't need, and each data type has `.size` attribute
// that specifies its size in bytes, so even if we are not using some data
// from C structs, we still produce the correctly sized `Buffers`.

export type JSON = any;
export type PackFunction = (this: Buffer, data: JSON, offest: number) => void;
export type UnpackFunction = (this: Buffer, offest: number) => JSON;

export interface IType {
    size: number;
    unpack(buf:Buffer, offset?:number): any;
    pack(data: any, buf?: Buffer, offset?: number): void;
}

export class Type implements IType {
    static define(size: number, unpack: UnpackFunction, pack: PackFunction): Type {
        const new_type = new Type(size, unpack, pack);
        return new_type;
    }

    size = 1; // 1 byte
    unpackF: UnpackFunction;
    packF: PackFunction;

    constructor (size: number, unpack: UnpackFunction, pack: PackFunction) {
        this.size = size;
        this.unpackF = unpack;
        this.packF = pack;
    }

    unpack(buf: Buffer, offset: number = 0): JSON {
        return this.unpackF.call(buf, offset);
    }

    pack(data: JSON, buf?: Buffer, offset: number = 0) {
        if(!buf) buf = new Buffer(this.size);
        if(data instanceof Buffer) data.copy(buf, offset);
        else if(typeof data == 'object') data.toBuffer().copy(buf, offset);
        else this.packF.call(buf, data, offset);
        return buf;
    }
}

export class Arr {
    static define(type: IType, len: number): Arr {
        return new Arr(type, len, type.size * len);
    }

    type: IType;
    len: number;
    size: number;

    constructor (type: IType, len: number, size: number) {
        this.type = type;
        this.len = len;
        this.size = size;
    }

    unpack(buf: Buffer, offset: number = 0): JSON {
        var arr = [], off;
        for(var i = 0; i < this.len; i++) {
            off = offset + (i * this.type.size);
            arr.push(this.type.unpack(buf, off));
        }
        return arr;
    }

    pack(data: JSON, buf?: Buffer, offset: number = 0) {
        if(!buf) buf = new Buffer(this.size);
        if(data) {
            var off;
            for(var i = 0; (i < this.len) && (i < data.length); i++) {
                off = offset + (i * this.type.size);
                this.type.pack(data[i], buf, off);
            }
        }
        return buf;
    }
}

export type StructFieldOffset = number;
export type StructFieldType = IType;
export type StructFieldName = string;
export type StructEntry = [StructFieldOffset, StructFieldType, StructFieldName];
export type StructDefinition = StructEntry[];

export class Struct implements IType {
    static define(size: number, defs: StructDefinition) {
        return new Struct(size, defs);
    }

    defs: StructDefinition = [];
    size = 0; // Full size, not just the size sum of elements in definitions.

    constructor (size: number, defs: StructDefinition) {
        this.size = size;
        this.defs = defs;
    }

    unpack(buf: Buffer, offset: number = 0): JSON {
        var result: JSON = {};
        for (var field of this.defs) {
            var [off, type, name] = field;
            result[name] = type.unpack(buf, offset + off);
        }
        return result;
    }

    pack(data: JSON, buf?: Buffer, offset: number = 0) {
        if(!buf) buf = new Buffer(this.size);
        for (var field of this.defs) {
            var [off, type, name] = field;
            type.pack(data[name], buf, offset + off);
        }
        return buf;
    }
}
