module.exports = process.platform === 'darwin'
  ? require('./platforms/darwin/basetypes')
  : require('./platforms/linux/basetypes');
