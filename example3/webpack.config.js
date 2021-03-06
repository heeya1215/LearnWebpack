var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // #2 - Using alias
  // resolve: {
  //   alias: {
  //     AliasVendor: path.resolve(__dirname, './app/vendor/')
  //   }
  // }

  // #3 - Provide Plugin
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ]
};
