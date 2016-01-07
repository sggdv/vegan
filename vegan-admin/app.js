var express = require('express');
var path    = require('path');
var logger  = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);


// var favicon = require('serve-favicon');

// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var session = require('express-session');

// var admin = require('./routes/admin');
// var client = require('./routes/client');

// var templates = require('./routes/templates');
// var instances = require('./routes/instances');
// var tasks = require('./routes/tasks');



// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(favicon(__dirname + '/public/favicon.ico'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

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