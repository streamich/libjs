"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var basetypes_1 = require("../basetypes");
var timeval = typebase_1.Struct.define(16, [
    [0, basetypes_1.uint64, 'tv_sec'],
    [8, basetypes_1.uint64, 'tv_nsec'],
]);
exports.default = timeval;
