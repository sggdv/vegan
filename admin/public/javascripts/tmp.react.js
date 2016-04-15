// 选项值
var Option = React.createClass({
	displayName: "Option",

	render: function () {
		return React.createElement(
			"div",
			{ className: "col-sm-4" },
			React.createElement("input", { type: "text", "class": "col-sm-10 form-control", placeholder: this.props.placeholder, onChange: this.handleChange })
		);
	},
	handleChange: function (event) {
		this.props.callbackParent(event.target.value, this.props.index);
	}
});

var OptionList = React.createClass({
	displayName: "OptionList",

	render: function () {
		var optionList = this.props.options.map(function (opt, index) {
			var placeholder = '选项' + (index + 1);
			return React.createElement(Option, { placeholder: placeholder, index: index, callbackParent: this.callbackParent });
		}, this);
		return React.createElement(
			"div",
			{ className: "row" },
			optionList
		);
	},
	callbackParent: function (option, index) {
		var options = this.props.options;
		options[index] = option;
		this.props.callbackParent(options);
	}
});

var OptionBox = React.createClass({
	displayName: "OptionBox",

	render: function () {
		return React.createElement(
			"div",
			{ className: "form-group" },
			React.createElement(
				"label",
				{ className: "col-sm-2 control-label" },
				"选项"
			),
			React.createElement(
				"div",
				{ className: "col-sm-10" },
				React.createElement(OptionList, { options: this.props.options, callbackParent: this.props.callbackParent })
			)
		);
	}
});