import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import Active from '../assets/step_active.png';
import Completed from '../assets/step_completed.png';

class WizardFive extends Component {
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
              <p>Step 5</p>
              <div className="flexrow">
                <img src={Completed} alt="step one"/>
                <img src={Completed} alt="step two"/>
                <img src={Completed} alt="step three"/>
                <img src={Completed} alt="step four"/>
                <img src={Active} alt="step five"/>
              </div>
              <p>Recommended Rent $ ADD AMOUNT HERE</p>
              <h3>Desired Rent</h3>
              <input></input>
              <div className="flexrow">
                <button className="darkGreenButton">
                  <Link to="/wizard/step-four">
                    Previous
                  </Link>
                </button>
                <button className="lightGreenButton">
                  <Link to="/dashboard">
                    Complete
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>    );
  }
}

export default WizardFive;
