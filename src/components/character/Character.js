import React, { Component } from 'react';
import './Character.css'
import {Button, Modal} from 'react-bootstrap'

class Character extends Component {

	constructor(props, context) {
    	super(props, context);

	    this.state = {
	      show: false,
        editName: "",
        editAbilities: "",
        editSummary: "",
        editAllies: "",
        editFoes: "",
        editQuote: "",
        currentlyEditing : false
	    };

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
	}


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onNameChange(event) {
    this.setState ({
      editName: event.target.value
    })
    

  }

  handleEdit() {
    this.setState({currentlyEditing:true,
      show: true,
      editName: this.state.name,
      editAbilities: this.state.abilities,
      editSummary: this.state.summary,
      editAllies: this.state.allies,
      editFoes: this.state.foes,
      editQuote: this.state.quote,
})
  }


  componentDidMount(event){
      this.setState({
        currentlyEditing : false,
        show: false,
        editName: this.props.name,
        editAbilities: this.props.abilities,
        editSummary: this.props.summary,
        editAllies: this.props.allies,
        editFoes: this.props.foes,
        editQuote: this.props.quote,
      });

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
            <div className={"visible-" + this.state.currentlyEditing}>
              <h4><b>Name:</b></h4><input className="modalContent" value={this.props.name} onChange={this.onNameChange}/>
              <h4><b>Abilities:</b></h4><input className="modalContent" value={this.props.abilities} onChange={this.onAbilitiesChange}/>
              <h4><b>Summary:</b></h4><input className="modalContent" value={this.props.summary} onChange={this.onSummaryChange}/>
              <h4><b>Allies:</b></h4><input className="modalContent" value={this.props.allies} onChange={this.onAlliesChange}/>
              <h4><b>Foes:</b></h4><input className="modalContent" value={this.props.foes} onChange={this.onFoesChange}/>
              <h4><b>Quote:</b></h4><input className="modalContent" value={this.props.quote} onChange={this.onQuoteChange}/>
            </div>
            <div className={"visible-" + !this.state.currentlyEditing}>
              <h4><b>Name:</b> {this.props.name}</h4>
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
            <Button onClick={this.handleSave}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }

}


export default Character;
