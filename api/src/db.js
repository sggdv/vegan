import {MongoClient, ObjectID} from 'mongodb';
import {Pool} from 'generic-pool';

var pool = new Pool({
	name: 'mongodb',
	max: 10,
	idleTimeoutMillis: 30000,
	log: true,
	create(callback) {
		MongoClient.connect('mongodb://localhost:27017/vegan', (err, db) => {
			callback(err, db);
		});
	},
	destroy(client) {
		client.close();	
	}
});

class Dao {

	constructor(target) {
		this.target = target;
	}

	insertOne(doc, callback) {
		pool.acquire((err, db) => {
			if (err) 
				return console.log(err);
			var col = db.collection(this.target);
			col.insertOne(doc, (err, r) => {
				if (err) 
					console.log(err);
				var rs = r.result.ok == 1 && r.result.n == 1 ? r.ops[0] : undefined;
				if (rs) {
					rs.id = rs._id.toString();
					delete rs._id;
				}
				callback(err, rs);
			});
		});
	}

	findOne(id, callback) {
		pool.acquire((err, db) => {
			if (err) 
				return console.log(err);
			var collection = db.collection(this.target);
			collection.findOne({ _id: ObjectID(id) }, (err, doc) => {
				if (doc._id) {
					doc.id = doc._id.toString();
					delete doc._id;
				}
				callback(err, doc);
			});
		});
	}

	findAll(callback) {
		pool.acquire((err, db) => {
			if (err)
				return console.log(err);
			var collection = db.collection(this.target);
			collection.find().toArray((err, docs) => {
				callback(err, docs);
			});
		});
	}

	updateOne(id, doc, callback) {
		pool.acquire((err, db) => {
			if (err) 
				return console.log(err);
			var col = db.collection(this.target);
			col.findOneAndUpdate({ _id: ObjectID(id) }, { $set: update }, (err, r) => {
				if (err)
					return console.log(err);
				var rs = r.ok == 1 ? r.value : undefined;
				callback(err, rs);
			});
		});
	}

	deleteOne(id, callback) {
		pool.acquire((err, db) => {
			if (err)
				return console.log(err);
			var col = db.collection(this.target);
			col.findOneAndDelete({ _id: ObjectID(id) }, (err, r) => {
				if (err)
					return console.log(err);
				var rs = r.ok == 1 ? r.value : undefined;
				callback(err, rs);
			});
		});
	}

}

var templates = new Dao('templates');

export {templates};
