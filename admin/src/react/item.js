import React, { Component } from 'react';
import {
	Well,
	Glyphicon,
} from 'react-bootstrap';
import { DragSource } from 'react-dnd';
import OptionBox from './option-box';

class Item extends Component {

	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleOptionsChange = this.handleOptionsChange.bind(this);
	}
	
	render() {
		let { type, options } = this.props.item;
		let optionBox;
		if (type == 'radio' || type == 'checkbox') {
			optionBox = (<OptionBox options={options} callbackParent={this.handleOptionsChange} />);
		}
		let radioName = '__type_radio_name_' + this.props.index;
		let icon = null;
		if (type == 'text') {
			icon = 'font';
		} else if (type == 'radio') {
			icon = 'record';
		} else if (type == 'checkbox') {
			icon = 'check';
		}

		const { connectDragSource, isDragging } = this.props;
		const opacity = isDragging ? 0 : 1;
		return connectDragSource(
			<div style={{ opacity, cursor: 'move' }}>
				<Well>
					<div className="form-group">
						<label className="col-sm-2 control-label">
							<Glyphicon glyph={icon} /> 
							&nbsp;名称
						</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" onChange={this.handleNameChange} />
						</div>
					</div>
					{optionBox}
				</Well>
			</div>
		);
	}

	handleNameChange(event) {
		let { item } = this.props;
		item.name = event.target.value;
		this.props.callbackParent(item, this.props.index);
	}

	handleOptionsChange(options) {
		let { item } = this.props;
		item.options = options;
		this.props.callbackParent(item, this.props.index);
	}

}

const itemSource = {
	beginDrag(props) {
		return {};
	}
}

export default DragSource('a', itemSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(Item);
