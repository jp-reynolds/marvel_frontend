import React, { Component } from 'react';
import './Character.css';
import {Button, Modal} from 'react-bootstrap';
import axios from 'axios';

class Character extends Component {

	constructor(props, context) {
    	super(props, context);

	    this.state = {
	      show: false,
        editSupername: "",
        editName: "",
        editOrigin: "",
        editAbilities: "",
        editSummary: "",
        editAllies: "",
        editFoes: "",
        editQuote: "",
        editImage: "",
        currentlyEditing : false
	    };

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.onSupernameChange = this.onSupernameChange.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onOriginChange = this.onOriginChange.bind(this);
      this.onAbilitiesChange = this.onAbilitiesChange.bind(this);
      this.onSummaryChange = this.onSummaryChange.bind(this);
      this.onAlliesChange = this.onAlliesChange.bind(this);
      this.onFoesChange = this.onFoesChange.bind(this);
      this.onQuoteChange = this.onQuoteChange.bind(this);
      this.onImageChange = this.onImageChange.bind(this);
      this.onFormModalSubmit = this.onFormModalSubmit.bind(this);
	}


  handleClose() {
    this.setState({ 
      show: false,
      currentlyEditing: true 
    });
  }

  handleShow() {
    this.setState({ 
      show: true,
      currentlyEditing: false 
    });
  }

  componentDidMount(event){
      this.setState({
        currentlyEditing : false,
        show: false,
        editSupername: this.props.supername,
        editName: this.props.name,
        editOrigin: this.props.origin,
        editAbilities: this.props.abilities,
        editSummary: this.props.summary,
        editAllies: this.props.allies,
        editFoes: this.props.foes,
        editQuote: this.props.quote,
        editImage: this.props.image,
        id: this.props._id
      });
  }

  handleEdit() {
    this.setState({
      currentlyEditing:true,
      show: true,
      editSupername: this.state.editSupername,
      editName: this.state.editName,
      editOrigin: this.state.editOrigin,
      editAbilities: this.state.editAbilities,
      editSummary: this.state.editSummary,
      editAllies: this.state.editAllies,
      editFoes: this.state.editFoes,
      editQuote: this.state.editQuote,
      editImage: this.state.editImage,
      id: this.state.id
    })
  }

    onSupernameChange(event) {
      this.setState ({
        editSupername: event.target.value
      })
    }

    onNameChange(event) {
      this.setState ({
        editName: event.target.value
      })
    }

    onOriginChange(event) {
      this.setState ({
        editOrigin: event.target.value
      })
    }

    onAbilitiesChange(event) {
      this.setState ({
        editAbilities: event.target.value
      })
    }

    onSummaryChange(event) {
      this.setState ({
        editSummary: event.target.value
      })
    }

    onAlliesChange(event) {
      this.setState ({
        editAllies: event.target.value
      })
    }

    onFoesChange(event) {
      this.setState ({
        editFoes: event.target.value
      })
    }

    onQuoteChange(event) {
      this.setState ({
        editQuote: event.target.value
      })
    }

    onImageChange(event) {
      this.setState ({
        editImage: event.target.value
      })
    }

  axiosCallback(results) {
    console.log(results)
  }

  onFormModalSubmit(event) {
    event.preventDefault() 
    console.log("saved button clicked" + this);
    let editedCharacter = {
      supername: this.state.editSupername,
      name : this.state.editName,
      origin: this.state.editOrigin,
      abilities : this.state.editAbilities,
      summary: this.state.editSummary,
      allies: this.state.editAllies,
      foes: this.state.editFoes,
      quote: this.state.editQuote,
      image: this.state.editImage,
      id: this.state.id
    };
    console.log(editedCharacter)
    //https://marvelcu.herokuapp.com/api/characters
    axios.put("https://marvelcu.herokuapp.com/api/characters", editedCharacter).then(this.axiosCallback)
  }

  render() {

    return (
    	<div>
        <img className="characterImage" onClick={this.handleShow} src={this.props.image}/>
        <h4 className="characterName">{this.props.supername}</h4>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.supername}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          	<img className="modalImagee" src={this.props.image}/>

              <form onSubmit={this.onFormModalSubmit} className={"visible-" + this.state.currentlyEditing}>
                <h4><b>Supername:</b></h4><input className="modalContent" value={this.state.editSupername} onChange={this.onSupernameChange}/>
                <h4><b>Name:</b></h4><input className="modalContent" value={this.state.editName} onChange={this.onNameChange}/>
                <h4><b>Origin:</b></h4><input className="modalContent" value={this.state.editOrigin} onChange={this.onOriginChange}/>
                <h4><b>Abilities:</b></h4><input className="modalContent" value={this.state.editAbilities} onChange={this.onAbilitiesChange}/>
                <h4><b>Summary:</b></h4><input className="modalContent" value={this.state.editSummary} onChange={this.onSummaryChange}/>
                <h4><b>Allies:</b></h4><input className="modalContent" value={this.state.editAllies} onChange={this.onAlliesChange}/>
                <h4><b>Foes:</b></h4><input className="modalContent" value={this.state.editFoes} onChange={this.onFoesChange}/>
                <h4><b>Quote:</b></h4><input className="modalContent" value={this.state.editQuote} onChange={this.onQuoteChange}/>
                <h4><b>Image URL:</b></h4><input className="modalContent" value={this.state.editImage} onChange={this.onImageChange}/>
                <hr/>
                <Button type="submit" >Save</Button>
              </form>

            <div className={"visible-" + !this.state.currentlyEditing}>
              <h4><b>Name:</b> {this.props.name}</h4>
              <h4><b>Origin:</b> {this.props.origin}</h4>
              <h4><b>Abilities:</b> {this.props.abilities}</h4>
              <h4><b>Summary:</b> {this.props.summary}</h4>
              <h4><b>Allies:</b> {this.props.allies}</h4>
              <h4><b>Foes:</b> {this.props.foes}</h4>
              <h4><b>Quote:</b> {this.props.quote}</h4>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button onClick={this.handleEdit}>Edit</Button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }

}


export default Character;
