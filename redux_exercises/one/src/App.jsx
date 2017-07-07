import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store.js';

import logo from './logo.svg';
import './App.css';
import myfrom from './myform.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <myform />
        <Provider store={store}>
        </Provider>
      </div>
    );
  }
}

export default App;
