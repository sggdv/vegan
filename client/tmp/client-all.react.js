'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _clientBox = require('./client-box');

var _clientBox2 = _interopRequireDefault(_clientBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateInstance = function updateInstance(template) {
	var data = instance;
	data.template = template;
	console.log('data');
	console.log(data);
	_jquery2.default.ajax({
		type: 'POST',
		url: '/update',
		data: data,
		dataType: 'json',
		success: function success(data) {
			console.log(data);
		},
		error: function error(xhr, stat, err) {
			console.log(err);
		}
	});
};

_reactDom2.default.render(_react2.default.createElement(_clientBox2.default, { template: instance.template, callbackParent: updateInstance }), document.getElementById('content'));