import React, { Component } from 'react';
import axios from 'axios';

class Places extends Component {
	constructor() {
		super()
		this.state = {
			places: {
				data: []
			}
		}
	}

	componentDidMount() {
		axios.get("/api/places").then((results) => {
			this.setState({
				places: results
			})
		})
	}

  render() {

  	let listOfPlaces = this.state.places.data.map((placeObject, index) => {
  		return <li key = {index}>
  				<h4>{placeObject.name}</h4>
  				</li>
  	})

    return (
      <div>
			<h2>Places page!!!</h2>
      		<ul> {listOfPlaces} </ul>
    	</div>
    );
  }
}

export default Places;