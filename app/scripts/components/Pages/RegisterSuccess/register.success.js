import React, { Component } from 'react';

class RegisterSuccess extends Component {
	render() {
		return (
			<div className="register success">
				<h2>Successfully registered</h2>
				<p>Your registration form is successfully submitted. An automated email will be sent to {this.props.params.email} which will include further details.</p>
			</div>
		);
	}
}

export default RegisterSuccess;
