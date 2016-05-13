import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './constants';

const style = {
	marginTop: "50px",
	padding: "5px",
	width: "35px",
	borderWidth: "1px",
	borderStyle: "solid",
	borderColor: "#adadad",
	borderRadius: "6px",
	textAlign: "center",
	cursor: "move",
};

const source = {
	beginDrag(props) {
		return {};
	}
};

@DragSource(ItemTypes.ADD_OPTION, source, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
}))
export default class OptionGenerator extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { connectDragSource } = this.props;
		return connectDragSource(
			<div style={style}>
				<Glyphicon glyph="option-horizontal" />
			</div>
		);
	}

}
