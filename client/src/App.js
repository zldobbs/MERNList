import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import MyList from './components/MyList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar></AppNavbar>
        <MyList></MyList>
      </div>
    );
  }
}

export default App;
