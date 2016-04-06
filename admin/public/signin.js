var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');

var Login = React.createClass({
  getInitialState: function() {
    return { 
      username: '', 
      pwd: '', 
      validFlag: false, 
      usernameValid: {
        isEmpty: true,
        isEmail: false
      }, 
      pwdValid: {
        isEmpty: true
      }
    };
  },
  render: function() {
    var UsernameErrorTips = '';
    var UsernameSuccessTips = '';
    var PwdErrorTips = '';
    var PwdSuccessTips = '';

    var usernameDOMClz = 'form-group';
    var pwdDOMClz = 'form-group';

    if (this.state.validFlag) {

      if (this.state.usernameValid.isEmpty) {
        usernameDOMClz = 'form-group has-error has-feedback';
        UsernameErrorTips = (
          <div>
            <span className="glyphicon glyphicon-remove form-control-feedback"></span>
            <p className="help-block">电子邮箱必填！</p>
          </div>
        );
      } else if (!this.state.usernameValid.isEmail) {
        usernameDOMClz = 'form-group has-error has-feedback';
        UsernameErrorTips = (
          <div>
            <span className="glyphicon glyphicon-remove form-control-feedback"></span>
            <p className="help-block">请输入有效的邮箱！</p>
          </div>
        );
      } else {
        usernameDOMClz = 'form-group has-success has-feedback';
        UsernameSuccessTips = (<span className="glyphicon glyphicon-ok form-control-feedback"></span>);
      }

      if (this.state.pwdValid.isEmpty) {
        pwdDOMClz = 'form-group has-error has-feedback';
        PwdErrorTips = (
          <div>
            <span className="glyphicon glyphicon-remove form-control-feedback"></span>
            <p className="help-block">密码必填</p>
          </div>
        );
      } else {
        pwdDOMClz = 'form-group has-success has-feedback';
        PwdSuccessTips = (<span className="glyphicon glyphicon-ok form-control-feedback"></span>);
      }

    }

    return (
      <form style={formSignin}>
        <div className="text-center">
          <h2 style={formH2}>用户登陆</h2>
        </div>
        <div className={usernameDOMClz}>
          <div className="input-group">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-user"></span>
            </span>
            <input type="text" className="form-control" 
              placeholder="电子邮箱" 
              onChange={this.handleChangeUsername} />
          </div>
          {UsernameSuccessTips}
          {UsernameErrorTips}
        </div>
        <div className={pwdDOMClz}>
          <div className="input-group">
            <span className="input-group-addon">
              <span className="glyphicon glyphicon-lock"></span>
            </span>
            <input type="password" 
              className="form-control" 
              placeholder="密码" 
              onChange={this.handleChangePwd} />
          </div>
          {PwdSuccessTips}
          {PwdErrorTips}
        </div>
        <div className="form-group">
          <button className="btn btn-lg btn-success btn-block" 
            type="button" 
            onClick={this.login}>
            <span className="glyphicon glyphicon-ok"></span> 登陆
          </button>
        </div>
      </form>
    );
  }, 
  login: function() {
    this.setState({ validFlag: true });
    if (this.state.usernameValid.isEmail && !this.state.pwdValid.isEmpty) {
      alert('success');
    }
  },
  handleChangeUsername: function(event) {
    var value = event.target.value;
    if (_.isEmpty(value)) {
      this.setState({
        username: '',
        usernameValid: { isEmpty: true }
      });
    } else {
      var isEmail = this.validUsername(value);
      this.setState({
        username: value,
        usernameValid: {
          isEmpty: false,
          isEmail: isEmail
        }
      });
    }
  },
  handleChangePwd: function(event) {
    var value = event.target.value;
    this.setState({
      pwd: value, 
      pwdValid: {
        isEmpty: _.isEmpty(value)
      }
    });
  }, 
  validUsername: function (value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
});

var formSignin = {
  maxWidth: '330px',
  padding: '15px',
  margin: '0 auto',
  borderRadius: '4px',
  backgroundColor: '#fff',
  border: '1px solid #dedede'
};
var formH2 = {
  lineHeight: '90px'
};

define(function() {
  return Login;
});
