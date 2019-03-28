import React, { Component } from 'react';
import '../css/appBody.css';

let happy = require('../css/happy.gif');
let sad = require('../css/sad.gif');
let relax = require('../css/relax.gif');
let love = require('../css/love.gif');
let energy = require('../css/energetic.gif');

class Body extends Component{
  render() {
    return (
      <div className='wholeBody'>
        <h1 className='welcome'>Music For Your Mood</h1>
        <p className='feeling'>How are we feeling today?</p>

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

export default Body;
