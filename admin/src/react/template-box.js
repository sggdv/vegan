import $ from 'jquery';
import React from 'react';
import ItemBox from './item-box';
import ClientBox from './client-box';

let TemplateBox = React.createClass({
	getInitialState() {
		return { title: '', items: [{ name: '', type: 'text', options: ['', '', ''] }] };
	},
	render() {
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
						<ItemBox items={this.state.items} callbackParent={this.handleItemsChange} />
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
					<ClientBox template={this.state} />
				</div>
			</div>
		);
	},
	handleTitleChange(event) {
		let title = event.target.value;
		console.log(title);
		this.setState({title});
	},
	handleItemsChange(items) {
		this.setState({items});
	},
	handleItemAdd() {
		let items = this.state.items;
		items.push({ name: '', type: 'text', options: ['', '', ''] });
		this.setState({items});
	},
	handleCommit() {
		let template = this.state;
		// TODO 提交表单
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
			url: '/templates',
			data: JSON.stringify(template),
			dataType: 'json',
			success(data) {
				alert('ok');	
			},
			beforeSend() {
			}
		});
	},
});

export default TemplateBox;
