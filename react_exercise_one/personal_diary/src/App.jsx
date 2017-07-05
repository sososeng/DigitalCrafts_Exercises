import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MyForm from './myform';
import Diary from './diary';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {auth} from './fsociety.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open:false};
  }
  handleTouchMap() {
     this.setState({open: !this.state.open});
   }

   login () {
   auth()
     .then(function (user) {
       console.log(user);
     })
     .catch(function (e) {
       console.log(e);
     });
   }
   
  render() {
    return (
      <MuiThemeProvider>



      <BrowserRouter>

          <div>

            <AppBar title="Personal Diary" onLeftIconButtonTouchTap = { this.handleTouchMap.bind(this)} />
            <button onClick={this.login()}>Login</button>
            <Drawer open={this.state.open} docked={false}>
              <AppBar iconElementRight={<IconButton><NavigationClose /></IconButton>} onTouchTap={this.handleTouchMap.bind(this)} showMenuIconButton = {false}/>

              <MenuItem onTouchTap={this.handleTouchMap.bind(this)} containerElement={<Link to="/" />}>Write</MenuItem>
              <MenuItem onTouchTap={this.handleTouchMap.bind(this)} containerElement={<Link to="/diary" />} >My Diary</MenuItem>
            </Drawer>

            <Route exact path="/" component={MyForm}/>
            <Route path="/diary" component={Diary}/>
          </div>


      </BrowserRouter>

      </MuiThemeProvider>
    );
  }
}
export default App;
