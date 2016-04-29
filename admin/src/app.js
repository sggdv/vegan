import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import request from 'request';
import templates from './router/templates';

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
    body: { username, pwd}
  }, (err, apiRes, body) => {
    if (!err && apiRes.statusCode == 200) {
      res.cookie('uid', 'abc123');
      res.json();
    } else {
      res.status(404).json();
    }
  });
});

app.use('/templates', templates);

app.listen(3000, () => {
	console.log('done');
});
