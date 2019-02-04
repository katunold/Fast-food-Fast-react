import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../app/app';
import { Index } from '../privateRoute';
import Authentication from "../containers/auth";

const Routes = () => (
	<Router>
		<Switch>
			<Route component={Authentication} path="/signUp" exact />
			<Route component={Authentication} path="/login" exact />
			<Route component={App} path="/home" exact />
			<Index component={App} path="/" exact />
		</Switch>
	</Router>
);

export default Routes;
