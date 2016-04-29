import express from 'express';
import {templatesDao, instancesDao} from '../db';

class Router {
	constructor(dao) {
		let router = express.Router();

		router.post('/', (req, res) => {
			let body = req.body;
			dao.insertOne(body, (err, doc) => {
				if (err) return res.status(500).json({err});
				res.status(201).json(doc);
			});
		});

		router.get('/', (req, res) => {
			dao.findAll((err, docs) => {
				res.json(docs);	
			});
		});

		router.get('/:id', (req, res) => {
			dao.findOne(req.params.id, (err, doc) => {
				if (err) return res.status(404).json({err}); 
				res.json(doc);
			});
		});

		router.put('/:id', (req, res) => {
			dao.updateOne(req.params.id, req.body, (err, doc) => {
				if (err) return res.status(500).json({err});
				res.json(doc);
			});
		});

		router.delete('/:id', (req, res) => {
			dao.deleteOne(req.params.id, (err, doc) => {
				if (err) return res.status(500).json({err});
				res.json(template);
			});
		});

		return router;
	}
}

let templatesRouter = new Router(templatesDao);
let instancesRouter = new Router(instancesDao);

export {templatesRouter, instancesRouter};
