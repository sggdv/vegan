import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './constants';
import { 
	Button,
	Glyphicon,
} from 'react-bootstrap';

class Trash extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { isOver, connectDropTarget, isOptionOver, connectOptionDropTarget } = this.props;
		return connectOptionDropTarget(connectDropTarget(
			<div style={{ marginTop: '50px' }}>
				<Button bsSize="lg" bsStyle={isOver || isOptionOver ? 'danger' : 'default'}>
					<Glyphicon glyph="trash" />
				</Button>
			</div>
		));
	}

}

const target = {
	drop(props, monitor, component) {
		let { index, removeItem } = monitor.getItem();
		removeItem(index);
	}
};

let Target = DropTarget(ItemTypes.Trash, target, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver()
}))(Trash);

const optionTarget = {
	drop(props, monitor, component) {
		let { index, removeOption } = monitor.getItem();
		removeOption(index);
	}
};

export default DropTarget(ItemTypes.OPTION, optionTarget, (connect, monitor) => ({
	connectOptionDropTarget: connect.dropTarget(),
	isOptionOver: monitor.isOver(),
}))(Target);