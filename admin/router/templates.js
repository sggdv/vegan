// template 的 RESTful API 实现
var express = require('express');
var request = require('request');
var router = express.Router();

router.post('/', (req, res) => {
  var template = req.body;
	console.log(template);
	request({
		method: 'POST',
		url: 'http://127.0.0.1:3002/templates',
		json: true,
		body: template
	}, (err, apiRes, body) => {
		if (!err && apiRes.statusCode == 201) {
			res.status(201).json({});
		} else {
			res.json({});
		}
	});
});

module.exports = router;
