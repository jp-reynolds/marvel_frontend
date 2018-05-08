import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <h1>Marvel</h1>
          <Link to={'/'}>Home </Link>
          <Link to={'/'}> Heroes</Link>
        </header>
    );
  }
}

export default Header;