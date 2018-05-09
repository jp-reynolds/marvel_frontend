import React, { Component } from 'react';
import axios from 'axios'

class Villains extends Component {

	constructor() {
		super()
		this.state = {
			villains: {
				data: []
			}
		}
	}

	componentDidMount() {
		axios.get("/api/villains").then((results) => {
			this.setState({
				villains: results
			})
		})
	}


  render() {

  	let listOfVillains = this.state.villains.data.map((villainObject, index) => {
  		return <li key = {index}>
  				<h4>{villainObject.supername}</h4>
  				</li>
  	})

    return (
    	<div>
			<h2>Villains page!!!</h2>
      		<ul> {listOfVillains} </ul>
    	</div>
      
    );
  }
}

export default Villains;