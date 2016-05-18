import React, { Component } from 'react';
import Instance from './instance';
import { Row } from 'react-bootstrap';

class List extends Component {

	render() {
		const { instances } = this.props;

		const instancesDOM = instances.map((instance) => {
			return (<Instance instance={instance} />);
		}, this);

		let puttyDom = [];
		instancesDOM.forEach((instanceDOM, index, arr) => {
			if (index % 2 == 0) {
				if (index == arr.length)
					puttyDom.push((<Row>{arr[index]}</Row>));
				else 
					puttyDom.push((<Row>{arr[index]}{arr[index + 1]}</Row>));
			}
		});

		return (<div>{puttyDom}</div>);
	}

}
