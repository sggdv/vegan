var Textarea = React.createClass({
  displayName: "Textarea",

  render: function () {
    return React.createElement("textarea", { name: this.props.name });
  }
});