'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _optionBox = require('./option-box');

var _optionBox2 = _interopRequireDefault(_optionBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemBox = function (_Component) {
	_inherits(ItemBox, _Component);

	function ItemBox(props) {
		_classCallCheck(this, ItemBox);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ItemBox).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	_createClass(ItemBox, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var items = this.props.items.map(function (item, index) {
				return _react2.default.createElement(_item2.default, { index: index, item: item, callbackParent: _this2.handleChange });
			}, this);
			return _react2.default.createElement(
				'div',
				null,
				items
			);
		}
	}, {
		key: 'handleChange',
		value: function handleChange(item, index) {
			var items = this.props.items;

			items[index] = item;
			this.props.callbackParent(items);
		}
	}]);

	return ItemBox;
}(_react.Component);

exports.default = ItemBox;