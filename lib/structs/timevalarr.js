"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var timeval_1 = require("./timeval");
var timevalarr = typebase_1.Arr.define(timeval_1.default, 2);
exports.default = timevalarr;
