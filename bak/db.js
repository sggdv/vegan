var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var rs = {
  ObjectId: mongodb.ObjectId
};

MongoClient.connect('mongodb://127.0.0.1:27017/vegan', function (err, db) {
  if (err) return;

  rs.users = db.collection('users');
  rs.templates = db.collection('templates');
  rs.instances = db.collection('instances');
  rs.tasks = db.collection('tasks');
});

module.exports = rs;