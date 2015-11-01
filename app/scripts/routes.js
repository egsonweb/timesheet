import React from 'react';
import createHashHistory from 'history/lib/createHashHistory'
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/app';
import Login from './components/login';
import Register from './components/register';

const routes = (
	<Router history={createHashHistory({query: false})}>
		<Route path="/" component={App}>
	    <IndexRoute component={Login} />
	    <Route path="register" component={Register} />
	  </Route>
	</Router>
);

export default routes;
