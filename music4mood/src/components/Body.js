import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/appBody.css';

let happy = require('../assets/happy.gif');
let sad = require('../assets/sad.gif');
let relax = require('../assets/relax.gif');
let love = require('../assets/love.gif');
let energy = require('../assets/energetic.gif');

class Body extends Component{
  render() {
    return (
      <div className='wholeBody'>
        <h1 className='welcome'>Music For Your Mood</h1>
        <p className='feeling'>How are we feeling today?</p>

        <div className='happy'>
          <Link to='/yourMoods/happy'>
            <button className='happyB'>
            <img src={happy} alt=''/>
            <li className='happyT'>HAPPY</li>
            </button>
          </Link>
        </div>

        <div className='sad'>
          <Link to='/yourMoods/sad'>
            <button className='sadB'>
              <img src={sad} alt=''/>
              <li className='sadT'>EMO</li>
            </button>
          </Link>
        </div>

        <div className='relax'>
          <Link to='/yourMoods/relaxed'>
            <button className='relaxB'>
              <img src={relax} alt=''/>
              <li className='relaxT'>RELAXED</li>
            </button>
          </Link>
        </div>

        <div className='roman'>
          <Link to='/yourMoods/romantic'>
            <button className='romanB'>
              <img src={love} alt='' />
              <li className='romanT'>ROMANTIC</li>
          </button>
        </Link>
        </div>

        <div className='energy'>
          <Link to='/yourMoods/energy'>
            <button className='energyB'>
              <img src={energy} alt=''/>
              <li className='energyT'>HYPED</li>
              </button>
            </Link>
        </div>
      </div>
    );
  }
}

export default Body;
