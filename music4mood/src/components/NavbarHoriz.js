import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/NavbarHoriz.css';

let metal = require('../assets/rNr.png');

class NavbarHoriz extends Component {
  render() {

    return (
      <section>
        <nav className='fill'>

          <ul>

            <div className='leftNavBar'>
              <li><Link to='/' className='link'> <p className='logo'>M4M</p> </Link>
              </li>
              <img src={metal} alt='' className='rNr'/>
            </div>

            <div className='rightNavBar'>

              <div className=''>
                <li><Link to='/' className='link'>
                <p>music4UrMood</p>
                </Link></li>
              </div>

              <div className=''>
                <li><Link to='/yourMoods' className='link'>
                <p>Your Moods</p>
                </Link></li>
              </div>

            </div>

          </ul>

        </nav>
      </section>
    );

  }

}

export default withRouter(NavbarHoriz);
