import React from 'react';

// 选项值
let Option = React.createClass({
	render() {
		return (
			<div className="col-sm-4">
				<div className="col-sm-10">
					<input type="text" className="form-control" placeholder={this.props.placeholder} onChange={this.handleChange} value={this.props.value} />
				</div>
			</div>
		);
	},
	handleChange(event) {
		this.props.callbackParent(event.target.value, this.props.index);
	}
});

let OptionList = React.createClass({
	render() {
		let optionList = this.props.options.map((opt, index) => {
			let placeholder = '选项' + (index + 1);
			return (<Option placeholder={placeholder} index={index} value={opt} callbackParent={this.handleOptionChange} />);
		}, this);
		return (<div className="row">{optionList}</div>);
	}, 
	handleOptionChange(option, index) {
		let options = this.props.options;
		options[index] = option;
		this.props.callbackParent(options);
	},
});

let OptionBox = React.createClass({
	render() {
		return (
			<div className="form-group">
				<label className="col-sm-2 control-label">选项</label>
				<div className="col-sm-10">
  					<OptionList options={this.props.options} callbackParent={this.props.callbackParent} />
				</div>
			</div>
		);
	},
});

export default OptionBox;
