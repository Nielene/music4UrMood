import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavbarHoriz from './components/NavbarHoriz';
import PlaySong from './components/playSong';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavbarHoriz />

        <Switch>
          <Route exact path="/"
                 component={Body} />

               <Route path="/yourMoods/:mood"
                 component={PlaySong} />
        </Switch>


      </div>
    );
  }
}

export default App;
