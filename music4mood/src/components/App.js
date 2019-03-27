import React, { Component } from 'react';
import '../css/App.css';

import { Switch, Route } from 'react-router-dom';
import NavbarHoriz from './NavbarHoriz';
import Home from './Home'
import YourMoods from './YourMoods'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHoriz />
        <Switch>
          <Route exact path="/" render={ (props) => <Home {...props} /> } />
          <Route path="/yourMoods" render={ (props) => <YourMoods {...props} /> } />
        </Switch>

      </div>
    )
  }
}

export default App;
