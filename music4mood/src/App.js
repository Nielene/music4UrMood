import React, { Component } from 'react';
import './css/app.css';

let happy = require('./happy.gif');
let sad = require('./sad.gif');
let relax = require('./relax.gif');
let love = require('./love.gif');
let energy = require('./energetic.gif');

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

      </div>
    );
  }
}

export default App;
