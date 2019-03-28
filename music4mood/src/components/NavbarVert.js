import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/NavbarVert.css'

let happy = require('../happy.gif');
let sad = require('../sad.gif');
let relax = require('../relax.gif');
let love = require('../love.gif');
let energy = require('../energetic.gif');

class NavbarVert extends Component {

  render() {

    return (
      <section className='navVert page-wrap sidenav'>
        <nav className='filler'>
          <ul>

            <div className=''>
              <li>
                <Link to='/happy' className='link' style={{textDecoration: 'none' }}>
                <p> happy </p>
                </Link>
              </li>
            </div>
            <div className=''>
              <li>
                <Link to='/sad' className='link' style={{textDecoration: 'none' }}>
                  <p> sad </p>
                </Link>
              </li>
            </div>
            <div className=''>
              <li>
                <Link to='/relaxed' className='link' style={{textDecoration: 'none' }}>
                  <p> relaxed </p>
                </Link>
              </li>
            </div>
            <div className=''>
              <li>
                <Link to='/romantic' className='link' style={{textDecoration: 'none' }}>
                  <p> romantic </p>
                </Link>
              </li>
            </div>
            <div className=''>
              <li>
                <Link to='/hyped' className='link' style={{textDecoration: 'none' }}>
                  <p> hyped </p>
                </Link>
              </li>
            </div>
          </ul>
        </nav>

      </section>
    )

  }

}

export default withRouter(NavbarVert)
