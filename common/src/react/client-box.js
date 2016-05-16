import $ from 'jquery';
import React, { Component } from 'react';
import {
	FormGroup,
	FormControl,
	PageHeader,
	Button,
	Glyphicon,
} from 'react-bootstrap';

// 单个资料项展示
class Item extends Component {

	constructor(props) {
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
	}

	render() {
		const { index, item: { name, type, value, options } } = this.props;
		if (type == 'text') {
			return (
				<FormGroup>
					<label>{name}</label>
					<FormControl onChange={this.handleTextChange} value={value} />
				</FormGroup>
			);
		} else if (type == 'radio') {
			const radioName = `__review_radio_${index}`;

			return (
				<FormGroup>
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
				</FormGroup>
			);
		} else if (type == 'checkbox') {
			const checkboxName = `__review_checkbox_${index}`;

			return (
				<FormGroup>
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
				</FormGroup>
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
	}

	handleTextChange(event) {
		let { item, callbackParent, index } = this.props;
		item.value = event.target.value;
		callbackParent(item, index);
	}

	handleRadioChange(event) {
		let { item, callbackParent, index } = this.props;
		item.value = event.target.value;
		callbackParent(item, index);
	}

}

// 客户端展示组件
export default class Client extends Component {
	
	constructor(props) {
		super(props);
		this.state = props.template;

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleItemChange = this.handleItemChange.bind(this);
	}

	render() {
		const { items } = this.state;
		const { template: { title } } = this.props;

		return (
			<div>
				<PageHeader>{title}</PageHeader>
				<form>
					{items.map((item, index) => {
						return (<Item item={item} index={index} callbackParent={this.handleItemChange} />);
					}, this)}
					<hr />
					<Button bsStyle="success" onClick={this.handleSubmit}>
						<Glyphicon glyph="ok" /> 提交
					</Button>
				</form>
			</div>
		);
	}

	handleSubmit() {
		const { callbackParent } = this.props;
		callbackParent(this.state);
	}

	handleItemChange(item, index) {
		let { items } = this.state;
		items[index] = item;
		this.setState({items});
	}

}

