var File = React.createClass({
  displayName: "File",

  render: function () {
    return React.createElement(
      "div",
      null,
      this.props.title,
      React.createElement("input", { type: "file", name: this.props.name })
    );
  }
});