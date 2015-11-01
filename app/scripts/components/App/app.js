import './app.scss';

import React, { Component } from 'react';
import { Header, Footer } from '../../common';

class App extends Component {
  render() {
    return (
    	<div className="app">
        <Header />
        <div className="content">
        	<div className="container">
        		{this.props.children}
        	</div>
        </div>
        <Footer />
    	</div>
  	);
  }
}

export default App;
