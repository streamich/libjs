"use strict";
// When less data provided than the C structs hold, the `.pack()` commad
// should still generate a `Buffer` of the kernel's C struct size, otherwise
// kernel read/overwrite some memory that does not belong to us ^^.
// Thus we define `Struct` fields with offset param, so that we can ignore
// the fields we don't need, and each data type has `.size` attribute
// that specifies its size in bytes, so even if we are not using some data
// from C structs, we still produce the correctly sized `Buffers`.
Object.defineProperty(exports, "__esModule", { value: true });
var Type = /** @class */ (function () {
    function Type() {
        this.size = 1; // 1 byte
    }
    Type.define = function (size, unpack, pack) {
        var new_type = new Type;
        new_type.size = size;
        new_type.unpackF = unpack;
        new_type.packF = pack;
        return new_type;
    };
    Type.prototype.unpack = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        return this.unpackF.call(buf, offset);
    };
    Type.prototype.pack = function (data, buf, offset) {
        if (offset === void 0) { offset = 0; }
        if (!buf)
            buf = new Buffer(this.size);
        if (data instanceof Buffer)
            data.copy(buf, offset);
        else if (typeof data == 'object')
            data.toBuffer().copy(buf, offset);
        else
            this.packF.call(buf, data, offset);
        return buf;
    };
    return Type;
}());
exports.Type = Type;
var Arr = /** @class */ (function () {
    function Arr() {
    }
    Arr.define = function (type, len) {
        var new_arr = new Arr;
        new_arr.len = len;
        new_arr.type = type;
        new_arr.size = type.size * len;
        return new_arr;
    };
    Arr.prototype.unpack = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        var arr = [], off;
        for (var i = 0; i < this.len; i++) {
            off = offset + (i * this.type.size);
            arr.push(this.type.unpack(buf, off));
        }
        return arr;
    };
    Arr.prototype.pack = function (data, buf, offset) {
        if (offset === void 0) { offset = 0; }
        if (!buf)
            buf = new Buffer(this.size);
        if (data) {
            var off;
            for (var i = 0; (i < this.len) && (i < data.length); i++) {
                off = offset + (i * this.type.size);
                this.type.pack(data[i], buf, off);
            }
        }
        return buf;
    };
    return Arr;
}());
exports.Arr = Arr;
var Struct = /** @class */ (function () {
    function Struct() {
        this.defs = [];
        this.size = 0; // Full size, not just the size sum of elements in definitions.
    }
    Struct.define = function (size, defs) {
        var new_struct = new Struct;
        new_struct.size = size;
        new_struct.defs = defs;
        return new_struct;
    };
    Struct.prototype.unpack = function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        var result = {};
        for (var _i = 0, _a = this.defs; _i < _a.length; _i++) {
            var field = _a[_i];
            var off = field[0], type = field[1], name = field[2];
            result[name] = type.unpack(buf, offset + off);
        }
        return result;
    };
    Struct.prototype.pack = function (data, buf, offset) {
        if (offset === void 0) { offset = 0; }
        if (!buf)
            buf = new Buffer(this.size);
        for (var _i = 0, _a = this.defs; _i < _a.length; _i++) {
            var field = _a[_i];
            var off = field[0], type = field[1], name = field[2];
            type.pack(data[name], buf, offset + off);
        }
        return buf;
    };
    return Struct;
}());
exports.Struct = Struct;
