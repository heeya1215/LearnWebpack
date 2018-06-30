var express = require('express');
var app = express();  // express를 호출하여 app에 저장
var path = require('path');

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
