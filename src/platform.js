module.exports = process.platform === 'darwin'
  ? require('./platforms/darwin/index')
  : require('./platforms/linux/index');
