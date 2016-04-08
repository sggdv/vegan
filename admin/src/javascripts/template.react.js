var Template = React.createClass({
  getInitialState: function() {
    return { 
      title: '', // 表单标题
      items: [{  // 表单资料项
        name: '',
        type: 'text'
      }]
    };
  },
  render: function() {
    return (
      <div className="container">
        <div className="col-sm-6">
          <h1>edit</h1>
          <form className="form-horizontal">
            <div className="form-group">
              <label className="col-sm-2 control-label">标题</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" ref="title" onChange={this.handleTitleChange}  />
              </div>
            </div>
            <hr />
            <div className="form-group">
              <label className="col-sm-2 control-label">名称</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">类型</label>
              <div className="col-sm-10">
                <div className="btn-group">
                  <label className="btn btn-default active">
                    <input type="radio" checked /> 文本
                  </label>
                  <label className="btn btn-default">
                    <input type="radio" /> 文件上传
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-6">
          <h1>review</h1>
          <h1>{this.state.title}</h1>
        </div>
      </div>
    );
  },
  handleTitleChange: function() {
    this.setState({ title: this.refs.title.value });
  }
}); 

// 预览资料项
var ItemList = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item) {
      var type = item.type;
      if (type == 'text') {
        return (<div></div>);
      } else if (type == 'file') {
        return (<div></div>);
      }
    });
    return (<div>{items}</div>);
  }
});

ReactDOM.render(
  <Template />,
  document.getElementById('example')
);
