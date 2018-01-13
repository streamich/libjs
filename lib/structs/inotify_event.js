"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var basetypes_1 = require("../basetypes");
// Stucture that `inotify` returns when reading from one of its descriptors, in `libc`:
//
//     struct inotify_event {
//         int      wd;       /* Watch descriptor */
//         uint32_t mask;     /* Mask describing event */
//         uint32_t cookie;   /* Unique cookie associating related events (for rename(2)) */
//         uint32_t len;      /* Size of name field */
//         char     name[];   /* Optional null-terminated name */
//     };
//
var inotify_event = typebase_1.Struct.define(16, [
    [0, basetypes_1.int32, 'wd'],
    [4, basetypes_1.uint32, 'mask'],
    [8, basetypes_1.uint32, 'cookie'],
    [12, basetypes_1.uint32, 'len'],
]);
exports.default = inotify_event;
