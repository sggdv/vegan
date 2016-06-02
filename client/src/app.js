import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import request from 'request';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Client from './public/react/client-box';

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
		<script>var instance = ${data};</script>
		<script src="/react/client-all.react.js"></script>
	</body>
</html>`;
}

app.get('/:id', (req, res) => {
	const { id } = req.params;
	console.log(`id=${id}`);

	request({
		method: 'GET',
		url: 'http://127.0.0.1:3002/instances/' + id,
		json: true
	}, (err, apiRes, body) => {
		if (err) return res.status(500).send(err);
//		let dom = ReactDOMServer.renderToString(client(body));
		res.send(fullHtml(JSON.stringify(body)));
	});

});

app.post('/update', (req, res) => {
	let instance = req.body;
	instance.submitTime = new Date().getTime();

	const id = instance.id;
	delete instance.id;

	request({
		method: 'put',
		url: 'http://127.0.0.1:3002/instances/' + id,
		json: true,
		body: instance,
	}, (err, apiRes, body) => {
		if (err) console.log(err);

		res.json({});
	});

});

app.listen(3001, () => console.log ('done'));
