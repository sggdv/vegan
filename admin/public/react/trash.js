'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _constants = require('./constants');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trash = function (_Component) {
	_inherits(Trash, _Component);

	function Trash(props) {
		_classCallCheck(this, Trash);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Trash).call(this, props));
	}

	_createClass(Trash, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var isOver = _props.isOver;
			var connectDropTarget = _props.connectDropTarget;
			var isOptionOver = _props.isOptionOver;
			var connectOptionDropTarget = _props.connectOptionDropTarget;

			return connectOptionDropTarget(connectDropTarget(_react2.default.createElement(
				'div',
				{ style: { marginTop: '50px' } },
				_react2.default.createElement(
					_reactBootstrap.Button,
					{ bsSize: 'lg', bsStyle: isOver || isOptionOver ? 'danger' : 'default' },
					_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'trash' })
				)
			)));
		}
	}]);

	return Trash;
}(_react.Component);

var target = {
	drop: function drop(props, monitor, component) {
		var _monitor$getItem = monitor.getItem();

		var index = _monitor$getItem.index;
		var removeItem = _monitor$getItem.removeItem;

		removeItem(index);
	}
};

var Target = (0, _reactDnd.DropTarget)(_constants.ItemTypes.Trash, target, function (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
})(Trash);

var optionTarget = {
	drop: function drop(props, monitor, component) {
		var _monitor$getItem2 = monitor.getItem();

		var index = _monitor$getItem2.index;
		var removeOption = _monitor$getItem2.removeOption;

		removeOption(index);
	}
};

exports.default = (0, _reactDnd.DropTarget)(_constants.ItemTypes.OPTION, optionTarget, function (connect, monitor) {
	return {
		connectOptionDropTarget: connect.dropTarget(),
		isOptionOver: monitor.isOver()
	};
})(Target);