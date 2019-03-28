
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/NavbarVert.css'



class NavbarVert extends Component {

  render() {

    return (
      <section className='navVert page-wrap sidenav'>
        <nav className='filler'>
          <ul>

            <div className=''>
              <li>
                <Link to='/yourMoods/happy' className='link' style={{textDecoration: 'none' }}>
                <p> happy </p>
                </Link>
              </li>
            </div>
            <div className=''>
              <li>
                <Link to='/yourMoods/sad' className='link' style={{textDecoration: 'none' }}>
                  <p> sad </p>
                </Link>
              </li>
            </div>
            <div className=''>
              <li>
                <Link to='/yourMoods/relaxed' className='link' style={{textDecoration: 'none' }}>
                  <p> relaxed </p>
                </Link>
              </li>
            </div>
            <div className=''>
              <li>
                <Link to='/yourMoods/romantic' className='link' style={{textDecoration: 'none' }}>
                  <p> romantic </p>
                </Link>
              </li>
            </div>
            <div className=''>
              <li>
                <Link to='/yourMoods/hyped' className='link' style={{textDecoration: 'none' }}>
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
