"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var in_addr_1 = require("./in_addr");
var basetypes_1 = require("../basetypes");
var sockaddr_in = typebase_1.Struct.define(16, [
    [0, basetypes_1.int16, 'sin_family'],
    [2, basetypes_1.uint16, 'sin_port'],
    [4, in_addr_1.default, 'sin_addr'],
    [8, typebase_1.Arr.define(basetypes_1.int8, 8), 'sin_zero'],
]);
exports.default = sockaddr_in;
