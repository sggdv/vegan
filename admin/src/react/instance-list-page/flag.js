import React, { Component, PropTypes } from 'react';
import { Glyphicon, Button } from 'react-bootstrap';

const propTypes = {
	color: PropTypes.string.isRequired, // 颜色值
	callbackParent: PropTypes.func.isRequired, // 点击旗帜后的回调函数
};

class Flag extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		const { color } = this.props;
		return (
			<Button bsStyle="link" bsSize="sm" onClick={this.handleClick}>
				<Glyphicon glyph="flag" style={{ color }} />
			</Button>
		);
	}

	handleClick() {
		const { callbackParent, color } = this.props;
		callbackParent(color);
	}

}

Flag.propTypes = propTypes;

export default Flag;
