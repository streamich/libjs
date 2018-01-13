"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var basetypes_1 = require("../basetypes");
// ## Time
//
//     struct utimbuf {
//         time_t actime;       /* access time */
//         time_t modtime;      /* modification time */
//     };
//
var utimbuf = typebase_1.Struct.define(16, [
    [0, basetypes_1.uint64, 'actime'],
    [8, basetypes_1.uint64, 'modtime'],
]);
exports.default = utimbuf;
