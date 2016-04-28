import React from 'react';
import ReactDOM from 'react-dom';

let VerifyBox = React.createClass({
	render() {
		return (
			<form style={formSignin}>
				<div className="text-center">
					<h2 style={formH2}>验证身份</h2>
				</div>
				<div className="form-group">
					<div className="input-group">
						<span className="input-group-addon">
							<span className="glyphicon glyphicon-user"></span>
						</span>
						<input type="text" className="form-control" placeholder="淘宝订单号" />
					</div>
				</div>
				<div className="form-group">
					<div className="input-group">
						<span className="input-group-addon">
							<span className="glyphicon glyphicon-lock"></span>
						</span>
						<input type="text" className="form-control" placeholder="验证码" />
					</div>
				</div>
				<div className="form-group">
					<button className="btn btn-lg btn-success btn-block" type="button">
						<span className="glyphicon glyphicon-ok"></span> 提交
					</button>
				</div>
			</form>
		);
	},
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

// Usage: <VerifyBox />
export default VerifyBox;
