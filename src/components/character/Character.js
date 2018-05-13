import React, { Component } from 'react';
import './Character.css'
import {Button, Modal} from 'react-bootstrap'

class Character extends Component {

	constructor(props, context) {
    	super(props, context);

    	this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);

	    this.state = {
	      show: false
	    };
	}


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // <Button bsSize="large" onClick={this.handleShow}>
  //         <h4>{this.props.supername}</h4>
  //       </Button>

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
          	<img src={this.props.image}/>
            <h4><b>Name:</b> {this.props.name}</h4>
            <h4><b>Abilities:</b> {this.props.abilities}</h4>
            <h4><b>Summary:</b> {this.props.summary}</h4>
            <h4><b>Allies:</b> {this.props.allies}</h4>
            <h4><b>Foes:</b> {this.props.foes}</h4>
            <h4><b>Quote:</b> {this.props.quote}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }

}


export default Character;
