import jwtDecode from 'jwt-decode';
import {TOKEN} from "../constants";
import React from "react";
import {Redirect, Route} from "react-router-dom";

export const Authenticate = {
    isAuthenticated() {
        try {
            let token = localStorage.getItem(TOKEN);
            token = jwtDecode(token);
            return token && token.id;
        }catch (e) {
            return false;
        }
    }
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render = {
            props => (
                Authenticate.isAuthenticated() === true
                    ? <Component {...props}/> : (
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

