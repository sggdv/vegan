var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var mongodb      = require('mongodb');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cookieParser());

mongodb.MongoClient.connect('mongodb://127.0.0.1:27017/vegan', function (err, db) {
  if (err) {
    console.log(err);
    return;
  }
  app.db = {
    ObjectId: mongodb.ObjectId,
    users: db.collection('users'),
    templates: db.collection('templates'),
    instances: db.collection('instances'),
    tasks: db.collection('tasks')
  };
  app.listen(3000);
});

//用户登陆，将ObjectId存放在cookies中。
app.post('/signin', function (req, res) {
  var query = {
    name : req.body.username,
    pwd : req.body.pwd
  };

  var callback = function (err, doc) {
    if (err || !doc) {
      console.log(err);
      return res.json({ success: false});
    }
    console.log(doc);
    res.cookie('uid', doc._id);
    res.json({ success: true });
  };

  app.db.users.findOne(query, callback);
});

// var favicon = require('serve-favicon');

// var session = require('express-session');

// var admin = require('./routes/admin');
// var client = require('./routes/client');

// var templates = require('./routes/templates');
// var instances = require('./routes/instances');
// var tasks = require('./routes/tasks');



// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(favicon(__dirname + '/public/favicon.ico'));

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(session({ 
//   secret: 'keyboard cat', 
//   cookie: { maxAge: 3600000 },
//   resave: false,
//   saveUninitialized: true
// }));

// 登陆拦截

// app.use(function (req, res, next) {
//   var url = req.originalUrl;
//   if (url != '/admin/signin' && !req.session.userid) {
//     return res.json({ opt: 'signin' });
//   }
//   next();
// });

// app.use('/admin', admin);
// app.use('/client', client);

// app.use('/templates', templates);
// app.use('/instances', instances);
// app.use('/tasks', tasks);

// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// if (app.get('env') === 'development') {
//   app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// app.use(function (err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

// module.exports = app;
