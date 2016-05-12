import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {
	Well,
	Glyphicon,
	FormControl,
	FormGroup,
} from 'react-bootstrap';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from './constants';
import OptionBox from './option-box';

class Item extends Component {

	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleOptionsChange = this.handleOptionsChange.bind(this);
	}
	
	render() {
		let { index, item: { type, options } } = this.props;
		let optionBox;
		if (type == 'radio' || type == 'checkbox') {
			optionBox = (<OptionBox options={options} callbackParent={this.handleOptionsChange} />);
		}
		let radioName = `__type_radio_name_${index}`;
		let icon = null;
		if (type == 'text') {
			icon = 'font';
		} else if (type == 'radio') {
			icon = 'record';
		} else if (type == 'checkbox') {
			icon = 'check';
		}

		const { 
			connectDragSource, 
			connectDragPreview, 
			isDragging, 
			connectDropTarget,
			connectOptionDropTarget,
		} = this.props;
		const opacity = isDragging ? 0 : 1;
		return connectOptionDropTarget(connectDropTarget(connectDragPreview(
			<div style={{ opacity }}>
				<Well>
					<FormGroup>
						{connectDragSource(
						<label className="col-sm-2 control-label" style={{ cursor: 'move' }}>
							<Glyphicon glyph={icon} /> 
							&nbsp;名称
						</label>
						)}
						<div className="col-sm-10">
							<FormControl onChange={this.handleNameChange} />
						</div>
					</FormGroup>
					{optionBox}
				</Well>
			</div>
		)));
	}

	handleNameChange(event) {
		let { item, index, callbackParent } = this.props;
		item.name = event.target.value;
		callbackParent(item, index);
	}

	handleOptionsChange(options) {
		let { item, index, callbackParent } = this.props;
		item.options = options;
		callbackParent(item, index);
	}

}

const itemSource = {
	beginDrag(props) {
		return {
			index: props.index,
			removeItem: props.removeItem
		};
	}
}

let Src =  DragSource(ItemTypes.Trash, itemSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging(),
}))(Item);

const target = {
	hover(props, monitor, component) {
		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index;
		if (dragIndex === hoverIndex) {
			return;
		}
		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
		const hoverMiddleY = (hoverBoundingRect.bottom  - hoverBoundingRect.top) / 2;
		const clientOffset = monitor.getClientOffset();
		const hoverClientY = clientOffset.y - hoverBoundingRect.top;
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}
		props.move(dragIndex, hoverIndex);
		monitor.getItem().index = hoverIndex;
	}
};

let TargetSrc = DropTarget(ItemTypes.Trash, target, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
}))(Src);

const optionTarget = {
	drop(props, monitor, component) {
		let { item, index, callbackParent } = props;
		item.options.push('');
		callbackParent(item, index);
	}
};

let OptionTarget = DropTarget(ItemTypes.ADD_OPTION, optionTarget, (connect, monitor) => ({
	connectOptionDropTarget: connect.dropTarget(),
}))(TargetSrc);

export default OptionTarget;
