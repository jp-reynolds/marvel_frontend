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
	  		<Nav pullRight>
	    		<NavItem className="heroes" eventKey={1} href='/heroes'>
	      			Heroes
	    		</NavItem>
	    		<NavItem className="villains" eventKey={2} href='/villains'>
	     			Villains
	    		</NavItem>
	    		<NavItem className="locations" eventKey={3} href='/places'>
	      			Locations
	    		</NavItem>
	  		</Nav>
		</Navbar>
    );
  }
}

export default Header;