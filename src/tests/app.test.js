import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import store from '../redux/store';
import Routes from '../routes';
import AppTheme from '../static/themes';

describe('App component', () => {

		it('its pretty', () => {
				mount(
						<MuiThemeProvider theme={AppTheme}>
								<Provider store={store}>
										<Routes />
								</Provider>
						</MuiThemeProvider>
				);
		});
});
