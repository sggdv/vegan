// template 的 RESTful API 实现
import express from 'express';
import request from 'request';

let router = express.Router();
let API_BASE_URL = 'http://127.0.0.1:3002/templates';

router.post('/', (req, res) => {
  let template = req.body;
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

router.get('/', (req, res) => {
	request({
		method: 'GET',
		url: API_BASE_URL,
		json: true
	}, (err, apiRes, body) => {
		res.json(body);
	});
});

export default router;
