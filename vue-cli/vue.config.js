const
  path = require('path'),
  StyleLintPlugin = require('stylelint-webpack-plugin');

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

    config.plugin('stylelint').use(new StyleLintPlugin({
      files: [
        'src/**/*.{vue,scss}',
        '../components/lib/**/*.{vue,scss}'
      ]
    }));

    config.plugins.delete('prefetch');
    config.plugins.delete('preload');

    // folder aliasing is different between outer & inner projects
    // relative paths should be used instead and aliasing should be avoided
    config.resolve.alias.delete('@');

    config.resolve.alias.set('@components-lib', path.resolve(__dirname, './src/components/lib/'));
  }
};
