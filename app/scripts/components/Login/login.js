import './login.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
	render() {
		return (
			<div className="login">
				<form className="login-form">
				  <div className="form-group">
				    <input type="email" className="form-control" id="email" placeholder="Email" />
				  </div>
				  <div className="form-group">
				    <input type="password" className="form-control" id="password" placeholder="Password" />
				  </div>
				  <div className="row">
				  	<div className="col-sm-6">
							<p className="fp-link"><Link to="/register">Forgot password?</Link></p>
				  	</div>
				  	<div className="clearfix col-sm-6">
							<button type="submit" className="btn btn-primary">Login</button>
				  	</div>
				  </div>
				</form>
			</div>
		);
	}
}

export default Login
