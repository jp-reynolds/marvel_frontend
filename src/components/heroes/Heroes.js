import React, { Component } from 'react';
import axios from 'axios'

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
		axios.get("/api/heroes").then((results) => {
			this.setState({
				heroes: results
			})
		})
	}



  render() {

  	let listOfHeroes = this.state.heroes.data.map((heroObject, index) => {
  		return <li key = {index}>
  				<h4>{heroObject.supername}</h4>
  				</li>
  	})



    return (
    	<div>
    		<h2>Super hero page!!!</h2>
      		<ul> {listOfHeroes} </ul>
    	</div>
      
    );
  }
}

export default Heroes;