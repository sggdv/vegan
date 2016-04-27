import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import request from 'request';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Client from './public/javascripts/client.react';

let client = React.createFactory(Client);

let app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// HTML模版
function fullHtml(dom) {
	return `<!doctype html>
<html lang="zh-CN">
	<head>
		<link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body style="padding-top: 80px;">
		<div class="container">
			<div id="content">
				${dom}
			</div>
		</div>
	</body>
</html>`;
}

app.get('/', (req, res) => {
	request({
		method: 'GET',
		url: 'http://127.0.0.1:3002/templates/571702445e055f6e1c47d2c1',
		json: true
	}, (err, apiRes, body) => {
		let dom = ReactDOMServer.renderToString(client(body));
		res.send(fullHtml(dom));
	});
});

app.listen(3001);
