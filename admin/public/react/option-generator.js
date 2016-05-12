'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _reactDnd = require('react-dnd');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionGenerator = function (_Component) {
	_inherits(OptionGenerator, _Component);

	function OptionGenerator(props) {
		_classCallCheck(this, OptionGenerator);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(OptionGenerator).call(this, props));
	}

	_createClass(OptionGenerator, [{
		key: 'render',
		value: function render() {
			var style = {
				marginTop: "50px",
				padding: "5px",
				width: "35px",
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: "#adadad",
				borderRadius: "6px",
				textAlign: "center",
				cursor: "move"
			};
			var connectDragSource = this.props.connectDragSource;

			return connectDragSource(_react2.default.createElement(
				'div',
				{ style: style },
				_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'option-horizontal' })
			));
		}
	}]);

	return OptionGenerator;
}(_react.Component);

var source = {
	beginDrag: function beginDrag(props) {
		return {};
	}
};

exports.default = (0, _reactDnd.DragSource)(_constants.ItemTypes.ADD_OPTION, source, function (connect, monitor) {
	return {
		connectDragSource: connect.dragSource()
	};
})(OptionGenerator);