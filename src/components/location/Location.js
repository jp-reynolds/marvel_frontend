import React, { Component } from 'react';
import './Location.css'
import {Button, Modal} from 'react-bootstrap'

class Location extends Component {

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
        
        <img className="locationImage" onClick={this.handleShow} src={this.props.image}/>
        <h4 className="locationName">{this.props.name}</h4>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          	<img className="modalImage" src={this.props.image}/>
            <h4><b>Where:</b> {this.props.where}</h4>
            <h4><b>Summary:</b> {this.props.summary}</h4>
            <h4><b>Events:</b> {this.props.events}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>

    )
  }

}


export default Location;