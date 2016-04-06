var Text = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.title}
        <input type="text" />
      </div>
    );
  }
});
