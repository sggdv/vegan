'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _instance = require('./instance');

var _instance2 = _interopRequireDefault(_instance);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// instance列表

var List = function (_Component) {
	_inherits(List, _Component);

	function List() {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	}

	_createClass(List, [{
		key: 'render',
		value: function render() {
			var instances = this.props.instances;


			var instancesDOM = instances.map(function (instance) {
				return _react2.default.createElement(_instance2.default, { instance: instance });
			}, this);

			var puttyDom = [];
			instancesDOM.forEach(function (instanceDOM, index, arr) {
				if (index % 2 == 0) {
					if (index == arr.length) puttyDom.push(_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						arr[index]
					));else puttyDom.push(_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						arr[index],
						arr[index + 1]
					));
				}
			});

			return _react2.default.createElement(
				'div',
				null,
				puttyDom
			);
		}
	}]);

	return List;
}(_react.Component);