import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../assets/navLogo.png';

class Nav extends Component {
  render() {
      return(
        <div className="Nav">
          <div className="flex">
            <img src={navLogo} alt="logo" />
            <h1>Houser</h1><h1 className="lightText">Dashboard</h1>
          </div>
          <Link to="/">
            <h3>
              Logout
            </h3>
          </Link>
        </div>
      );
  }
}

export default Nav;
