var File = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.title}
        <input type="file" name={this.props.name} />
      </div>
    );
  }
});
