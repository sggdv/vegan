import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Template from './template';

export default class TemplateList extends Component {

	render() {
		const { templates } = this.props;
		
		let puttyDom = [];
		templates.forEach((template, index, arr) => {
			if (index % 2 == 0) { // 偶数元素
				if (index + 1 == arr.length) {
					puttyDom.push((<Row><Template template={template} /></Row>));
				} else {
					puttyDom.push((<Row><Template template={template} /><Template template={arr[index + 1]} /></Row>));
				}
			}
		});

		return (<div>{puttyDom}</div>);
	}

}
