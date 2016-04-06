var Text = React.createClass({
  displayName: "Text",

  render: function () {
    return React.createElement(
      "div",
      null,
      this.props.title,
      React.createElement("input", { type: "text" })
    );
  }
});