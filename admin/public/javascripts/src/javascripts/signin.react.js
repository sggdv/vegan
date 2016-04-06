var _this = this;

let _ = {
  isEmpty: value => {
    return value && value != '';
  }
};

var SignInBox = React.createClass({
  displayName: 'SignInBox',

  getInitialState: () => {
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
  render: () => {
    let UsernameErrorTips;
    let UsernameSuccessTips;
    let PwdErrorTips;
    let PwdSuccessTips;

    let usernameDOMClz = 'form-group';
    let pwdDOMClz = 'form-group';

    if (_this.state.validFlag) {
      if (_this.state.usernameValid.isEmpty) {
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
      } else if (!_this.state.usernameValid.isEmail) {
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

      if (_this.state.pwdValid.isEmpty) {
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
          '用户登陆'
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
            onChange: _this.handleChangeUsername })
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
            onChange: _this.handleChangePwd })
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
            onClick: _this.signin },
          React.createElement('span', { className: 'glyphicon glyphicon-ok' }),
          ' 登陆'
        )
      )
    );
  },
  signin: () => {
    _this.setState({ validFlag: true });
    if (_this.state.usernameValid.isEmail && !_this.state.pwdValid.isEmpty) {
      alert('success');
    }
  },
  handleChangeUsername: event => {
    let value = event.target.value;
    if (_.isEmpty(value)) {
      _this.setState({
        username: '',
        usernameValid: { isEmpty: true }
      });
    } else {
      let isEmail = _this.validUsername(value);
      _this.setState({
        username: value,
        usernameValid: {
          isEmpty: false,
          isEmail: isEmail
        }
      });
    }
  },
  handleChangePwd: event => {
    let value = event.target.value;
    _this.setState({
      pwd: value,
      pwdValid: {
        isEmpty: _.isEmpty(value)
      }
    });
  },
  validUsername: value => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
});

let formSignin = {
  maxWidth: '330px',
  padding: '15px',
  margin: '0 auto',
  borderRadius: '4px',
  backgroundColor: '#fff',
  border: '1px solid #dedede'
};
let formH2 = {
  lineHeight: '90px'
};

ReactDOM.render(React.createElement(SignInBox, null), document.getElementById('example'));