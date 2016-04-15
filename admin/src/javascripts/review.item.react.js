var ReviewItem = React.createClass({
	render: function() {
		var type = this.props.item.type;
		if (type == 'text') {
			return (
				<div className="form-group">
					<label>{this.props.item.name}</label>
					<input type="text" className="form-control" />
				</div>
			);
		} else if (type == 'radio') {
			var radioName = '__review_radio_' + this.props.index;
			var options = this.props.item.options.map(function(option) {
				return (
					<label className="btn btn-default">
						<input type="radio" name={radioName} /> {option}
					</label>
				);
			}, this);
			return (
				<div className="form-group">
					<label>{this.props.item.name}</label>
					<br />
					<div className="btn-group">
						{options}
					</div>
				</div>
			);
		} else if (type == 'checkbox') {
			var checkboxName = '__review_checkbox_' + this.props.index;
			var options = this.props.item.options.map(function(option) {
				return (
					<label className="btn btn-default">
						<input type="checkbox" name={checkboxName} /> {option}
					</label>
				);
			}, this);
			return (
				<div className="form-group">
					<label>{this.props.item.name}</label>
					<br />
					<div className="btn-group">
						{options}
					</div>
				</div>
			);
		}
	}
});

var ReviewItemList = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item, index) {
			return (<ReviewItem item={item} index={index} />);
		});
		return (<div>{items}</div>);
	}
});
