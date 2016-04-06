var Checkbox = React.createClass({
  render: function() {
    var name = this.props.name;
    var checkbox = this.props.items.map(function(item) {
      return (
        <label>
          <input type="checkbox" name={name} value={item.key} /> {item.value}
        </label>
      );
    });
    return (
      <div>
        {checkbox}
      </div>
    );
  }
});
