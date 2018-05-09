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
      				<a href="/">A</a>
    			</Navbar.Brand>
  			</Navbar.Header>
	  		<Nav>
	    		<NavItem className="heroes" eventKey={1} href="/heroes" pullRight>
	      			Heroes
	    		</NavItem>
	    		<NavItem className="villains" eventKey={2} href="/villains" pullRight>
	     			Villains
	    		</NavItem>
	    		<NavItem className="locations" eventKey={3} href="/places" pullRight>
	      			Locations
	    		</NavItem>
	  		</Nav>
		</Navbar>
    );
  }
}

export default Header;