import $ from 'jquery';
import React from 'react';

// 单个资料项展示
let Item = React.createClass({
	render() {
		let type = this.props.item.type;
		if (type == 'text') {
			return (
				<div className="form-group">
					<label>{this.props.item.name}</label>
					<input type="text" className="form-control" onChange={this.handleTextChange} />
				</div>
			);
		} else if (type == 'radio') {
			let radioName = '__review_radio_' + this.props.index;
			let options = this.props.item.options.map((option) => {
				return (
					<label className="btn btn-default">
						<input type="radio" name={radioName} value={option} onClick={this.handleRadioChange} /> {option}
					</label>
				);
			}, this);
			return (
				<div className="form-group">
					<label>{this.props.item.name}</label>
					<br />
					<div className="btn-group">
						{options}
					</div>
				</div>
			);
		} else if (type == 'checkbox') {
			let checkboxName = '__review_checkbox_' + this.props.index;
			let options = this.props.item.options.map((option) => {
				return (
					<label className="btn btn-default">
						<input type="checkbox" name={checkboxName} /> {option}
					</label>
				);
			}, this);
			return (
				<div className="form-group">
					<label>{this.props.item.name}</label>
					<br />
					<div className="btn-group">
						{options}
					</div>
				</div>
			);
		}
	},
	handleTextChange(event) {
		let item = this.props.item;
		item.value = event.target.value;
		this.props.callbackParent(item, this.props.index);
	},
	handleRadioChange(event) {
		let item = this.props.item;
		item.value = event.target.value;
		this.props.callbackParent(item, this.props.index);
	},
});

// 客户端展示组件
let Client = React.createClass({
	getInitialState() {
		return this.props.template;
	},
	render() {
		let items = this.state.items.map((item, index) => {
			return (<Item item={item} index={index} callbackParent={this.handleItemChange} />);
		}, this);
		return (
			<div>
				<div className="page-header">
					<h3>{this.props.template.title}</h3>
				</div>
				<form>
					{items}
					<hr />
					<button type="button" className="btn btn-success" onClick={this.handleSubmit}>
						<span className="glyphicon glyphicon-ok"></span> 提交
					</button>
				</form>
			</div>
		);
	},
	handleSubmit() {
		$.ajax({
			type: 'POST',
			url: '/update',
			dataType: 'json',
			data: this.state,
			success(data, stat, req) {
			},
			error(req, stat, err) {
			},
		});
	},
	handleItemChange(item, index) {
		let items = this.state.items;
		items[index] = item;
		this.setState({items});
	},
});

// usage: <Client template={template} />
export default Client;
