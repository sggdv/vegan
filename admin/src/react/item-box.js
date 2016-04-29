import React from 'react';
import OptionBox from './option-box';

let Item = React.createClass({
	render() {
		let optionBox;
		if (this.props.item.type == 'radio' || this.props.item.type == 'checkbox') {
			optionBox = (<OptionBox options={this.props.item.options} callbackParent={this.handleOptionsChange} />);
		}
		let radioName = '__type_radio_name_' + this.props.index;
		return (
			<div className="item">
		    	<hr />
				<div className="form-group">
					<label className="col-sm-2 control-label">名称</label>
					<div className="col-sm-10">
						<input type="text" className="form-control" onChange={this.handleNameChange} />
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-2 control-label">类型</label>
					<div className="col-sm-10">
						<div className="btn-group">
							<label className="btn btn-default">
								<input type="radio" name={radioName} value="text" checked={this.props.item.type == 'text'} onChange={this.handleTypeChange} /> 文本
							</label>
							<label className="btn btn-default">
								<input type="radio" name={radioName} value="radio" onChange={this.handleTypeChange} /> 单选
							</label>
							<label className="btn btn-default">
								<input type="radio" name={radioName} value="checkbox" onChange={this.handleTypeChange} /> 多选
							</label>
							<label className="btn btn-default">
								<input type="radio" name={radioName} value="file" onChange={this.handleTypeChange} /> 文件上传
							</label>
						</div>
					</div>
				</div>
				{optionBox}
			</div>
		);
	},
	handleNameChange(event) {
		let item = this.props.item;
		item.name = event.target.value;
		this.props.callbackParent(item, this.props.index);
	},
	handleTypeChange(event) {
		let item = this.props.item;
		item.type = event.target.value;
		this.props.callbackParent(item, this.props.index);
	},
	handleOptionsChange(options) {
		let item = this.props.item;
		item.options = options;
		this.props.callbackParent(item, this.props.index);
	},
});

let ItemBox = React.createClass({
	render() {
		let items = this.props.items.map((item, index) => {
			return (<Item index={index} item={item} callbackParent={this.handleChange} />);
		}, this);
		return (<div>{items}</div>);
	},
	handleChange(item, index) {
		let items = this.props.items;
		items[index] = item;
		this.props.callbackParent(items);
	},
});

export default ItemBox;
