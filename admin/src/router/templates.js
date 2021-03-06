import express from 'express';
import request from 'request';

let router = express.Router();
let API_BASE_URL = 'http://127.0.0.1:3002/templates';

router.post('/', (req, res) => {
  let template = req.body;
	template.userid = req.cookies.userid;
	request({
		method: 'POST',
		url: API_BASE_URL,
		json: true,
		body: template
	}, (err, apiRes, body) => {
		if (!err && apiRes.statusCode == 201)
			res.status(201).json(body);
		else
			res.status(500).json({err, statusCode: apiRes.statusCode});
	});
});

router.get('/', (req, res) => {
	request({
		method: 'GET',
		url: API_BASE_URL,
		json: true
	}, (err, apiRes, body) => {
		if (err) return res.status(500).json({err});
		res.json(body);
	});
});

export default router;
