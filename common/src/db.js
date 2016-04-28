import {MongoClient, ObjectID} from 'mongodb';
import {Pool} from 'generic-pool';

let pool = new Pool({
	name: 'mongodb',
	max: 10,
	idleTimeoutMillis: 60000,
	log: true,
	create(callback) { MongoClient.connect('mongodb://localhost:27017/vegan', callback); },
	destroy(client) { client.close();	}
});

class Dao {

	constructor(target) { this.target = target; }

	insertOne(doc, callback) {
		pool.acquire((err, db) => {
			if (err) return callback(err);
			let col = db.collection(this.target);
			col.insertOne(doc, (err, r) => {
				if (err) return callback(err);
				let rs = r.result.ok == 1 && r.result.n == 1 ? r.ops[0] : undefined;
				if (rs) {
					rs.id = rs._id.toString();
					delete rs._id;
				}
				callback(err, rs);
				pool.release(db);
			});
		});
	}

	findOne(id, callback) {
		pool.acquire((err, db) => {
			if (err) return callback(err);
			let col = db.collection(this.target);
			col.findOne({ _id: ObjectID(id) }, (err, doc) => {
				if (doc._id) {
					doc.id = doc._id.toString();
					delete doc._id;
				}
				callback(err, doc);
				pool.release(db);
			});
		});
	}

	findAll(callback) {
		pool.acquire((err, db) => {
			if (err) return callback(err);
			let col = db.collection(this.target);
			col.find().toArray((err, docs) => {
				callback(err, docs.map((doc) => {
					if (doc._id) {
						doc.id = doc._id.toString();
						delete doc._id;
					}
					return doc;
				}));
				pool.release(db);
			});
		});
	}

	updateOne(id, doc, callback) {
		console.log('updateOne');
		console.log(id);
		console.log(doc);
		pool.acquire((err, db) => {
			if (err) return callback(err);
			let col = db.collection(this.target);
			col.findOneAndUpdate({ _id: ObjectID(id) }, { $set: doc }, (err, r) => {
				if (err) return callback(err);
				let rs = r.ok == 1 ? r.value : undefined;
				if (rs._id) {
					rs.id = rs._id.toString();
					delete rs._id;
				}
				callback(err, rs);
				pool.release(db);
			});
		});
	}

	deleteOne(id, callback) {
		pool.acquire((err, db) => {
			if (err)
				return callback(err);
			let col = db.collection(this.target);
			col.findOneAndDelete({ _id: ObjectID(id) }, (err, r) => {
				if (err)
					return callback(err);
				let rs = r.ok == 1 ? r.value : undefined;
				if (rs._id) {
					doc.id = doc._id.toString();
					delete doc._id;
				}
				callback(err, rs);
				pool.release(db);
			});
		});
	}

}

let templates = new Dao('templates');

export {templates};
