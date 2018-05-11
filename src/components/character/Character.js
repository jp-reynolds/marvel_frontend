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

  render() {
    return (

    	<div>
        
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          {this.props.supername}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.props.name}</h2>
            <h3>{this.props.abilities}</h3>
            <p>{this.props.summary}</p>
            <h4>{this.props.allies}</h4>
            <h4>{this.props.foes}</h4>
            <h5>{this.props.quote}</h5>
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
