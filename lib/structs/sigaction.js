"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var basetypes_1 = require("../basetypes");
var sigaction = typebase_1.Struct.define(16, [
    [0, basetypes_1.uint64, 'handler'],
    [8, basetypes_1.int32, 'mask'],
    [12, basetypes_1.int32, 'flags'],
]);
exports.default = sigaction;
