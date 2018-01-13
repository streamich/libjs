"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var basetypes_1 = require("../basetypes");
//     typedef union epoll_data {
//         void    *ptr;
//         int      fd;
//         uint32_t u32;
//         uint64_t u64;
//     } epoll_data_t;
//
//     struct epoll_event {
//         uint32_t     events;    /* Epoll events */
//         epoll_data_t data;      /* User data variable */
//     };
//
var epoll_event = typebase_1.Struct.define(4 + 8, [
    [0, basetypes_1.uint32, 'events'],
    [4, basetypes_1.uint64, 'data'],
]);
exports.default = epoll_event;
