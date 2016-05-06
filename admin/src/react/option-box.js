import React from 'react';
import {
	Col,
	FormControl,
	Row,
	FormGroup,
	ControlLabel,
} from 'react-bootstrap';

// 选项值
let Option = React.createClass({
	render() {
		return (
			<Col sm={4}>
				<Col sm={10}>
					<FormControl type="text" placeholder={this.props.placeholder} onChange={this.handleChange} value={this.props.value} />
				</Col>
			</Col>
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
		return (<Row>{optionList}</Row>);
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
			<FormGroup>
				<Col sm={2} componentClass={ControlLabel}>选项</Col>
				<Col sm={10}>
  					<OptionList options={this.props.options} callbackParent={this.props.callbackParent} />
				</Col>
			</FormGroup>
		);
	},
});

export default OptionBox;
