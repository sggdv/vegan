var ReviewItem = React.createClass({
	displayName: "ReviewItem",

	render: function () {
		var type = this.props.item.type;
		if (type == 'text') {
			return React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					null,
					this.props.item.name
				),
				React.createElement("input", { type: "text", className: "form-control" })
			);
		} else if (type == 'radio') {
			var radioName = '__review_radio_' + this.props.index;
			var options = this.props.item.options.map(function (option) {
				return React.createElement(
					"label",
					{ className: "btn btn-default" },
					React.createElement("input", { type: "radio", name: radioName }),
					" ",
					option
				);
			}, this);
			return React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					null,
					this.props.item.name
				),
				React.createElement("br", null),
				React.createElement(
					"div",
					{ className: "btn-group" },
					options
				)
			);
		} else if (type == 'checkbox') {
			var checkboxName = '__review_checkbox_' + this.props.index;
			var options = this.props.item.options.map(function (option) {
				return React.createElement(
					"label",
					{ className: "btn btn-default" },
					React.createElement("input", { type: "checkbox", name: checkboxName }),
					" ",
					option
				);
			}, this);
			return React.createElement(
				"div",
				{ className: "form-group" },
				React.createElement(
					"label",
					null,
					this.props.item.name
				),
				React.createElement("br", null),
				React.createElement(
					"div",
					{ className: "btn-group" },
					options
				)
			);
		}
	}
});

var ReviewItemList = React.createClass({
	displayName: "ReviewItemList",

	render: function () {
		var items = this.props.items.map(function (item, index) {
			return React.createElement(ReviewItem, { item: item, index: index });
		});
		return React.createElement(
			"div",
			null,
			items
		);
	}
});