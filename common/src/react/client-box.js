import $ from 'jquery';
import React from 'react';
import {
	FormGroup,
} from 'react-bootstrap';

// 单个资料项展示
let Item = React.createClass({
	render() {
		const { index, item: { name, type, value, options } } = this.props;
		if (type == 'text') {
			return (
				<div className="form-group">
					<label>{name}</label>
					<input type="text" className="form-control" onChange={this.handleTextChange} value={value} />
				</div>
			);
		} else if (type == 'radio') {
			const radioName = '__review_radio_' + index;

			return (
				<div className="form-group">
					<label>{name}</label>
					<br />
					<div className="btn-group">
						{options.map((opt) => {
							return (
								<label className="btn btn-default">
									<input type="radio" name={radioName} value={opt.value} onClick={this.handleRadioChange} checked={opt.value == value} /> {opt.value}
								</label>
							); 
						}, this)}
					</div>
				</div>
			);
		} else if (type == 'checkbox') {
			const checkboxName = '__review_checkbox_' + index;

			return (
				<div className="form-group">
					<label>{name}</label>
					<br />
					<div className="btn-group">
						{options.map((opt) => {
							return (
								<label className="btn btn-default">
									<input type="checkbox" name={checkboxName} /> {opt.value}
								</label>
							);
						}, this)}
					</div>
				</div>
			);
		} else if (type == 'file') {
			return (
				<FormGroup>
					<label>{name}</label>
					<br />
					<input type="file" />
				</FormGroup>
			);
		}
	},
	handleTextChange(event) {
		let { item, callbackParent, index } = this.props;
		item.value = event.target.value;
		callbackParent(item, index);
	},
	handleRadioChange(event) {
		let { item, callbackParent, index } = this.props;
		item.value = event.target.value;
		callbackParent(item, index);
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
		this.props.callbackParent(this.state);
	},
	handleItemChange(item, index) {
		let items = this.state.items;
		items[index] = item;
		this.setState({items});
	},
});

// usage: <Client template={template} />
export default Client;
