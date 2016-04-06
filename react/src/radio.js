var Radio = React.createClass({
  render: function() {
    var name = this.props.name;
    var radio = this.props.items.map(function(item) {
      return (
        <label>
          <input type="radio" name={name} value={item.key} /> {item.value}
        </label>
      );
    });
    return (
        <div>
          {this.props.title}
          {radio}
        </div>
    );
  }
});
