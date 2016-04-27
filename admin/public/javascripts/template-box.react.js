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
							{ className: 'col-sm-2' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-default', onClick: this.handleItemAdd },
								React.createElement('span', { className: 'glyphicon glyphicon-plus' })
							)
						),
						React.createElement(
							'div',
							{ className: 'col-sm-10' },
							React.createElement(
								'button',
								{ type: 'button', className: 'btn btn-primary', onClick: this.handleCommit },
								React.createElement('span', { className: 'glyphicon glyphicon-ok' }),
								' 保存表单'
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
	},
	handleCommit: function () {
		var template = this.state;
		// TODO 提交表单
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: '/templates',
			data: JSON.stringify(template),
			dataType: 'json',
			success: function (data) {
				alert('ok');
			},
			beforeSend: function () {}
		});
	}
});