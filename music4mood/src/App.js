import React, { Component } from 'react';
import './css/appBody.css';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import NavbarHoriz from './components/NavbarHoriz';
import Home from './components/Home'
import YourMoods from './components/YourMoods'
import PlaySong from './playSong'



class App extends Component {
  render() {
    return (
      <div className="App">

      <h1 className="welcome">Music For Your Mood</h1>

      <div className='happy'>
        <img src={happy} alt=''/>
        <li className='happyT'>HAPPY</li>
      </div>

      <div className='sad'>
        <img src={sad} alt=''/>
        <li className='sadT'>EMO</li>
      </div>

      <div className='relax'>
        <img src={relax} alt=''/>
        <li className='relaxT'>RELAXED</li>
      </div>

      <div className='roman'>
        <img src={love} alt='' />
        <li className='romanT'>ROMANTIC</li>
      </div>

      <div className='energy'>
        <img src={energy} alt=''/>
        <li className='energyT'>HYPED</li>
      </div>



        <NavbarHoriz />
        <Switch>
          <Route exact path="/" render={ (props) => <Home {...props} /> } />
          <Route path="/yourMoods" render={ (props) => <YourMoods {...props} /> } />
        </Switch>


        <PlaySong/>

      </div>
    )
  }
}

export default App;
