'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var _ref$to = _ref.to;
  var to = _ref$to === undefined ? TO_DEFAULT : _ref$to;
  var subject = _ref.subject;
  var html = _ref.html;
  var callback = arguments.length <= 1 || arguments[1] === undefined ? printResult : arguments[1];

  _nodemailer2.default.createTransport(CONF).sendMail({ to: to, subject: subject, html: html, from: FROM_DEFAULT }, callback);
};

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TO_DEFAULT = '331599158@qq.com';
var FROM_DEFAULT = 'sggdv2015@163.com';
var CONF = {
  service: '163',
  auth: {
    user: 'sggdv2015@163.com',
    pass: 'etpnxtlrevghccuj'
  }
};

function printResult(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info.response);
  }
}