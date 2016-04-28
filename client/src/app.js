import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import request from 'request';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Client from './public/react/client.react';

let client = React.createFactory(Client);

let app = express();

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// HTML模版
function fullHtml(data) {
	return `<!doctype html>
<html lang="zh-CN">
	<head>
		<link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
	</head>
	<body style="padding-top: 80px;">
		<div class="container">
			<div id="content"></div>
		</div>
		<script>var template = ${data};</script>
		<script src="/react/client-all.react.js"></script>
	</body>
</html>`;
}

app.get('/:id', (req, res) => {
	request({
		method: 'GET',
		url: 'http://127.0.0.1:3002/templates/571702445e055f6e1c47d2c1',
		json: true
	}, (err, apiRes, body) => {
		if (err) return res.status(500).send(err);
//		let dom = ReactDOMServer.renderToString(client(body));
		res.send(fullHtml(JSON.stringify(body)));
	});
});

app.post('/update', (req, res) => {
	let template = req.body;
	let id = template.id;
	delete template.id;
	console.log(id);
	console.log(template);
	request({
		method: 'put',
		url: 'http://127.0.0.1:3002/templates/' + id,
		json: true,
		body: template,
	}, (err, apiRes, body) => {
		console.log(err);
		res.send('ok');
	});
});

app.listen(3001, () => { console.log ('done') });
