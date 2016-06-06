import React, { Component } from 'react';
import {
	Button,
	Glyphicon,
	PageHeader,
} from 'react-bootstrap';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import $ from 'jquery';
import List from './list';

const sidebar = {
	position: 'fixed',
	top: '51px',
	bottom: 0,
	left: 0,
	zIndex: 1000,
	display: 'block',
	padding: '20px',
	overflowX: 'hidden',
	overflowY: 'auto',
	backgroundColor: '#f5f5f5',
	borderRight: '1px solid #eee',
};
const navSidebar = {
	marginRight: '-21px',
	marginBottom: '20px',
	marginLeft: '-20px',
};
const main = {
	paddingRight: '40px',
	paddingLeft: '40px',
};

@DragDropContext(HTML5Backend)
export default class InstanceListPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			instances: [],
			inbox: true,
			tags: false,
		};

		this.componentDidMount = this.componentDidMount.bind(this);
		this.handleInboxClick = this.handleInboxClick.bind(this);
		this.handleTagsClick = this.handleTagsClick.bind(this);
	}

	componentDidMount() {
		$.ajax({
			type: 'GET',
			url: '/instances',
			dataType: 'json',
			cache: false,
			success: function(instances) {
				this.setState({instances});
			}.bind(this),
			error: function(xhr, stat, err) {
				console.error('/instances', stat, err.toString);
			}.bind(this),
		});
	}

	handleInboxClick() {
		let { inbox, tags } = this.state;
		inbox = !inbox;
		if (inbox) {
			tags = false;
		}
		this.setState({inbox, tags});
	}

	handleTagsClick() {
		let { inbox, tags } = this.state;
		tags = !tags;
		if (tags) {
			inbox = false;
		}
		this.setState({inbox, tags});
	}

	render() {
		const { inbox, tags } = this.state;
		const inboxStyle = inbox ? 'primary' : 'default';
		const tagsStyle = tags ? 'primary' : 'default';

		let pageHeaderText = inbox ? '待处理资料' : '所有资料';
		if (!inbox) {
			pageHeaderText = tags ? '已归档资料' : pageHeaderText;
		}

		return (
			<div className="row">
				<div className="col-sm-2 col-md-1 text-center" style={sidebar}>
					<ul className="nav" style={navSidebar}>
						<li>
							<Button bsSize="lg" bsStyle={inboxStyle} onClick={this.handleInboxClick}>
								<Glyphicon glyph="inbox" />
							</Button>
						</li>
						<li>
							<Button bsSize="lg" bsStyle={tagsStyle} onClick={this.handleTagsClick}>
								<Glyphicon glyph="tags" />
							</Button>
						</li>
						<li>
							<Button bsSize="lg">
								<Glyphicon glyph="trash" />
							</Button>
						</li>
					</ul>
				</div>
				<div className="col-sm-10 col-sm-offset-2 col-md-11 col-md-offset-1" style={main}>
					<PageHeader>{pageHeaderText}</PageHeader>
					<List instances={this.state.instances} />
				</div>
			</div>
		);
	}

}

