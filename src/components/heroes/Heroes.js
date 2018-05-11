import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import $ from 'jquery'
import './Heroes.css'
import Character from '../character/Character';

//import a new Hero componenant 

class Heroes extends Component {

	constructor() {
		super()
		this.state = {
			heroes: {
				data: []
			}
		}
	};

	componentDidMount() {
		axios.get("https://marvelcu.herokuapp.com/api/heroes").then((results) => {
			this.setState({
				heroes: results
			})
		})
	}

  toggleHeroInfo(event) {
    $('.heroInfo').toggleClass("on");

    // this.getElementsByClassName("heroInfo").classList.toggle("on");
}



  render() {
  	//pass props through a router link, or get state 
  	//instead of links pass the new component with its props and state into here and then when you click the link 
  	//it will render the hero component which is dynamic based on the information associated with the 

  	//let heroDetails = this.state.heroes.data. (custom hero name based on click)


  	let listOfHeroes = this.state.heroes.data.map((heroObject, index) => {
  		return <li className="heroObject" key = {index}>
  					   <button onClick={this.toggleHeroInfo}> 
  						  <img className="heroImage" width="200" src={heroObject.image}/>
  					   </button>
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



  	//instead of passing in a list of heroes add a component and pass props into it, then in the component
  	//render just the name and 
    return (
    	<div className="heroBackground">
    		<h2 className="heroTitle">Super hero page!!!</h2>
          <div className="heroContainer">
            <ul> {listOfHeroes} </ul>  
          </div>
      		
    	</div>
      
    );
  }
}

export default Heroes;


