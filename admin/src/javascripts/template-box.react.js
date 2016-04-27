var TemplateBox = React.createClass({
	getInitialState: function() {
		return { title: '', items: [{ name: '', type: 'text', options: ['', '', ''] }] };
	},
	render: function() {
		return (
			<div>
				<div className="col-sm-6">
					<form className="form-horizontal">
						<div className="form-group">
							<label className="col-sm-2 control-label">标题</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" onChange={this.handleTitleChange} />
							</div>
						</div>
						<ItemList items={this.state.items} callbackParent={this.handleItemsChange} />
						<div className="form-group">
						  <div className="col-sm-2">
								<button type="button" className="btn btn-default" onClick={this.handleItemAdd}>
									<span className="glyphicon glyphicon-plus"></span>
								</button>
							</div>
							<div className="col-sm-10">
								<button type="button" className="btn btn-primary" onClick={this.handleCommit}>
								  <span className="glyphicon glyphicon-ok"></span> 保存表单
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="col-sm-6">
					<div className="page-header">
						<h3>{this.state.title}</h3>
					</div>
					<form className="form-horizontal">
						<ReviewItemList items={this.state.items} />
					</form>	
				</div>
			</div>
		);
	},
	handleTitleChange: function(event) {
		this.setState({ title: event.target.value});
		console.log(this.state);
	},
	handleItemsChange: function(items) {
		this.setState({ items });
	},
	handleItemAdd: function() {
		var items = this.state.items;
		items.push({ name: '', type: 'text', options: ['', '', ''] });
		this.setState({ items });
	},
	handleCommit: function() {
		var template = this.state;
		// TODO 提交表单
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: '/templates',
			data: JSON.stringify(template),
			dataType: 'json',
			success: function(data) {
				alert('ok');	
			},
			beforeSend: function() {
			
			}
		});
	}
});
