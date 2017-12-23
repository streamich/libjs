require('ts-node/register');

var libsys = require('libsys');
StaticBuffer = require('static-buffer').StaticBuffer;

process.syscall = libsys.syscall;
process.syscall64 = libsys.syscall64;
global.StaticBuffer = StaticBuffer;
