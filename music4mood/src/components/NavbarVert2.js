
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../css/NavbarVert.css'


import $ from "jquery";


class NavbarVert extends Component {
  constructor(props) {
    super(props);
    this.showing = false;
    // this.handleSelection = this.handleSelection.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    // this.location = this.location.bind(this);
  }

  toggleNav() {
    let navContainer = $(".nav-container");
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

  // handleSelection(event) {
  //   if (event.target.className === "li-selector") {
  //     let nextPage = event.target.innerText.toLowerCase();
  //     if (nextPage !== "resume") {
  //       this.props.history.push(`/${nextPage}`);
  //     }
  //   }
  //   this.toggleNav();
  // }

  // location() {
  //   if (this.props.location.pathname === "/projects") {
  //     return <div className="project-header projects-header">PROJECTS</div>;
  //   } else if (this.props.location.pathname === "/skills") {
  //     return <div className="project-header skill-header">SKILLS</div>;
  //   }
  // }


  render() {

    return (
      <div id="navBarContainer">

        <div className="menu">
          <i className="fas fa fa-bars menu-bars" onClick={this.toggleNav} />
          <div />
        </div>

        <div>

      <section className='navVert page-wrap sidenav nav-container'>
        <nav className='filler'>

          <div className="close-nav">
            <div onClick={this.toggleNav}>
              <div className="nav-close">✕xxxxxxxxxxxxxxx</div>
            </div>
          </div>

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
    </div>

      </div >



    )

  }

}

export default withRouter(NavbarVert)
