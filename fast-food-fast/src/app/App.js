import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import ButtonAppBar from "./appNavBar";
import AppTheme from "../static/themes";

const App = () => (
    <MuiThemeProvider theme={AppTheme}>
      <ButtonAppBar/>
    </MuiThemeProvider>
);

export default App;