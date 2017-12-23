// When less data provided than the C structs hold, the `.pack()` commad
// should still generate a `Buffer` of the kernel's C struct size, otherwise
// kernel read/overwrite some memory that does not belong to us ^^.
// Thus we define `Struct` fields with offset param, so that we can ignore
// the fields we don't need, and each data type has `.size` attribute
// that specifies its size in bytes, so even if we are not using some data
// from C structs, we still produce the correctly sized `Buffers`.

export interface IType {
    size: number;
    unpack(buf:Buffer, offset?:number):any;
    pack(data: any, buf?: Buffer, offset?);
}

export class Type implements IType {
    static define(size, unpack, pack): Type {
        var new_type = new Type;
        new_type.size = size;
        new_type.unpackF = unpack;
        new_type.packF = pack;
        return new_type;
    }

    size = 1; // 1 byte
    unpackF: (offset: number) => void;
    packF: (data: any, offset: number) => void;

    unpack(buf: Buffer, offset: number = 0): any {
        return this.unpackF.call(buf, offset);
    }

    pack(data: any, buf?: Buffer, offset: number = 0) {
        if(!buf) buf = new Buffer(this.size);
        if(data instanceof Buffer) data.copy(buf, offset);
        else if(typeof data == 'object') (data as any).toBuffer().copy(buf, offset);
        else this.packF.call(buf, data, offset);
        return buf;
    }
}

export class Arr {
    static define(type: IType, len: number): Arr {
        var new_arr = new Arr;
        new_arr.len = len;
        new_arr.type = type;
        new_arr.size = type.size * len;
        return new_arr;
    }

    type: IType;

    len: number;

    size: number;

    unpack(buf: Buffer, offset: number = 0): any {
        var arr = [], off;
        for(var i = 0; i < this.len; i++) {
            off = offset + (i * this.type.size);
            arr.push(this.type.unpack(buf, off));
        }
        return arr;
    }

    pack(data: any, buf?: Buffer, offset: number = 0) {
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

export class Struct implements IType {
    static define(size, defs) {
        var new_struct = new Struct;
        new_struct.size = size;
        new_struct.defs = defs;
        return new_struct;
    }

    defs: any = [];
    size = 0; // Full size, not just the size sum of elements in definitions.

    unpack(buf: Buffer, offset: number = 0):any {
        var result = {};
        for (var field of this.defs) {
            var [off, type, name] = field;
            result[name] = type.unpack(buf, offset + off);
        }
        return result;
    }

    pack(data: any, buf?: Buffer, offset: number = 0) {
        if(!buf) buf = new Buffer(this.size);
        for (var field of this.defs) {
            var [off, type, name] = field;
            type.pack(data[name], buf, offset + off);
        }
        return buf;
    }
}
