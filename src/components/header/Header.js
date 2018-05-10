import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <Navbar>
  			<Navbar.Header>
    			<Navbar.Brand>
      				<Link to={'/'}>Home</Link>
    			</Navbar.Brand>
  			</Navbar.Header>
	  		<Nav>
	    		<NavItem className="heroes" eventKey={1}>
	      			<Link to={'/heroes'}>Heroes </Link>
	    		</NavItem>
	    		<NavItem className="villains" eventKey={2}>
	     			<Link to={'/villains'}>Villains </Link>
	    		</NavItem>
	    		<NavItem className="locations" eventKey={3}>
	      			<Link to={'/places'}>Places </Link>
	    		</NavItem>
	  		</Nav>
		</Navbar>
    );
  }
}

export default Header;