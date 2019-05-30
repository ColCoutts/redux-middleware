import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import CharacterById from '../containers/CharacterById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AllCharacters}/>
        <Route exact path="/character/:id" component={CharacterById}/>
      </Switch>
    </Router>
  );
}
