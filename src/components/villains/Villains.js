import React, { Component } from 'react';
import axios from 'axios'
import './Villains.css'

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
		axios.get("https://marvelcu.herokuapp.com/api/villains").then((results) => {
			this.setState({
				villains: results
			})
		})
	}


  render() {

  	let listOfVillains = this.state.villains.data.map((villainObject, index) => {
  		return <li className="villainObject" key = {index}>
  				<img className="villainImage" width="200" src={villainObject.image}/>
  				<h4 className="villainName">{villainObject.supername}</h4>
  				</li>
  	})

    return (
    	<div>
			<h2 className="villainTitle">Villains page!!!</h2>
      		<ul> {listOfVillains} </ul>
    	</div>
      
    );
  }
}

export default Villains;