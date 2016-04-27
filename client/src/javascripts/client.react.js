import React from 'react';

// 单个资料项展示
let Item = React.createClass({
	render() {
		let type = this.props.item.type;
		if (type == 'text') {
			return (
				<div className="form-group">
					<label>{this.props.item.name}</label>
					<input type="text" className="form-control" />
				</div>
			);
		} else if (type == 'radio') {
			let radioName = '__review_radio_' + this.props.index;
			let options = this.props.item.options.map((option) => {
				return (
					<label className="btn btn-default">
						<input type="radio" name={radioName} /> {option}
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
});

// 客户端展示组件
let Client = React.createClass({
	render() {
		let items = this.props.template.items.map((item, index) => {
			return (<Item item={item} index={index} />);
		});
		return (
			<div>
				<div className="page-header">
					<h3>{this.props.template.title}</h3>
				</div>
				<form>
					{items}
					<hr />
					<button type="button" className="btn btn-success">
						<span className="glyphicon glyphicon-ok"></span> 提交
					</button>
				</form>
			</div>
		);
	},
});

export default Client;
