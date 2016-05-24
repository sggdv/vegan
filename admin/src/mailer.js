var nodemailer = require('nodemailer');

var default_to = '331599158@qq.com';

var conf = {
  service: '163',
  auth: {
    user: 'sggdv2015@163.com',
    pass: 'etpnxtlrevghccuj'
  }
};

var mailOptions = {
  from: 'sggdv2015@163.com'
};

var callback = function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info.response);
  }
};

module.exports = {
  send: function(opt) {
    var to = opt.to;
    var subject = opt.subject;
    var html = opt.html;

    mailOptions.to = to ? to : default_to;
    mailOptions.subject = subject;
    mailOptions.html = html;
    nodemailer.createTransport(conf).sendMail(mailOptions, callback);
  }
};