import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/NavbarHoriz.css'

class NavbarHoriz extends Component {

  // <nav className='nav'>
  //   <div className='navbar'>
  //     <div className='leftNavBar'>
  //       <Link to='/' className='link' style={{textDecoration: 'none' }}> <p> music4UrMood </p> </Link> {' '}
  //     </div>
  //       <div className='rightNavBar'>
  //         <Link to='/yourMoods' style={{textDecoration: 'none' }}> <p> Your Moods </p></Link> {' '}
  //       </div>
  //   </div>
  //
  // </nav>

  render() {

    return (
      <section>
        <nav className='fill'>
          <ul>
            <div className='leftNavBar'>
              <li><Link to='/' className='link' style={{textDecoration: 'none' }}> <p> music4UrMood </p> </Link></li> {' '}
            </div>
            <div className='rightNavBar'>
              <li><Link to='/yourMoods' className='link' style={{textDecoration: 'none' }}> <p> Your Moods </p></Link></li> {' '}
            </div>
          </ul>

        </nav>
      </section>
    )

  }

}

export default withRouter(NavbarHoriz)
