import React, { Component } from 'react';
import Header from './components/header/Header';
import MyRoutes from './config/Routes'
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        { MyRoutes }
      </div>
    );
  }
}

export default App;
