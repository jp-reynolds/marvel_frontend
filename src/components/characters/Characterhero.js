import React, { Component } from 'react';
import './Character.css';
import axios from 'axios' 



class Characterhero extends Component {
	constructor() {
    super()
    this.state = {
      hero: {}
    };
  }



  render() {


    return (
      <div>
          This is the dynamic character page
      </div>
    );
  }
}

export default Characterhero;