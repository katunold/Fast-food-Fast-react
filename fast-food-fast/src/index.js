import ReactDOM from 'react-dom';
import './static/styles/index.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppTheme from "./static/themes";
import Routes from "./routes";

ReactDOM.render(
    <MuiThemeProvider theme={AppTheme}>
        <Provider store={store}>
            <Routes />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);