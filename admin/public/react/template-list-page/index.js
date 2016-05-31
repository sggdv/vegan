'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// template列表页面

var TemplateListBox = function (_Component) {
	_inherits(TemplateListBox, _Component);

	function TemplateListBox(props) {
		_classCallCheck(this, TemplateListBox);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateListBox).call(this, props));

		_this.state = { templates: [] };
		_this.componentDidMount = _this.componentDidMount.bind(_this);
		return _this;
	}

	_createClass(TemplateListBox, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_jquery2.default.ajax({
				type: 'GET',
				url: '/templates',
				dataType: 'json',
				cache: false,
				success: function (templates) {
					console.log('templates=');
					console.log(templates);
					this.setState({ templates: templates });
				}.bind(this),
				error: function (xhr, status, err) {
					console.error('abc', status, err.toString());
				}.bind(this)
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var templates = this.state.templates;

			console.log(templates);

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_operation2.default, null),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(_list2.default, { templates: templates })
			);
		}
	}]);

	return TemplateListBox;
}(_react.Component);

exports.default = TemplateListBox;