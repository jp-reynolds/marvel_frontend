import React, { Component } from 'react';
import axios from 'axios'
import './Heroes.css'

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

  	let listOfHeroes = this.state.heroes.data.map((heroObject, index) => {
  		return <li className="heroObject" key = {index}>
  				<img className="heroImage" width="200" src={heroObject.image}/>
  				<h4 className="heroName">{heroObject.supername}</h4>
  				</li>
  	})



    return (
    	<div>
    		<h2 className="heroTitle">Super hero page!!!</h2>
      		<ul> {listOfHeroes} </ul>
    	</div>
      
    );
  }
}

export default Heroes;