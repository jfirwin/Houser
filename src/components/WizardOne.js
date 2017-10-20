import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import Active from '../assets/step_active.png';
import Inactive from '../assets/step_inactive.png';

class WizardOne extends Component {
  render() {
    return(
      <div>
        <Nav/>
        <div className="flex">
          <div className="wizard">
            <div className="flexrow">
              <h3>
                Add New Listing
              </h3>
              <button className="redButton">
                <Link to="/dashboard">
                  Cancel
                </Link>
              </button>
            </div>
            <div className="content-small">
              <p>Step 1</p>
              <div className="flexrow">
                <img src={Active} alt="step one"/>
                <img src={Inactive} alt="step two"/>
                <img src={Inactive} alt="step three"/>
                <img src={Inactive} alt="step four"/>
                <img src={Inactive} alt="step five"/>
              </div>
              <h4>
                Property Name
              </h4>
              <input></input>
              <h4>
                Property Description
              </h4>
              <input></input>
              <br/>
              <button className="darkGreenButton">
                <Link to="/wizard/step-two">
                  Next
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WizardOne;
