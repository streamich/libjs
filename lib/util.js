"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = require('fast-extend');
exports.noop = function () { };
function parseStruct(buf, definition) {
    var result = {};
    for (var prop in definition) {
        var _a = definition[prop], offset = _a[0], method = _a[1];
        result[prop] = method.call(buf, offset);
    }
    return result;
}
exports.parseStruct = parseStruct;
