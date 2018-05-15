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
			},
      newName: "",
      newWhere: "",
      newSummary: "",
      newEvents: "",
      newImage: "",
		};

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onWhereChange = this.onWhereChange.bind(this)
    this.onSummaryChange = this.onSummaryChange.bind(this)
    this.onEventsChange = this.onEventsChange.bind(this)
    this.onImageChange = this.onImageChange.bind(this)
    this.axiosCallback = this.axiosCallback.bind(this)
	}

	componentDidMount() {
		//https://marvelcu.herokuapp.com/api/places
		axios.get("https://marvelcu.herokuapp.com/api/places").then((results) => {
			this.setState({
				places: results
			});
		});
	}
//---------------------------------------------------
  
  axiosCallback(results) {
    let newData = this.state.places.data
    newData.push(results.data)
    this.setState({
      newName: "",
      newWhere: "",
      newSummary: "",
      newEvents: "",
      newImage: "",
      places: {
        data: newData
      }
    })

  }

  onFormSubmit(event) {
    event.preventDefault()
    let newPlace = {
      name : this.state.newName,
      where : this.state.newWhere,
      summary: this.state.newSummary,
      events: this.state.newEvents,
      image: this.state.newImage
    }
    //https://marvelcu.herokuapp.com/api/places
    axios.post("https://marvelcu.herokuapp.com/api/places", newPlace).then(this.axiosCallback)

  }


  onNameChange(event){
    this.setState({
      newName : event.target.value,
      newWhere: this.state.newWhere,
      newSummary: this.state.newSummary,
      newEvents: this.state.newEvents,
      newImage: this.state.newImage
    });
  }

  onWhereChange(event){
    this.setState({
      newName : this.state.newName,
      newWhere: event.target.value,
      newSummary: this.state.newSummary,
      newEvents: this.state.newEvents,
      newImage: this.state.newImage
    });
  }

  onSummaryChange(event){
    this.setState({
      newName : this.state.newName,
      newWhere: this.state.newWhere,
      newSummary: event.target.value,
      newEvents: this.state.newEvents,
      newImage: this.state.newImage
    });
  }

  onEventsChange(event){
    this.setState({
      newName : this.state.newName,
      newWhere: this.state.newWhere,
      newSummary: this.state.newSummary,
      newEvents: event.target.value,
      newImage: this.state.newImage
    });
  }

  onImageChange(event){
    this.setState({
      newName : this.state.newName,
      newWhere: this.state.newWhere,
      newSummary: this.state.newSummary,
      newEvents: this.state.newEvents,
      newImage: event.target.value
    });
  }




//------------------------------------------------------------------------
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
			<img className="placeTitle" src="https://i.imgur.com/pr7PIDs.jpg"/>
      	<div className="placeContainer">
      		<ul> {listOfPlaces} </ul>
    		</div>

    		<hr/>

    		<div className="newHeroTitle">
            	<h2>Add a new Place:</h2>
        </div>

    		<div className="newPlace">
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
                  <FormControl type="text" placeholder="Where" onChange={this.onWhereChange} value={this.state.newWhere}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Summary 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Summary" onChange={this.onSummaryChange} value={this.state.newSummary}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Events: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Events" onChange={this.onEventsChange} value={this.state.newEvents}/>
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