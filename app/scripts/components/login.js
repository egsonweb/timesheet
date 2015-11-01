import './login.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
	render() {
		return (
			<div className="login">
				<h2>Login</h2>
				<form className="login-form">
				  <div className="form-group">
				    <label htmlFor="email">Email address</label>
				    <input type="email" className="form-control" id="email" placeholder="Email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="password">Password</label>
				    <input type="password" className="form-control" id="password" placeholder="Password" />
				  </div>
				  <div className="row">
				  	<div className="col-sm-6">
							<button type="submit" className="btn btn-primary">Login</button>
				  	</div>
				  	<div className="col-sm-6">
							<p className="register-link"><Link to="/register">Please register here</Link></p>
				  	</div>
				  </div>
				</form>
			</div>
		);
	}
}

export default Login
