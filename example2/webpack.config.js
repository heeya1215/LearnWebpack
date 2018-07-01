var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    vendor: [
      'moment',
      'lodash'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
        chunks: "initial",
        name: "vendor",
        enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    }
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: './dist/'
    }),
    // htmlWebpackPlugin을 쓰면 html 파일 복사 및 js, css inject를 할 수 있다.
    // 물론 minify도 가능하다.
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}
