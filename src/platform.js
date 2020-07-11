module.exports = process.platform === 'darwin'
  ? require('./platforms/darwin-x86_64/index')
  : require('./platforms/linux-x86_64/index');
