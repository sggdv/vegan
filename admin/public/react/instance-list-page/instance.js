'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _flagGroupBox = require('./flag-group-box');

var _flagGroupBox2 = _interopRequireDefault(_flagGroupBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Instance = function (_Component) {
	_inherits(Instance, _Component);

	function Instance() {
		_classCallCheck(this, Instance);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Instance).apply(this, arguments));
	}

	_createClass(Instance, [{
		key: 'render',
		value: function render() {
			var _props$instance = this.props.instance;
			var email = _props$instance.email;
			var _props$instance$templ = _props$instance.template;
			var title = _props$instance$templ.title;
			var items = _props$instance$templ.items;
			var submitTime = _props$instance.submitTime;


			var tmpDate = new Date();
			tmpDate.setTime(submitTime);
			var submitTimeFormat = tmpDate.toLocaleString();

			var titleDOM = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'envelope' }),
				' ',
				email
			);

			var itemsDOM = items.map(function (item) {
				var name = item.name;
				var value = item.value;


				return _react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						name
					),
					_react2.default.createElement(
						'td',
						null,
						value
					)
				);
			});

			return _react2.default.createElement(
				_reactBootstrap.Col,
				{ sm: 6 },
				_react2.default.createElement(
					_reactBootstrap.Panel,
					{ header: titleDOM, bsStyle: 'info' },
					_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ sm: 12 },
							_react2.default.createElement(_flagGroupBox2.default, null),
							_react2.default.createElement(
								_reactBootstrap.Button,
								{ bsStyle: 'link', bsSize: 'sm' },
								_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'cog' })
							)
						)
					),
					_react2.default.createElement('hr', null),
					_react2.default.createElement(
						_reactBootstrap.Row,
						null,
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ sm: 6 },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'list-alt' }),
							' ',
							title
						),
						_react2.default.createElement(
							_reactBootstrap.Col,
							{ sm: 6 },
							_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'time' }),
							' ',
							submitTimeFormat
						)
					),
					_react2.default.createElement(
						_reactBootstrap.Table,
						{ hover: true, fill: true },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'th',
									null,
									'名称'
								),
								_react2.default.createElement(
									'th',
									null,
									'值'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							itemsDOM
						)
					)
				)
			);
		}
	}]);

	return Instance;
}(_react.Component);

exports.default = Instance;