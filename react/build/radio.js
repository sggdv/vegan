var Radio = React.createClass({
  displayName: "Radio",

  render: function () {
    var name = this.props.name;
    var radio = this.props.items.map(function (item) {
      return React.createElement(
        "label",
        null,
        React.createElement("input", { type: "radio", name: name, value: item.key }),
        " ",
        item.value
      );
    });
    return React.createElement(
      "div",
      null,
      this.props.title,
      radio
    );
  }
});