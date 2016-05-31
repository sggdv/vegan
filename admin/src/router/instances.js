import express from 'express';
import request from 'request';
import mailer from '../mailer';

let router = express.Router();
let API_BASE_URL = 'http://127.0.0.1:3002/instances';

router.post('/', (req, res) => {
  let instance = req.body;
	instance.userid = req.cookies.userid;
	request({
		method: 'POST',
		url: API_BASE_URL,
		json: true,
		body: instance
	}, (err, apiRes, body) => {
		if (!err && apiRes.statusCode == 201) {
			if (body.email) {
				// TODO 发送邮件
				console.log(body.email);

				const to = body.email;
				const subject = '很高兴认识你';
				const html = '<h3>我叫Kim, 很高兴认识你！这是我的常用邮箱，有事可以随时向我发送邮件。</h3>';

				mailer({to, subject, html});
			}
			res.status(201).json(body);
		} else {
			res.status(500).json({err, statusCode: apiRes.statusCode});
		}
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
