import './footer.scss';
import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
        <div className="info container">
          <div className="col-sm-6">
            <p className="design">Design by Express Global LLC | All Rights Reserved</p>
          </div>
          <div className="col-sm-6">
            <p className="copyright">© 2015 Express Global Solutions LLC</p>
          </div>
        </div>
      </div>
		);
	}
}

export default Footer;
