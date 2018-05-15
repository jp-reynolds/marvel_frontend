import React, { Component } from 'react';
import './Location.css'
import {Button, Modal} from 'react-bootstrap'
import axios from "axios";

class Location extends Component {

	constructor(props, context) {
    	super(props, context);

    	this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);

	    this.state = {
	      show: false,
        editName: "",
        editWhere: "",
        editSummary: "",
        editEvents: "",
        editImage: "",
        currentlyEditing: false
	    };

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
      this.onNameChange = this.onNameChange.bind(this);
      this.onWhereChange = this.onWhereChange.bind(this);
      this.onSummaryChange = this.onSummaryChange.bind(this);
      this.onEventsChange = this.onEventsChange.bind(this);
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

  componentDidMount(event) {
    this.setState({
      currentlyEditing: false,
      show: false,
      editName: this.props.name,
      editWhere: this.props.where,
      editSummary: this.props.summary,
      editEvents: this.props.events,
      editImage: this.props.image,
      id: this.props._id
    });
  }

  handleEdit() {
    this.setState({
      currentlyEditing: true,
      show: true,
      editName: this.state.editName,
      editWhere: this.state.editWhere,
      editSummary: this.state.editSummary,
      editEvents: this.state.editEvents,
      editImage: this.state.editImage,
      id: this.state.id
    });
  }

  onNameChange(event) {
    this.setState({
      editName: event.target.value
    })
  }

  onWhereChange(event) {
    this.setState({
      editWhere: event.target.value
    })
  }

  onSummaryChange(event) {
    this.setState({
      editSummary: event.target.value
    })
  }

  onEventsChange(event) {
    this.setState({
      editEvents: event.target.value
    })
  }

  onImageChange(event) {
    this.setState({
      editImage: event.target.value
    })
  }

  axiosCallback(results) {
    console.log(results);
  }

  onFormModalSubmit(event) {
    event.preventDefault();
    let editedPlace = {
      name: this.state.editName,
      where: this.state.editWhere,
      summary: this.state.editSummary,
      events: this.state.editEvents,
      image: this.state.editImage,
      id: this.state.id
    };
    console.log(editedPlace)
    //https://marvelcu.herokuapp.com/api/places
    axios.put("https://marvelcu.herokuapp.com/api/places", editedPlace).then(this.axiosCallback);
  }

  render() {
    return (
    	<div>
        <img className="locationImage" onClick={this.handleShow} src={this.props.image}/>
        <h4 className="locationName">{this.props.name}</h4>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <img className="modalImage" src={this.props.image}/>

          <Modal.Body>
            <form onSubmit={this.onFormModalSubmit} className={"visible-" + this.state.currentlyEditing}>
              <h4><b>Name:</b></h4><input value={this.state.editName} onChange={this.onNameChange}/>
              <h4><b>Where:</b></h4><input value={this.state.editWhere} onChange={this.onWhereChange}/>
              <h4><b>Summary:</b></h4><input value={this.state.editSummary} onChange={this.onSummaryChange}/>
              <h4><b>Events:</b></h4><input value={this.state.editEvents} onChange={this.onEventsChange}/>
              <h4><b>Image URL:</b></h4><input value={this.state.editImage} onChange={this.onImageChange}/>
              <hr/>
              <Button type="submit" >Save</Button>
            </form>

            <div className={"visible-" + !this.state.currentlyEditing}>
              <h4><b>Where:</b> {this.props.where}</h4>
              <h4><b>Summary:</b> {this.props.summary}</h4>
              <h4><b>Events:</b> {this.props.events}</h4>
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


export default Location;