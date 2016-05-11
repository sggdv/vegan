import React, { Component } from 'react';
import Item from './item';
import OptionBox from './option-box';

class ItemBox extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		let items = this.props.items.map((item, index) => {
			return (<Item index={index} item={item} callbackParent={this.handleChange} />);
		}, this);
		return (<div>{items}</div>);
	}

	handleChange(item, index) {
		let { items } = this.props;
		items[index] = item;
		this.props.callbackParent(items);
	}

}

export default ItemBox;
