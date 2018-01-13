"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typebase_1 = require("../typebase");
var ipv4_1 = require("./ipv4");
// From http://beej.us/guide/bgnet/output/html/multipage/sockaddr_inman.html
//
//     struct sockaddr_in {
//         short            sin_family;   // e.g. AF_INET
//         unsigned short   sin_port;     // e.g. htons(3490)
//         struct in_addr   sin_addr;     // see struct in_addr, below
//         char             sin_zero[8];  // zero this if you want to
//     };
//     struct in_addr {
//         unsigned long s_addr;  // load with inet_aton()
//     };
//
var in_addr = typebase_1.Struct.define(4, [
    [0, ipv4_1.default, 's_addr'],
]);
exports.default = in_addr;
