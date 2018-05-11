import React, { Component } from 'react';
import axios from 'axios'
import './Heroes.css'
import Character from '../character/Character';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap'

//import a new Hero componenant 

class Heroes extends Component {

	constructor() {
		super()
		this.state = {
  			heroes: {
  				data: []
  			},
        newSuperhero: "",
        newName: "",
        newAbilities: "",
        newSummary: "", 
        newAllies: "",
        newFoes: "",
        newQuote: "",
        newImage: "",
		};

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onSuperheroChange = this.onSuperheroChange.bind(this)
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
		axios.get("https://marvelcu.herokuapp.com/api/heroes").then((results) => {
			this.setState({
				heroes: results
			})
		})
	}

//--------------------------------------------------------------------
  axiosCallback(results) {
    let newData = this.state.heroes.data
    newData.push(results.data)
    this.setState({
      newSuperhero : "",
      newName : "",
      newAbilities : "",
      newSummary: "",
      newAllies: "",
      newFoes: "",
      newQuote: "",
      newImage: "",
      heroes : {
        data : newData
      }
    })
  }

  onFormSubmit(event) {
    event.preventDefault()
    let newHero = {
      supername : this.state.newSuperhero,
      name : this.state.newName,
      abilities : this.state.newAbilities,
      summary: this.state.newSummary,
      allies: this.state.newAllies,
      foes: this.state.newFoes,
      quote: this.state.newQuote,
      image: this.state.newImage,
      organization: "avengers"
    }

    axios.post("https://marvelcu.herokuapp.com/api/characters", newHero).then(this.axiosCallback)
  }

  onSuperheroChange(event){
    this.setState({
      heroes : this.state.heroes,
      newSuperhero : event.target.value,
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
      heroes : this.state.heroes,
      newSuperhero : this.state.newSuperhero,
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
      heroes : this.state.heroes,
      newSuperhero : this.state.newSuperhero,
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
      heroes : this.state.heroes,
      newSuperhero : this.state.newSuperhero,
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
      heroes : this.state.heroes,
      newSuperhero : this.state.newSuperhero,
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
      heroes : this.state.heroes,
      newSuperhero : this.state.newSuperhero,
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
      heroes : this.state.heroes,
      newSuperhero : this.state.newSuperhero,
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
      heroes : this.state.heroes,
      newSuperhero : this.state.newSuperhero,
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

  	let listOfHeroes = this.state.heroes.data.map((heroObject, index) => {
  		return <li className="heroObject" key = {index}>
  						 <img alt={heroObject.supername} className="heroImage" width="200" src={heroObject.image}/>
               <div className="heroInfo">
                  <Character    
                    image={heroObject.image}
                    supername={heroObject.supername} 
                    name={heroObject.name}
                    abilities={heroObject.abilities}
                    summary={heroObject.summary}
                    allies={heroObject.allies}
                    foes={heroObject.foes}
                    quote={heroObject.quote}
                  />
               </div>
  				   </li>
  	})

    return (
    	<div className="heroBackground">
    		<h2 className="heroTitle">Super hero page!!!</h2>
          <div className="heroContainer">
            <ul> {listOfHeroes} </ul>  
          </div>
          <hr/>
          <div className="newHeroTitle">
            <h2>Add a new Hero</h2>
          </div>
          <div className="newHero">
            <Form horizontal onSubmit={this.onFormSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Superhero: 
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Superhero" onChange={this.onSuperheroChange} value={this.state.newSuperhero}/>
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
    	</div>
    );
  }
}

export default Heroes;


