import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import MyForm from './myform'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {red400} from 'material-ui/styles/colors';


const theme = getMuiTheme({
  palette: {primary1Color: red400}
});


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <MyForm/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
