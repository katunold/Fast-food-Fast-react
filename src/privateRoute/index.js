import jwtDecode from 'jwt-decode';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TOKEN } from '../constants';

export const Authenticate = {
	isAuthenticated() {
		try {
			let token = localStorage.getItem(TOKEN);
			token = jwtDecode(token);
			return token && token.id;
		} catch (e) {
			return false;
		}
	}
};

export const Index = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={
			props => (
				Authenticate.isAuthenticated() === true
					? <Component {...props} /> : (
						<Redirect
							to={{
								pathname: '/home',
								state: { from: props.location }
							}}
						/>
					)
			)
		}
	/>
);

