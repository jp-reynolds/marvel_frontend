import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './Heroes.css'
//import a new Hero componenant 

class Heroes extends Component {

	constructor() {
		super()
		this.state = {
			heroes: {
				data: []
			}
		}
	};

	componentDidMount() {
		axios.get("https://marvelcu.herokuapp.com/api/heroes").then((results) => {
			this.setState({
				heroes: results
			})
		})
	}



  render() {
  	//pass props through a router link, or get state 
  	//instead of links pass the new component with its props and state into here and then when you click the link 
  	//it will render the hero component which is dynamic based on the information associated with the 

  	//let heroDetails = this.state.heroes.data. (custom hero name based on click)

  	let listOfHeroes = this.state.heroes.data.map((heroObject, index) => {
  		return <li className="heroObject" key = {index}>
  					<Link to={`/heroes/${heroObject.supername}`} hero={heroObject}> 
  						<img className="heroImage" width="200" src={heroObject.image}/>
  					</Link>
  					<h4 className="heroName">{heroObject.supername}</h4>
  				</li>
  	})



  	//instead of passing in a list of heroes add a component and pass props into it, then in the component
  	//render just the name and 
    return (
    	<div>
    		<h2 className="heroTitle">Super hero page!!!</h2>
      		<ul> {listOfHeroes} </ul>
    	</div>
      
    );
  }
}

export default Heroes;

