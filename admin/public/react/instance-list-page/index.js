'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InstanceListPage = function (_Component) {
	_inherits(InstanceListPage, _Component);

	function InstanceListPage(props) {
		_classCallCheck(this, InstanceListPage);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InstanceListPage).call(this, props));

		_this.state = { instances: [] };
		_jquery2.default.ajax({
			type: 'GET',
			url: '/instances',
			dataType: 'json',
			cache: false,
			success: function (instances) {
				this.state = { instances: instances };
			}.bind(_this),
			error: function (xhr, stat, err) {
				console.error('/instances', stat, err.toString);
			}.bind(_this)
		});
		return _this;
	}

	_createClass(InstanceListPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_operation2.default, null),
				_react2.default.createElement(_list2.default, { instances: this.state.instances })
			);
		}
	}]);

	return InstanceListPage;
}(_react.Component);

exports.default = InstanceListPage;