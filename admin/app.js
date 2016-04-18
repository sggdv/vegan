var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var request = require('request');
var templates = require('./router/templates');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signin', (req, res) => {
  var username = req.body.username;
  var pwd = req.body.pwd;
  // 查询User, 设置cookie。
  request({
    method: 'GET',
    url: 'http://127.0.0.1:3002/users',
    json: true,
    body: {
      username: username,
      pwd: pwd
    }
  }, (err, res, body) => {
    if (!err && res.statusCode == 200) {
      res.cookie('uid', 'abc123');
      res.json();
    } else {
      res.status(404).json();
    }
  });
});

app.use('/templates', templates);

app.listen(3000);
