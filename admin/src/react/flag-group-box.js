import React from 'react';
import {
	Glyphicon,
	Button,
	Popover,
	OverlayTrigger,
} from 'react-bootstrap';

let Flag = React.createClass({
	render() {
		return (
			<Button bsStyle="link" bsSize="sm" onClick={this.handleClick}>
				<Glyphicon glyph="flag" style={{ color: this.props.color }} />
			</Button>
		);
	},
	handleClick() {
		this.props.callbackParent(this.props.color);
	},
});

let FlagGroupBox = React.createClass({
	getInitialState() {
		let current = this.props.current || '#FD7D7F';
		return { 
			current,
			colors: ['#FD7D7F', '#FDBD43', '#F4E447', '#B5DF3A', '#83C9FD', '#E3A7FD', '#C8C8C8'],
		};
	},
	render() {
		let flags = this.state.colors.map(color => {
			return (<Flag color={color} callbackParent={this.handleClickFlag} />);	
		}, this);
		let overlay = (<Popover title="标旗帜">{flags}</Popover>);
		return (
			<OverlayTrigger trigger="click" rootClose placement="top" overlay={overlay}>
				<Button bsStyle="link" bsSize="sm">
					<Glyphicon glyph="flag" style={{ color: this.state.current }}  />
				</Button>
			</OverlayTrigger>
		);
	},
	handleClickFlag(color) {
		this.props.callbackParent(color, () => { this.setState({ current: color }); });
	},
});

export default FlagGroupBox;
