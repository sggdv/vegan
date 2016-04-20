// template 的 RESTful API 实现
import express from 'express';
import request from 'request';

var router = express.Router();
var API_BASE_URL = 'http://127.0.0.1:3002/templates';

router.post('/', (req, res) => {
  var template = req.body;
	request({
		method: 'POST',
		url: API_BASE_URL,
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

export default router;
