var items = [{
  title: "姓名",
  datatype: {
    type: "text"
  }
}, {
  title: "性别",
  datatype: {
    type: "radio",
    items: [{
      key: "m",
      value: "男"
    }, {
      key: "f",
      value: "女"
    }]
  }
}, {
  title: "头像",
  datatype: {
    type: "file"
  }
}];

var Vegan = React.createClass({
  displayName: "Vegan",

  render: function () {
    var vegan = this.props.items.map(function (item) {
      var type = item.datatype.type;
      if (type == "text") return React.createElement(Text, { title: item.title });else if (type == "radio") return React.createElement(Radio, { title: item.title, items: item.datatype.items });else if (type == "file") return React.createElement(File, { title: item.title });
    });
    return React.createElement(
      "div",
      null,
      vegan
    );
  }
});

ReactDOM.render(React.createElement(Vegan, { items: items }), document.getElementById('example'));