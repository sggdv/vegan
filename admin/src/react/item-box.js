import React, { Component } from 'react';
import Item from './item';
import OptionBox from './option-box';

class ItemBox extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleMove = this.handleMove.bind(this);
	}

	render() {
		let items = this.props.items.map((item, index) => {
			return (<Item key={item.__react_key} index={index} item={item} callbackParent={this.handleChange} removeItem={this.handleRemove} move={this.handleMove} />);
		}, this);
		return (<div>{items}</div>);
	}

	handleChange(item, index) {
		let { items, callbackParent } = this.props;
		items[index] = item;
		callbackParent(items);
	}

	handleMove(dragIndex, hoverIndex) {
		let { items, callbackParent } = this.props;
		let dragItem = items[dragIndex];
		items.splice(dragIndex, 1);
		items.splice(hoverIndex, 0, dragItem);
		callbackParent(items);
	}

	handleRemove(index) {
		let { items, callbackParent } = this.props;
		items.splice(index, 1);
		callbackParent(items);
	}

}

export default ItemBox;
