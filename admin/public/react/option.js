'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactBootstrap = require('react-bootstrap');

var _constants = require('./constants');

var _reactDnd = require('react-dnd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_Component) {
	_inherits(Option, _Component);

	function Option(props) {
		_classCallCheck(this, Option);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Option).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(Option, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var placeholder = _props.placeholder;
			var value = _props.value;
			var connectDragSource = _props.connectDragSource;
			var isDragging = _props.isDragging;
			var connectDropTarget = _props.connectDropTarget;

			var opacity = isDragging ? 0 : 1;
			return connectDropTarget(connectDragSource(_react2.default.createElement(
				'div',
				{ style: { opacity: opacity } },
				_react2.default.createElement(
					_reactBootstrap.InputGroup,
					null,
					_react2.default.createElement(
						_reactBootstrap.InputGroup.Addon,
						{ style: { cursor: 'move' } },
						_react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'move' })
					),
					_react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: placeholder, onChange: this.handleChange, value: value })
				)
			)));
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			var _props2 = this.props;
			var index = _props2.index;
			var callbackParent = _props2.callbackParent;

			callbackParent(event.target.value, index);
		}
	}]);

	return Option;
}(_react.Component);

var source = {
	beginDrag: function beginDrag(props) {
		return {
			index: props.index,
			removeOption: props.removeOption
		};
	}
};

var Src = (0, _reactDnd.DragSource)(_constants.ItemTypes.OPTION, source, function (connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
})(Option);

var target = {
	hover: function hover(props, monitor, component) {
		var dragIndex = monitor.getItem().index;
		var hoverIndex = props.index;
		if (dragIndex === hoverIndex) {
			return;
		}
		var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
		var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
		var clientOffset = monitor.getClientOffset();
		var hoverClientY = clientOffset.y - hoverBoundingRect.top;
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}
		props.move(dragIndex, hoverIndex);
		monitor.getItem().index = hoverIndex;
		monitor.getItem().key = hoverIndex;
	}
};

exports.default = (0, _reactDnd.DropTarget)(_constants.ItemTypes.OPTION, target, function (connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget()
	};
})(Src);