import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Home.css'


//add a loop state and function to have the video play twice.

class Home extends Component {
  render() {
    return (
    	<div className="homeContainer">
      		<ReactPlayer width="auto" url='https://www.youtube.com/embed/CEP-PObKELA' playing />
      		<div className="homeButtonContainer">
      			<ul className="responsiveButtons">
      				<a className="homeObject" href='/heroes'><img className="homeImage" id="heroes" src="https://www.screengeek.net/wp-content/uploads/2017/09/marvel-cinematic-universe-easter-eggs.jpg" /></a>
      				<a className="homeObject" href='/villains'><img className="homeImage" id="villains" src="http://www.screengeek.net/wp-content/uploads/2016/07/Marvel-Comics-Villains-List.jpg" /></a>
      				<a className="homeObject" href='/places'><img className="homeImage" id="locations" src="https://wi-images.condecdn.net/image/GEp1VNDqw66/crop/1620/f/marvelmap.jpg" /></a>
      				<a className="homeObject" href='/#'><img className="homeImage" id="theories" src="https://c1.staticflickr.com/5/4738/39138378452_57b59f66e4_b.jpg" /></a>
      			</ul>
      			<img className="movies" src="https://i.ytimg.com/vi/dRe_PBAIIiw/maxresdefault.jpg"/>
      		</div>

      	</div>
    );
  }
}

export default Home;

