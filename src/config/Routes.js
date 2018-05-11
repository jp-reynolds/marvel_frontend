import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Heroes from '../components/heroes/Heroes';
import Villains from '../components/villains/Villains';
import Places from '../components/places/Places';
import Character from '../components/character/Character';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/heroes' component={ Heroes }/>
    <Route exact path='/villains' component={ Villains }/>
    <Route exact path='/places' component={ Places }/>
    <Route exact path='/heroes/:supername' component={ Character }/>
  </Switch>
)


// render={ ()=> <Characterhero hero={this.props.heroObject}/>}