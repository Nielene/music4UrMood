
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/NavbarVert.css'



class NavbarVert extends Component {

  openNav = () => {

  }

  closeNav = () => {

  }

  render() {

    return (
      <div>
      <section className='navVert page-wrap sidenav'>


        <nav className='filler'>

          <Link to={{javascript:void(0)}} className="closebtn" onClick={this.closeNav}>&times;</Link>

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
      <span style={{fontSize:'30px'}} cursor='pointer' onClick={this.openNav}>&#9776; menu</span>
      </div>

)

  }

}

export default withRouter(NavbarVert)
