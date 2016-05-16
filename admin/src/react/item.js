import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {
	Well,
	Glyphicon,
	FormControl,
	FormGroup,
	Col,
} from 'react-bootstrap';
import { DragSource, DropTarget } from 'react-dnd';
import { DNDTypes, ItemTypes } from './constants';
import OptionBox from './option-box';

const itemSource = {
	beginDrag(props) {
		const { index, removeItem } = props;
		return { index, removeItem };
	}
}

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

const optionTarget = {
	drop(props, monitor, component) {
		let { item, index, callbackParent } = props;
		let maxKey = 0;
		item.options.forEach((opt) => {
			if (opt.key > maxKey) {
				maxKey = opt.key;
			}
		});
		maxKey++;
		item.options.push({ key: maxKey, value: '' });
		callbackParent(item, index);
	}
};

@DropTarget(DNDTypes.ADD_OPTION, optionTarget, (connect, monitor) => ({
	connectOptionDropTarget: connect.dropTarget(),
}))
@DropTarget(DNDTypes.Trash, target, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
}))
@DragSource(DNDTypes.Trash, itemSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging(),
}))
export default class Item extends Component {

	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleOptionsChange = this.handleOptionsChange.bind(this);
	}
	
	render() {
		let { 
			index, 
			item: { type, options },
			connectDragSource, 
			connectDragPreview, 
			isDragging, 
			connectDropTarget,
			connectOptionDropTarget,
		} = this.props;

		let optionBox;
		if (type == 'radio' || type == 'checkbox') {
			optionBox = (<OptionBox options={options} callbackParent={this.handleOptionsChange} />);
		}

		let icon = null;
		switch(type) {
			case ItemTypes.TEXT:
				icon = 'font';
				break;
			case ItemTypes.RADIO:
				icon = 'record';
				break;
			case ItemTypes.CHECKBOX:
				icon = 'check';
				break;
			case ItemTypes.FILE:
				icon = 'file';
				break;
			default:
				icon = 'font';
		}

		const opacity = isDragging ? 0 : 1;
		return connectOptionDropTarget(connectDropTarget(connectDragPreview(
			<div style={{ opacity }}>
				<Well>
					<FormGroup>
						{connectDragSource(
						<div className="col-sm-2 control-label" style={{ cursor: 'move' }}>
							<Glyphicon glyph={icon} /> 
							&nbsp;名称
						</div>
						)}
						<Col sm={10}>
							<FormControl onChange={this.handleNameChange} />
						</Col>
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
