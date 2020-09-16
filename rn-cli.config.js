var path = require('path');
var config = {
  watchFolders: [path.resolve(__dirname, '../')],
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};

module.exports = config;
