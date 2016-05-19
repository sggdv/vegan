'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemplateList = function (_Component) {
	_inherits(TemplateList, _Component);

	function TemplateList() {
		_classCallCheck(this, TemplateList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(TemplateList).apply(this, arguments));
	}

	_createClass(TemplateList, [{
		key: 'render',
		value: function render() {
			var templates = this.props.templates;


			var puttyDom = [];
			templates.forEach(function (template, index, arr) {
				if (index % 2 == 0) {
					// 偶数元素
					if (index + 1 == arr.length) {
						puttyDom.push(_react2.default.createElement(
							_reactBootstrap.Row,
							null,
							_react2.default.createElement(_template2.default, { template: template })
						));
					} else {
						puttyDom.push(_react2.default.createElement(
							_reactBootstrap.Row,
							null,
							_react2.default.createElement(_template2.default, { template: template }),
							_react2.default.createElement(_template2.default, { template: arr[index + 1] })
						));
					}
				}
			});

			return _react2.default.createElement(
				'div',
				null,
				puttyDom
			);
		}
	}]);

	return TemplateList;
}(_react.Component);

exports.default = TemplateList;