import React, { Component } from 'react';
import axios from 'axios';
import './Places.css';
import Location from '../location/Location';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

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
  				<Location
  				image={placeObject.image}
  				name={placeObject.name}
  				where={placeObject.where}
  				summary={placeObject.summary}
  				events={placeObject.events}
  				/>
  				</li>
  	})

    return (
      <div className="placesBackground">
			<img className="placeTitle" src="http://www.atomcreativemedia.com/wp-content/uploads/2017/02/marvel-studios-logo-design.jpg"/>
      		<div className="placeContainer">
      			<ul> {listOfPlaces} </ul>
    		</div>

    		<hr/>

    		<div className="newHeroTitle">
            	<h2>Add a new Place:</h2>
          	</div>
          	
    		<div className="newHero">
          	<hr/>
            <Form horizontal onSubmit={this.onFormSubmit}>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Name: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Name" onChange={this.onNameChange} value={this.state.newName}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Where: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Abilities" onChange={this.onAbilitiesChange} value={this.state.newAbilities}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Summary 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Abilities" onChange={this.onAbilitiesChange} value={this.state.newAbilities}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Events: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Summary" onChange={this.onSummaryChange} value={this.state.newSummary}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Image: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Image URL" onChange={this.onImageChange} value={this.state.newImage}/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Create</Button>
                </Col>
              </FormGroup>
            </Form>;
          </div>
          <hr/>
    	</div>
    );
  }
}

export default Places;