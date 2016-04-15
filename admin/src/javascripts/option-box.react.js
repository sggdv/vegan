// 选项值
var Option = React.createClass({
    render: function() {
        return (
            <div className="col-sm-4">
				<div className="col-sm-10">
        			<input type="text" className="form-control" placeholder={this.props.placeholder} onChange={this.handleChange} value={this.props.value} />
				</div>
      		</div>
    	);
  	},
	handleChange: function(event) {
		this.props.callbackParent(event.target.value, this.props.index);
	}
});

var OptionList = React.createClass({
  	render: function() {
    	var optionList = this.props.options.map(function(opt, index) {
      		var placeholder = '选项' + (index + 1);
      		return (<Option placeholder={placeholder} index={index} value={opt} callbackParent={this.handleOptionChange} />);
    	}, this);
    	return (<div className="row">{optionList}</div>);
  	}, 
	handleOptionChange: function(option, index) {
	    var options = this.props.options;
		options[index] = option;
		this.props.callbackParent(options);
	}
});

var OptionBox = React.createClass({
	render: function() {
		return (
			<div className="form-group">
				<label className="col-sm-2 control-label">选项</label>
				<div className="col-sm-10">
  					<OptionList options={this.props.options} callbackParent={this.props.callbackParent} />
				</div>
			</div>
		);
	}
});
