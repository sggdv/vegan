import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InstanceListBox from './instance-list-box';
import TemplateListBox from './template-list-box';

class Nav extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		const { 
			active, 
			nav: { url, name },
		} = this.props;
		const clzName = active ? 'active' : '';
		return (
			<li className={clzName}>
				<a href={url} onClick={this.handleChange}>{name}</a>
			</li>
		);
	}

	handleChange() {
		const { nav, callbackParent, index } = this.props;
		callbackParent(index);
		if (nav.click) { 
			nav.click();
		}
	}

}

export default class NavBox extends Component {

	constructor(props) {
		super(props);
		const { domId } = this.props;
		this.state = { 
			navs: [
				{ 
					name: '资料', 
					url: '#',
					click() {
						console.log('资料');
						ReactDOM.render(
							<InstanceListBox />,
							document.getElementById(domId)
						);
					},
				}, 
				{ 
					name: '表单', 
					url: '#', 
					click() {
						ReactDOM.render(
							<TemplateListBox />,
							document.getElementById(domId)
						);
					},
				},
				{ 
					name: '偏好设置', 
					url: '#', 
					click() {
						console.log('偏好设置');
					},
				}
			], 
			activeNav: 0, 
		};

		this.handleNavChange = this.handleNavChange.bind(this);
	}

	render() {
		let navs = this.state.navs.map((nav, index) => {
			var active = index == this.state.activeNav;
			return (<Nav nav={nav} index={index} active={active} callbackParent={this.handleNavChange} />);
		}, this);
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">{this.props.projectName}</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							{navs}
						</ul>
					</div>
				</div>
			</nav>
		);
	}

	handleNavChange(index) {
		this.setState({ activeNav: index });
	}

}
