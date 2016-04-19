import {templates} from '../db';
import express from 'express';

var router = express.Router();

// 暂时不考虑分页的情况
router.post('/', (req, res) => {
	var template = req.body;
	templates.insertOne(template, (err) => {
		if (!err) 
			res.status(201).json(template);
		else
			res.status(500).json({err});
	});
});

router.get('/', (req, res) => {
	res.json(templates.findAll());
});

router.get('/:id', (req, res) => {
	templates.findOne(req.params.id, (err, template) => {
		if (!err) 
			res.json({template});
		else
			res.status(404).json({err});
	});
});

router.put('/:id', (req, res) => {
	templates.updateOne(req.params.id, res.body, (err, template) => {
		if (!err)
			res.json({template});
		else
			res.status(500).json({err});
	});
});

router.delete('/:id', (req, res) => {
	template.deleteOne(req.params.id, (err, template) => {
		if (!err) 
			res.json({template});
		else
			res.status(500).json({err});
	});
});

export default router;
