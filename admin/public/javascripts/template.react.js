var Option = React.createClass({
  displayName: "Option",

  render: function () {
    return React.createElement(
      "div",
      { className: "col-sm-4" },
      React.createElement("input", { type: "text", className: "col-sm-10 form-control", placeholder: this.props.placeholder })
    );
  }
});

var Item = React.createClass({
  displayName: "Item",

  getInitialState: function () {
    return this.props.data;
  },
  render: function () {
    // TODO 可选项
    var options;
    if (this.state.type == 'radio') {
      var option = ['', '', ''].map(function (opt, index) {
        var placeholder = '选项' + (index + 1);
        return React.createElement(
          "div",
          { className: "col-sm-4" },
          React.createElement("input", { type: "text", className: "col-sm-10 form-control", placeholder: placeholder, onChange: this.handleOptChange })
        );
      }, this);
      options = React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "col-sm-2 control-label" },
          "选项"
        ),
        React.createElement(
          "div",
          { className: "col-sm-10" },
          option
        )
      );
    }
    var radioName = "__type_" + this.props.index;
    return React.createElement(
      "div",
      { className: "item" },
      React.createElement("hr", null),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "col-sm-2 control-label" },
          "名称"
        ),
        React.createElement(
          "div",
          { className: "col-sm-10" },
          React.createElement("input", { type: "text", className: "form-control", onChange: this.handleNameChange })
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { className: "col-sm-2 control-label" },
          "类型"
        ),
        React.createElement(
          "div",
          { className: "col-sm-10" },
          React.createElement(
            "div",
            { className: "btn-group" },
            React.createElement(
              "label",
              { className: "btn btn-default" },
              React.createElement("input", { type: "radio", name: radioName, value: "text", checked: this.state.type == 'text', onChange: this.handTypeChange }),
              " 文本"
            ),
            React.createElement(
              "label",
              { className: "btn btn-default" },
              React.createElement("input", { type: "radio", name: radioName, value: "radio", onChange: this.handTypeChange }),
              " 单选"
            ),
            React.createElement(
              "label",
              { className: "btn btn-default" },
              React.createElement("input", { type: "radio", name: radioName, value: "file", onChange: this.handTypeChange }),
              " 文件上传"
            )
          )
        )
      ),
      options
    );
  },
  handleOptChange: function (event) {
    var item = this.state;
    var index = event.target.index;
    console.log(index);
    console.log(item);
    item.options[index] = event.target.value;
    this.setState(item);
    this.props.callbackParent(item, this.props.index);
  },
  handleNameChange: function (event) {
    var item = this.state;
    item.name = event.target.value;
    this.setState(item);
    this.props.callbackParent(item, this.props.index);
  },
  handTypeChange: function (event) {
    var item = this.state;
    item.type = event.target.value;
    this.setState(item);
    this.props.callbackParent(item, this.props.index);
  }
});

var Items = React.createClass({
  displayName: "Items",

  render: function () {
    var items = this.props.data.map(function (item, index) {
      return React.createElement(Item, { data: item, index: index, callbackParent: this.onChildChanged });
    }, this);
    return React.createElement(
      "div",
      null,
      items
    );
  },
  onChildChanged: function (item, index) {
    this.props.callbackParent(item, index);
  }
});

var Template = React.createClass({
  displayName: "Template",

  getInitialState: function () {
    return {
      title: '',
      items: [{ name: '', type: 'text', options: [] }]
    };
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "col-sm-6" },
        React.createElement(
          "form",
          { className: "form-horizontal" },
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { className: "col-sm-2 control-label" },
              "标题"
            ),
            React.createElement(
              "div",
              { className: "col-sm-10" },
              React.createElement("input", { type: "text", className: "form-control", ref: "title", onChange: this.handleTitleChange })
            )
          ),
          React.createElement(Items, { data: this.state.items, callbackParent: this.onChildChanged }),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "button",
              { type: "button", className: "btn btn-primary", onClick: this.handleItemAdd },
              "添加"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "col-sm-6" },
        React.createElement(
          "h1",
          null,
          this.state.title
        ),
        React.createElement("hr", null),
        React.createElement(ReviewItems, { data: this.state.items })
      )
    );
  },
  handleTitleChange: function () {
    this.setState({ title: this.refs.title.value });
  },
  handleItemAdd: function () {
    var items = this.state.items;
    items.push({ name: '', type: 'text', options: [] });
    this.setState({ items: items });
  },
  onChildChanged: function (item, index) {
    var items = this.state.items;
    items[index] = item;
    this.setState({ itmes: items });
  }
});

// 预览资料项
var ReviewItems = React.createClass({
  displayName: "ReviewItems",

  render: function () {
    var items = this.props.data.map(function (item) {
      var type = item.type;
      if (type == 'text') {
        return React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { className: "control-label" },
            item.name
          ),
          React.createElement("input", { type: "text", className: "form-control" })
        );
      } else if (type == 'radio') {
        var options = item.options.map(function (option) {
          return React.createElement(
            "label",
            { className: "btn btn-default" },
            React.createElement("input", { type: "radio" }),
            " ",
            option.value
          );
        });
        return React.createElement(
          "div",
          { className: "form-group" },
          React.createElement(
            "label",
            { className: "control-label" },
            item.name
          ),
          React.createElement(
            "div",
            { className: "btn-group" },
            options
          )
        );
      } else if (type == 'file') {
        return React.createElement("div", null);
      }
    });
    return React.createElement(
      "div",
      null,
      items
    );
  }
});

ReactDOM.render(React.createElement(Template, null), document.getElementById('example'));