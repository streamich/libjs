"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var ipv4 = typebase_1.Type.define(4, function (offset) {
    if (offset === void 0) { offset = 0; }
    var buf = this;
    var socket = require('../../socket');
    var octets = socket.Ipv4.type.unpack(buf, offset);
    return new socket.Ipv4(octets);
}, function (data, offset) {
    if (offset === void 0) { offset = 0; }
    var buf = this;
    data.toBuffer().copy(buf, offset);
});
exports.default = ipv4;
