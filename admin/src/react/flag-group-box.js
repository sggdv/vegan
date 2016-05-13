import React, { Component } from 'react';
import {
	Glyphicon,
	Button,
	Popover,
	OverlayTrigger,
} from 'react-bootstrap';
import Flag from './flag';

class FlagGroupBox extends Component {

	constructor(props) {
		super(props);
		let current = props.current || '#FD7D7F';
		this.state = { 
			current,
			colors: ['#FD7D7F', '#FDBD43', '#F4E447', '#B5DF3A', '#83C9FD', '#E3A7FD', '#C8C8C8'],
		};
		this.handleClickFlag = this.handleClickFlag.bind(this);
	}

	render() {
		const { colors, current } = this.state;
		let flags = colors.map(color => {
			return (<Flag color={color} callbackParent={this.handleClickFlag} />);	
		}, this);
		let overlay = (<Popover title="标旗帜">{flags}</Popover>);
		return (
			<OverlayTrigger trigger="click" rootClose placement="top" overlay={overlay}>
				<Button bsStyle="link" bsSize="sm">
					<Glyphicon glyph="flag" style={{ color: current }}  />
				</Button>
			</OverlayTrigger>
		);
	}

	handleClickFlag(color) {
		const { callbackParent } = this.props;
		callbackParent(color, () => { 
			this.setState({ current: color }); 
		});
	}

}

export default FlagGroupBox;
