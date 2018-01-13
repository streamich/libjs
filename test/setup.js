require('ts-node/register');
require('libsys/shim');

StaticBuffer = require('static-buffer').StaticBuffer;
global.StaticBuffer = StaticBuffer;
