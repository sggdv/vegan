'use strict';

var express = require('express');
var bodyParser = require('body-parser');
//var templates = require('./router/templates');

var app = express();

app.use(bodyParser.json());
//app.use('/templates', templates);

var templates = [];

app.post('/templates', function (req, res) {
	templates.push(req.body);
	res.status(201).json(req.body);
});

app.get('/templates', function (req, res) {
	res.json(templates);
});

app.get('/templates/:id', function (req, res) {
	res.status(201).json({});
});

app.delete('/templates/:id', function (req, res) {
	res.json({});
});

app.get('/users', function (req, res) {
	res.json({ uid: 'abc123' });
});

app.listen(3002);