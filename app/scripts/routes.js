import React from 'react';
import createHashHistory from 'history/lib/createHashHistory'
import { Router, IndexRoute, Route } from 'react-router';
import { App, Login, Register } from './components';
import { RegisterSuccess } from './components';

const routes = (
	<Router history={createHashHistory({query: false})}>
		<Route path="/" component={App}>
	    <IndexRoute component={Login} />
	    <Route path="register" component={Register} />
	    <Route path="register_success/:email" component={RegisterSuccess} />
	  </Route>
	</Router>
);

export default routes;
