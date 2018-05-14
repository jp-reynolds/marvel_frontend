import React, { Component } from 'react';
import axios from 'axios';
import './Villains.css';
import Character from '../character/Character';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Villains extends Component {
	constructor() {
		super()
		this.state = {
			villains: {
				data: []
			},
			newVillain: "",
	        newName: "",
	        newAbilities: "",
	        newSummary: "", 
	        newAllies: "",
	        newFoes: "",
	        newQuote: "",
	        newImage: "",
		};

		this.onFormSubmit = this.onFormSubmit.bind(this)
	    this.onVillainChange = this.onVillainChange.bind(this)
	    this.onNameChange = this.onNameChange.bind(this)
	    this.onAbilitiesChange = this.onAbilitiesChange.bind(this)
	    this.onSummaryChange = this.onSummaryChange.bind(this)
	    this.onAlliesChange = this.onAlliesChange.bind(this)
	    this.onFoesChange = this.onFoesChange.bind(this)
	    this.onQuoteChange = this.onQuoteChange.bind(this)
	    this.onImageChange = this.onImageChange.bind(this)
	    this.axiosCallback = this.axiosCallback.bind(this)
	}

	componentDidMount() {
		//https://marvelcu.herokuapp.com/api/villains
		axios.get("https://marvelcu.herokuapp.com/api/villains").then((results) => {
			this.setState({
				villains: results
			})
		})
	}
//--------------------------------------------------

	axiosCallback(results) {
	    let newData = this.state.villains.data
	    newData.push(results.data)
	    this.setState({
	      newVillain : "",
	      newName : "",
	      newAbilities : "",
	      newSummary: "",
	      newAllies: "",
	      newFoes: "",
	      newQuote: "",
	      newImage: "",
	      villains : {
	        data : newData
	      }
	    })
	  }

	onFormSubmit(event) {
	    event.preventDefault()
	    let newVillain = {
	      supername : this.state.newVillain,
	      name : this.state.newName,
	      abilities : this.state.newAbilities,
	      summary: this.state.newSummary,
	      allies: this.state.newAllies,
	      foes: this.state.newFoes,
	      quote: this.state.newQuote,
	      image: this.state.newImage,
	      organization: "villain"
	    }
	    //https://marvelcu.herokuapp.com/api/characters
	    axios.post("https://marvelcu.herokuapp.com/api/characters", newVillain).then(this.axiosCallback)
	  }

	onVillainChange(event){
		this.setState({
		  villains : this.state.villains,
		  newVillain : event.target.value,
		  newName : this.state.newName,
		  newAbilities : this.state.newAbilities,
		  newSummary: this.state.newSummary,
		  newAllies: this.state.newAllies,
		  newFoes: this.state.newFoes,
		  newQuote: this.state.newQuote,
		  newImage: this.state.newImage
		})
	}

	onNameChange(event){
		this.setState({
		  villains : this.state.villains,
		  newVillain : this.state.newVillain,
		  newName : event.target.value,
		  newAbilities : this.state.newAbilities,
		  newSummary: this.state.newSummary,
		  newAllies: this.state.newAllies,
		  newFoes: this.state.newFoes,
		  newQuote: this.state.newQuote,
		  newImage: this.state.newImage
		})
	}

  onAbilitiesChange(event){
    this.setState({
      villains : this.state.villains,
      newVillain : this.state.newVillain,
      newName : this.state.newName,
      newAbilities : event.target.value,
      newSummary: this.state.newSummary,
      newAllies: this.state.newAllies,
      newFoes: this.state.newFoes,
      newQuote: this.state.newQuote,
      newImage: this.state.newImage
    })
  }

  onSummaryChange(event){
    this.setState({
      villains : this.state.villains,
      newVillain : this.state.newVillain,
      newName : this.state.newName,
      newAbilities : this.state.newAbilities,
      newSummary: event.target.value,
      newAllies: this.state.newAllies,
      newFoes: this.state.newFoes,
      newQuote: this.state.newQuote,
      newImage: this.state.newImage
    })
  }

  onAlliesChange(event){
    this.setState({
      villains : this.state.villains,
      newVillain : this.state.newVillain,
      newName : this.state.newName,
      newAbilities : this.state.newAbilities,
      newSummary: this.state.newSummary,
      newAllies: event.target.value,
      newFoes: this.state.newFoes,
      newQuote: this.state.newQuote,
      newImage: this.state.newImage
    })
  }

  onFoesChange(event){
    this.setState({
      villains : this.state.villains,
      newVillain : this.state.newVillain,
      newName : this.state.newName,
      newAbilities : this.state.newAbilities,
      newSummary: this.state.newSummary,
      newAllies: this.state.newAllies,
      newFoes: event.target.value,
      newQuote: this.state.newQuote,
      newImage: this.state.newImage
    })
  }

  onQuoteChange(event){
    this.setState({
      villains : this.state.villains,
      newVillain : this.state.newVillain,
      newName : this.state.newName,
      newAbilities : this.state.newAbilities,
      newSummary: this.state.newSummary,
      newAllies: this.state.newAllies,
      newFoes: this.state.newFoes,
      newQuote: event.target.value,
      newImage: this.state.newImage
    })
  }

  onImageChange(event){
    this.setState({
      villains : this.state.villains,
      newVillain : this.state.newVillain,
      newName : this.state.newName,
      newAbilities : this.state.newAbilities,
      newSummary: this.state.newSummary,
      newAllies: this.state.newAllies,
      newFoes: this.state.newFoes,
      newQuote: this.state.newQuote,
      newImage: event.target.value
    })
  }

//----------------------------------------------------------------------
  render() {

  	let listOfVillains = this.state.villains.data.map((villainObject, index) => {
  		return <li className="villainObject" key = {index}>
  				<Character
  					image={villainObject.image}
                    supername={villainObject.supername} 
                    name={villainObject.name}
                    abilities={villainObject.abilities}
                    summary={villainObject.summary}
                    allies={villainObject.allies}
                    foes={villainObject.foes}
                    quote={villainObject.quote}
  				/>
  				</li>
  	})

    return (
    	<div className="villainBackground">
			<img className="villainTitle" src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/9e42617f5b005f883c5593b02c7c63f6/ae5dfd464f8ecb3bed36814a_rw_1200.jpg?h=6f6e67aab91563c6812b9da1f654fe39"/>
			<div className="villainContainer">
				<ul> {listOfVillains} </ul>
			</div>
			<hr/>
          <div className="newVillainTitle">
            <h2>Add a new Villain:</h2>
          </div>
          <div className="newVillain">
          <hr/>
            <Form horizontal onSubmit={this.onFormSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Villain: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Villain" onChange={this.onVillainChange} value={this.state.newVillain}/>
                </Col>
              </FormGroup>
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
                  Abilities: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Abilities" onChange={this.onAbilitiesChange} value={this.state.newAbilities}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Summary: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Summary" onChange={this.onSummaryChange} value={this.state.newSummary}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Allies: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Allies" onChange={this.onAlliesChange} value={this.state.newAllies}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Foes: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Foes" onChange={this.onFoesChange} value={this.state.newFoes}/>
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Quote: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Quote" onChange={this.onQuoteChange} value={this.state.newQuote}/>
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

export default Villains;