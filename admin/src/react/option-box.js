import React, { Component } from 'react';
import {
	Row,
	Col,
	FormGroup,
	ControlLabel,
} from 'react-bootstrap';
import Option from './option';

class OptionList extends Component {

	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleOptionRemove = this.handleOptionRemove.bind(this);
		this.handleMove = this.handleMove.bind(this);
	}

	render() {
		const { options } = this.props;

		const optionList = options.map((opt, index) => {
			const { key, value } = opt;
			const placeholder = '选项' + (index + 1);
			return (<Option 
				key={key}
				placeholder={placeholder} 
				index={index} 
				value={value} 
				callbackParent={this.handleOptionChange} 
				removeOption={this.handleOptionRemove} 
				move={this.handleMove} />);
		}, this);

		return (<div>{optionList}</div>);
	}

	handleOptionChange(value, index) {
		const { options, callbackParent } = this.props;
		options[index].value = value;
		callbackParent(options);
	}

	handleOptionRemove(index) {
		const { options, callbackParent } = this.props;
		options.splice(index, 1);
		callbackParent(options);
	}

	handleMove(dragIndex, hoverIndex) {
		const { options, callbackParent } = this.props;
		const dragOption = options[dragIndex];
		options.splice(dragIndex, 1);
		options.splice(hoverIndex, 0, dragOption);
		callbackParent(options);
	}

}

export default class OptionBox extends Component {

	render() {
		const { options, callbackParent } = this.props;

		return (
			<FormGroup>
				<Col sm={2} componentClass={ControlLabel}>选项</Col>
				<Col sm={10}>
					<OptionList options={options} callbackParent={callbackParent} />
				</Col>
			</FormGroup>
		);
	}

}
