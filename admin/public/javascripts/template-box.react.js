var TemplateBox = React.createClass({
	displayName: 'TemplateBox',

	getInitialState: function () {
		return { title: '', items: [{ name: '', type: 'text', options: ['', '', ''] }] };
	},
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'col-sm-6' },
				React.createElement(
					'form',
					{ className: 'form-horizontal' },
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'标题'
						),
						React.createElement(
							'div',
							{ className: 'col-sm-10' },
							React.createElement('input', { type: 'text', className: 'form-control', onChange: this.handleTitleChange })
						)
					),
					React.createElement(ItemList, { items: this.state.items, callbackParent: this.handleItemsChange }),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'div',
							{ className: 'col-sm-offset-2 col-sm-10' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-primary', onClick: this.handleItemAdd },
								'添加'
							)
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'col-sm-6' },
				React.createElement(
					'div',
					{ className: 'page-header' },
					React.createElement(
						'h3',
						null,
						this.state.title
					)
				),
				React.createElement(
					'form',
					{ className: 'form-horizontal' },
					React.createElement(ReviewItemList, { items: this.state.items })
				)
			)
		);
	},
	handleTitleChange: function (event) {
		this.setState({ title: event.target.value });
		console.log(this.state);
	},
	handleItemsChange: function (items) {
		this.setState({ items });
	},
	handleItemAdd: function () {
		var items = this.state.items;
		items.push({ name: '', type: 'text', options: ['', '', ''] });
		this.setState({ items });
	}
});

ReactDOM.render(React.createElement(TemplateBox, null), document.getElementById('content'));