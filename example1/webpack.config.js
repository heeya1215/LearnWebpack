var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      //use: ['style-loader', 'css-loader']
      use: ExtractTextPlugin.extract({
        // fallback은 이 플러그인이 실패했을 때 대안으로 style-loader가 작동함을 의미
        fallback: "style-loader",
        // use는 css-loader를 거친 후 extract-text-webpack-plugin으로 파일을 추출하겠다는 뜻
        use: "css-loader"
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
