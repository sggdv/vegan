var Checkbox = React.createClass({
  displayName: "Checkbox",

  render: function () {
    var name = this.props.name;
    var checkbox = this.props.items.map(function (item) {
      return React.createElement(
        "label",
        null,
        React.createElement("input", { type: "checkbox", name: name, value: item.key }),
        " ",
        item.value
      );
    });
    return React.createElement(
      "div",
      null,
      checkbox
    );
  }
});