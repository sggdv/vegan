import React, { Component } from 'react';
import { 
	Glyphicon,
} from 'react-bootstrap';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './constants';

class OptionGenerator extends Component {

	constructor(props) {
		super(props);
	}

	render() {
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
		const { connectDragSource } = this.props;
		return connectDragSource(
			<div style={style}>
				<Glyphicon glyph="option-horizontal" />
			</div>
		);
	}

}

const source = {
	beginDrag(props) {
		return {};
	}
};

export default DragSource(ItemTypes.ADD_OPTION, source, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
}))(OptionGenerator);