var express = require('express');
var app = express();  // express를 호출하여 app에 저장
var path = require('path');

// #1
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var compiler = webpack(webpackConfig);

// #2
app.use(webpackDevMiddleware(compiler, {
  // webpack.config.js의 publicPath를 활용한다고 지정,
  publicPath: webpackConfig.output.publicPath,
  // log의 색상을 지정
  stats: {colors: true},
  // 파일을 변경하였을때 즉시 적용되지 않고, Client의 요청을 하였을때 번들링됨
  lazy: true
}));

app.use(express.static(__dirname));

// view engine setup
// __dirname : root folder
app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');  // EJS : HTML 템플릿 엔진 도구
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.send('index');
});

app.listen(3000);
console.log("Server running on port 3000");
