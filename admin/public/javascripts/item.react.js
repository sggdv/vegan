var Item = React.createClass({
	displayName: 'Item',

	render: function () {
		var optionBox;
		if (this.props.item.type == 'radio' || this.props.item.type == 'checkbox') {
			optionBox = React.createElement(OptionBox, { options: this.props.item.options, callbackParent: this.handleOptionsChange });
		}
		var radioName = '__type_radio_name_' + this.props.index;
		return React.createElement(
			'div',
			{ className: 'item' },
			React.createElement('hr', null),
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ className: 'col-sm-2 control-label' },
					'名称'
				),
				React.createElement(
					'div',
					{ className: 'col-sm-10' },
					React.createElement('input', { type: 'text', className: 'form-control', onChange: this.handleNameChange })
				)
			),
			React.createElement(
				'div',
				{ className: 'form-group' },
				React.createElement(
					'label',
					{ className: 'col-sm-2 control-label' },
					'类型'
				),
				React.createElement(
					'div',
					{ className: 'col-sm-10' },
					React.createElement(
						'div',
						{ className: 'btn-group' },
						React.createElement(
							'label',
							{ className: 'btn btn-default' },
							React.createElement('input', { type: 'radio', name: radioName, value: 'text', checked: this.props.item.type == 'text', onChange: this.handleTypeChange }),
							' 文本'
						),
						React.createElement(
							'label',
							{ className: 'btn btn-default' },
							React.createElement('input', { type: 'radio', name: radioName, value: 'radio', onChange: this.handleTypeChange }),
							' 单选'
						),
						React.createElement(
							'label',
							{ className: 'btn btn-default' },
							React.createElement('input', { type: 'radio', name: radioName, value: 'checkbox', onChange: this.handleTypeChange }),
							' 多选'
						),
						React.createElement(
							'label',
							{ className: 'btn btn-default' },
							React.createElement('input', { type: 'radio', name: radioName, value: 'file', onChange: this.handleTypeChange }),
							' 文件上传'
						)
					)
				)
			),
			optionBox
		);
	},
	handleNameChange: function (event) {
		var item = this.props.item;
		item.name = event.target.value;
		this.props.callbackParent(item, this.props.index);
	},
	handleTypeChange: function (event) {
		var item = this.props.item;
		item.type = event.target.value;
		this.props.callbackParent(item, this.props.index);
	},
	handleOptionsChange: function (options) {
		var item = this.props.item;
		item.options = options;
		this.props.callbackParent(item, this.props.index);
	}
});

var ItemList = React.createClass({
	displayName: 'ItemList',

	render: function () {
		var items = this.props.items.map(function (item, index) {
			return React.createElement(Item, { index: index, item: item, callbackParent: this.handleChange });
		}, this);
		return React.createElement(
			'div',
			null,
			items
		);
	},
	handleChange: function (item, index) {
		var items = this.props.items;
		items[index] = item;
		this.props.callbackParent(items);
	}
});