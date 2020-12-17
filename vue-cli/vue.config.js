const path = require('path');

module.exports = {
  'runtimeCompiler': true,
  'transpileDependencies': [
    'vuetify'
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .include
      .add(path.resolve(__dirname))
      .add(path.resolve(__dirname, '../components/lib'));

    config.plugins.delete('prefetch');
    config.plugins.delete('preload');

    // folder aliasing is different between outer & inner projects
    // relative paths should be used instead and aliasing should be avoided
    config.resolve.alias.delete('@');
  }
};
