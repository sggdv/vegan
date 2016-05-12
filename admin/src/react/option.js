import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import {
	InputGroup,
	Glyphicon,
	FormControl,
} from 'react-bootstrap';
import { ItemTypes } from './constants';
import { DragSource, DropTarget } from 'react-dnd';

class Option extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		const { placeholder, value, connectDragSource, isDragging, connectDropTarget } = this.props;
		const opacity = isDragging ? 0 : 1;
		return connectDropTarget(connectDragSource(
			<div style={{ opacity }}>
				<InputGroup>
					<InputGroup.Addon style={{ cursor: 'move' }}>
						<Glyphicon glyph="move" />
					</InputGroup.Addon>
					<FormControl type="text" placeholder={placeholder} onChange={this.handleChange} value={value} />
				</InputGroup>
			</div>
		));
	}

	handleChange(event) {
		let { index, callbackParent } = this.props;
		callbackParent(event.target.value, index);
	}

}

const source = {
	beginDrag(props) {
		return {
			index: props.index,
			removeOption: props.removeOption,
		};
	}
};

let Src =  DragSource(ItemTypes.OPTION, source, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))(Option);

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
		monitor.getItem().key = hoverIndex;
	}
};

export default DropTarget(ItemTypes.OPTION, target, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
}))(Src);
