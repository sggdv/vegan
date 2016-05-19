'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = require('react-bootstrap');

var _templateAddPage = require('../template-add-page');

var _templateAddPage2 = _interopRequireDefault(_templateAddPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 表单列表页面中的操作控件

var Operation = function (_Component) {
	_inherits(Operation, _Component);

	function Operation(props) {
		_classCallCheck(this, Operation);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Operation).call(this, props));
	}

	_createClass(Operation, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactBootstrap.PageHeader,
					null,
					'表单管理'
				),
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsStyle: 'danger', onClick: this.handleAdd },
					_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'plus' }),
					' 添加表单'
				)
			);
		}
	}, {
		key: 'handleAdd',
		value: function handleAdd() {
			_reactDom2.default.render(_react2.default.createElement(_templateAddPage2.default, null), document.getElementById('content'));
		}
	}]);

	return Operation;
}(_react.Component);

exports.default = Operation;