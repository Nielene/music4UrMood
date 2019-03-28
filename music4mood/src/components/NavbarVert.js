
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/NavbarVert.css'
import $ from "jquery";



class NavbarVert extends Component {
  constructor(props) {
    super(props);
    this.showing = false;
    // this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav = () => {
    // let navContainer = $(".nav-container");
    let navContainer = $(".navVert");
    if (this.showing) {
      navContainer
        .removeClass("slideInLeft")
        .addClass("slideOutLeft");
      setTimeout(() => {
        navContainer.css("display", "none");
      }, 500);
    } else {
      navContainer
        .css("display", "grid")
        .removeClass("slideOutLeft")
        .addClass("slideInLeft");
    }
    this.showing = !this.showing;
  }

  openNav = () => {
    // document.getElementById("mySidenav").style.width = "250px"
  }

  closeNav = () => {
    // document.getElementById("mySidenav").style.width = "0";
  }

  render() {

    return (
      <div>
      <section id="mySidenav" className='navVert sidenav nav-container'>


        <nav className='filler'>

          <Link to={{javascript:void(0)}} className="closebtn close-nav" onClick={this.toggleNav}>
            <div className='nav-close'> &times; </div>

          </Link>

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
      <span style={{fontSize:'30px'}} className="nav-open" cursor='pointer' onClick={this.toggleNav}>&#9776; menu</span>
      </div>

)

  }

}

export default withRouter(NavbarVert)
