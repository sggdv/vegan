'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.templates = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongodb = require('mongodb');

var _genericPool = require('generic-pool');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pool = new _genericPool.Pool({
	name: 'mongodb',
	max: 10,
	idleTimeoutMillis: 60000,
	log: true,
	create: function create(callback) {
		_mongodb.MongoClient.connect('mongodb://localhost:27017/vegan', callback);
	},
	destroy: function destroy(client) {
		client.close();
	}
});

var Dao = function () {
	function Dao(target) {
		_classCallCheck(this, Dao);

		this.target = target;
	}

	_createClass(Dao, [{
		key: 'insertOne',
		value: function insertOne(doc, callback) {
			var _this = this;

			pool.acquire(function (err, db) {
				if (err) return callback(err);
				var col = db.collection(_this.target);
				col.insertOne(doc, function (err, r) {
					if (err) return callback(err);
					var rs = r.result.ok == 1 && r.result.n == 1 ? r.ops[0] : undefined;
					if (rs) {
						rs.id = rs._id.toString();
						delete rs._id;
					}
					callback(err, rs);
					pool.release(db);
				});
			});
		}
	}, {
		key: 'findOne',
		value: function findOne(id, callback) {
			var _this2 = this;

			pool.acquire(function (err, db) {
				if (err) return callback(err);
				var col = db.collection(_this2.target);
				col.findOne({ _id: (0, _mongodb.ObjectID)(id) }, function (err, doc) {
					if (doc._id) {
						doc.id = doc._id.toString();
						delete doc._id;
					}
					callback(err, doc);
					pool.release(db);
				});
			});
		}
	}, {
		key: 'findAll',
		value: function findAll(callback) {
			var _this3 = this;

			pool.acquire(function (err, db) {
				if (err) return callback(err);
				var col = db.collection(_this3.target);
				col.find().toArray(function (err, docs) {
					callback(err, docs.map(function (doc) {
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
	}, {
		key: 'updateOne',
		value: function updateOne(id, doc, callback) {
			var _this4 = this;

			console.log('updateOne');
			console.log(id);
			console.log(doc);
			pool.acquire(function (err, db) {
				if (err) return callback(err);
				var col = db.collection(_this4.target);
				col.findOneAndUpdate({ _id: (0, _mongodb.ObjectID)(id) }, { $set: doc }, function (err, r) {
					if (err) return callback(err);
					var rs = r.ok == 1 ? r.value : undefined;
					if (rs._id) {
						rs.id = rs._id.toString();
						delete rs._id;
					}
					callback(err, rs);
					pool.release(db);
				});
			});
		}
	}, {
		key: 'deleteOne',
		value: function deleteOne(id, callback) {
			var _this5 = this;

			pool.acquire(function (err, db) {
				if (err) return callback(err);
				var col = db.collection(_this5.target);
				col.findOneAndDelete({ _id: (0, _mongodb.ObjectID)(id) }, function (err, r) {
					if (err) return callback(err);
					var rs = r.ok == 1 ? r.value : undefined;
					if (rs._id) {
						doc.id = doc._id.toString();
						delete doc._id;
					}
					callback(err, rs);
					pool.release(db);
				});
			});
		}
	}]);

	return Dao;
}();

var templates = new Dao('templates');

exports.templates = templates;