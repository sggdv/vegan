var express =  require('express');
var bodyParser = require('body-parser');
//var templates = require('./router/templates');

var app = express();

app.use(bodyParser.json());
//app.use('/templates', templates);

var templates = [];

app.post('/templates', (req, res) => {
	templates.push(req.body);
	res.status(201).json(req.body);
});

app.get('/templates', (req, res) => {
	res.json(templates);
});

app.get('/templates/:id', (req, res) => {
	res.status(201).json({});
});

app.delete('/templates/:id', (req, res) => {
	res.json({});
});

app.get('/users', (req, res) => {
	res.json({ uid: 'abc123' });
});

app.listen(3002);
