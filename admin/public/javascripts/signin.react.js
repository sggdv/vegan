var _ = {
  isEmpty: function (value) {
    return !value && value == '';
  }
};

var SignInBox = React.createClass({
  displayName: 'SignInBox',

  getInitialState: function () {
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
  render: function () {
    var UsernameErrorTips;
    var UsernameSuccessTips;
    var PwdErrorTips;
    var PwdSuccessTips;

    var usernameDOMClz = 'form-group';
    var pwdDOMClz = 'form-group';

    if (this.state.validFlag) {
      if (this.state.usernameValid.isEmpty) {
        usernameDOMClz = 'form-group has-error has-feedback';
        UsernameErrorTips = React.createElement(
          'div',
          null,
          React.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback' }),
          React.createElement(
            'p',
            { className: 'help-block' },
            '电子邮箱必填！'
          )
        );
      } else if (!this.state.usernameValid.isEmail) {
        usernameDOMClz = 'form-group has-error has-feedback';
        UsernameErrorTips = React.createElement(
          'div',
          null,
          React.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback' }),
          React.createElement(
            'p',
            { className: 'help-block' },
            '请输入有效的邮箱！'
          )
        );
      } else {
        usernameDOMClz = 'form-group has-success has-feedback';
        UsernameSuccessTips = React.createElement('span', { className: 'glyphicon glyphicon-ok form-control-feedback' });
      }

      if (this.state.pwdValid.isEmpty) {
        pwdDOMClz = 'form-group has-error has-feedback';
        PwdErrorTips = React.createElement(
          'div',
          null,
          React.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback' }),
          React.createElement(
            'p',
            { className: 'help-block' },
            '密码必填'
          )
        );
      } else {
        pwdDOMClz = 'form-group has-success has-feedback';
        PwdSuccessTips = React.createElement('span', { className: 'glyphicon glyphicon-ok form-control-feedback' });
      }
    }

    return React.createElement(
      'form',
      { style: formSignin },
      React.createElement(
        'div',
        { className: 'text-center' },
        React.createElement(
          'h2',
          { style: formH2 },
          this.props.title
        )
      ),
      React.createElement(
        'div',
        { className: usernameDOMClz },
        React.createElement(
          'div',
          { className: 'input-group' },
          React.createElement(
            'span',
            { className: 'input-group-addon' },
            React.createElement('span', { className: 'glyphicon glyphicon-user' })
          ),
          React.createElement('input', { type: 'text', className: 'form-control',
            placeholder: '电子邮箱',
            onChange: this.handleChangeUsername })
        ),
        UsernameSuccessTips,
        UsernameErrorTips
      ),
      React.createElement(
        'div',
        { className: pwdDOMClz },
        React.createElement(
          'div',
          { className: 'input-group' },
          React.createElement(
            'span',
            { className: 'input-group-addon' },
            React.createElement('span', { className: 'glyphicon glyphicon-lock' })
          ),
          React.createElement('input', { type: 'password',
            className: 'form-control',
            placeholder: '密码',
            onChange: this.handleChangePwd })
        ),
        PwdSuccessTips,
        PwdErrorTips
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'button',
          { className: 'btn btn-lg btn-success btn-block',
            type: 'button',
            onClick: this.signin },
          React.createElement('span', { className: 'glyphicon glyphicon-ok' }),
          ' 登陆'
        )
      )
    );
  },
  signin: function () {
    this.setState({ validFlag: true });
    if (this.state.usernameValid.isEmail && !this.state.pwdValid.isEmpty) {
      jQuery.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3002/signin',
        data: {
          username: this.state.username,
          pwd: this.state.pwd
        },
        dataType: 'json',
        success: function (data) {
          // TODO 实现
          window.location.href = 'dashboard.html';
        }
      });
    }
  },
  handleChangeUsername: function (event) {
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
  handleChangePwd: function (event) {
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

ReactDOM.render(React.createElement(SignInBox, { title: '登陆Vegan' }), document.getElementById('example'));