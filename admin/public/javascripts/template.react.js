var Template = React.createClass({
  displayName: 'Template',

  getInitialState: function () {
    return {
      title: '', // 表单标题
      items: [{ // 表单资料项
        name: '',
        type: 'text'
      }]
    };
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'col-sm-6' },
        React.createElement(
          'h1',
          null,
          'edit'
        ),
        React.createElement(
          'form',
          { className: 'form-horizontal' },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { className: 'col-sm-2 control-label' },
              '标题'
            ),
            React.createElement(
              'div',
              { className: 'col-sm-10' },
              React.createElement('input', { type: 'text', className: 'form-control', ref: 'title', onChange: this.handleChange })
            )
          ),
          React.createElement('hr', null),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { className: 'col-sm-2 control-label' },
              '名称'
            ),
            React.createElement(
              'div',
              { className: 'col-sm-10' },
              React.createElement('input', { type: 'text', className: 'form-control' })
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { className: 'col-sm-2 control-label' },
              '类型'
            ),
            React.createElement(
              'div',
              { className: 'col-sm-10' },
              React.createElement(
                'div',
                { className: 'btn-group' },
                React.createElement(
                  'label',
                  { className: 'btn btn-default active' },
                  React.createElement('input', { type: 'radio', checked: true }),
                  ' 文本'
                ),
                React.createElement(
                  'label',
                  { className: 'btn btn-default' },
                  React.createElement('input', { type: 'radio' }),
                  ' 文件上传'
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'col-sm-6' },
        React.createElement(
          'h1',
          null,
          'review'
        ),
        React.createElement(
          'h1',
          null,
          this.state.title
        )
      )
    );
  },
  handleChange: function () {
    this.setState({ title: this.refs.title.value });
  }
});

// 预览资料项
var ItemList = React.createClass({
  displayName: 'ItemList',

  render: function () {
    var items = this.props.items.map(function (item) {
      var type = item.type;
      if (type == 'text') {
        return React.createElement('div', null);
      } else if (type == 'file') {
        return React.createElement('div', null);
      }
    });
    return React.createElement(
      'div',
      null,
      items
    );
  }
});

ReactDOM.render(React.createElement(Template, null), document.getElementById('example'));