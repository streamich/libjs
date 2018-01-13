"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../../typebase");
// The C `NULL` pointer:
exports.NULL = 0;
// Basic types.
var buf = Buffer.prototype;
exports.int8 = typebase_1.Type.define(1, buf.readInt8, buf.writeInt8);
exports.uint8 = typebase_1.Type.define(1, buf.readUInt8, buf.readUInt8);
exports.int16 = typebase_1.Type.define(2, buf.readInt16LE, buf.writeInt16LE);
exports.uint16 = typebase_1.Type.define(2, buf.readUInt16LE, buf.writeUInt16LE);
exports.int32 = typebase_1.Type.define(4, buf.readInt32LE, buf.writeInt32LE);
exports.uint32 = typebase_1.Type.define(4, buf.readUInt32LE, buf.writeUInt32LE);
exports.int64 = typebase_1.Arr.define(exports.int32, 2);
exports.uint64 = typebase_1.Arr.define(exports.uint32, 2);
exports.size_t = exports.uint64;
exports.time_t = exports.uint64;
exports.pid_t = exports.uint32;
exports.optval_t = exports.int32;
exports.pointer_t = exports.uint64;
