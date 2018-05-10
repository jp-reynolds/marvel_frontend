import React, { Component } from 'react';
import axios from 'axios';
import './Places.css';

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
		axios.get("https://marvelcu.herokuapp.com/api/places").then((results) => {
			this.setState({
				places: results
			})
		})
	}

  render() {

  	let listOfPlaces = this.state.places.data.map((placeObject, index) => {
  		return <li className="placeObject" key = {index}>
  				<img className="placeImage" src={placeObject.image}/>
  				<h4 className="placeName">{placeObject.name}</h4>
  				</li>
  	})

    return (
      <div>
			<h2 className="placeTitle">Places page!!!</h2>
      		<ul> {listOfPlaces} </ul>
    	</div>
    );
  }
}

export default Places;