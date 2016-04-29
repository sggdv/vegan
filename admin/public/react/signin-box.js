'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = {
  isEmpty: function isEmpty(value) {
    return !value && value == '';
  }
};

var SignInBox = _react2.default.createClass({
  displayName: 'SignInBox',
  getInitialState: function getInitialState() {
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
  render: function render() {
    var UsernameErrorTips = void 0;
    var UsernameSuccessTips = void 0;
    var PwdErrorTips = void 0;
    var PwdSuccessTips = void 0;

    var usernameDOMClz = 'form-group';
    var pwdDOMClz = 'form-group';

    if (this.state.validFlag) {
      if (this.state.usernameValid.isEmpty) {
        usernameDOMClz = 'form-group has-error has-feedback';
        UsernameErrorTips = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback' }),
          _react2.default.createElement(
            'p',
            { className: 'help-block' },
            '电子邮箱必填！'
          )
        );
      } else if (!this.state.usernameValid.isEmail) {
        usernameDOMClz = 'form-group has-error has-feedback';
        UsernameErrorTips = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback' }),
          _react2.default.createElement(
            'p',
            { className: 'help-block' },
            '请输入有效的邮箱！'
          )
        );
      } else {
        usernameDOMClz = 'form-group has-success has-feedback';
        UsernameSuccessTips = _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok form-control-feedback' });
      }

      if (this.state.pwdValid.isEmpty) {
        pwdDOMClz = 'form-group has-error has-feedback';
        PwdErrorTips = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove form-control-feedback' }),
          _react2.default.createElement(
            'p',
            { className: 'help-block' },
            '密码必填'
          )
        );
      } else {
        pwdDOMClz = 'form-group has-success has-feedback';
        PwdSuccessTips = _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok form-control-feedback' });
      }
    }

    return _react2.default.createElement(
      'form',
      { style: formSignin },
      _react2.default.createElement(
        'div',
        { className: 'text-center' },
        _react2.default.createElement(
          'h2',
          { style: formH2 },
          this.props.title
        )
      ),
      _react2.default.createElement(
        'div',
        { className: usernameDOMClz },
        _react2.default.createElement(
          'div',
          { className: 'input-group' },
          _react2.default.createElement(
            'span',
            { className: 'input-group-addon' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-user' })
          ),
          _react2.default.createElement('input', { type: 'text', className: 'form-control',
            placeholder: '电子邮箱',
            onChange: this.handleChangeUsername })
        ),
        UsernameSuccessTips,
        UsernameErrorTips
      ),
      _react2.default.createElement(
        'div',
        { className: pwdDOMClz },
        _react2.default.createElement(
          'div',
          { className: 'input-group' },
          _react2.default.createElement(
            'span',
            { className: 'input-group-addon' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-lock' })
          ),
          _react2.default.createElement('input', { type: 'password',
            className: 'form-control',
            placeholder: '密码',
            onChange: this.handleChangePwd })
        ),
        PwdSuccessTips,
        PwdErrorTips
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement(
          'button',
          { className: 'btn btn-lg btn-success btn-block',
            type: 'button',
            onClick: this.signin },
          _react2.default.createElement('span', { className: 'glyphicon glyphicon-ok' }),
          ' 登陆'
        )
      )
    );
  },
  signin: function signin() {
    this.setState({ validFlag: true });
    if (this.state.usernameValid.isEmail && !this.state.pwdValid.isEmpty) {
      _jquery2.default.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3002/signin',
        data: {
          username: this.state.username,
          pwd: this.state.pwd
        },
        dataType: 'json',
        success: function success(data) {
          // TODO 实现
          window.location.href = 'dashboard.html';
        }
      });
    }
  },
  handleChangeUsername: function handleChangeUsername(event) {
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
  handleChangePwd: function handleChangePwd(event) {
    var value = event.target.value;
    this.setState({
      pwd: value,
      pwdValid: {
        isEmpty: _.isEmpty(value)
      }
    });
  },
  validUsername: function validUsername(value) {
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

exports.default = SignInBox;