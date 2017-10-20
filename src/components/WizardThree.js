import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import Active from '../assets/step_active.png';
import Inactive from '../assets/step_inactive.png';
import Completed from '../assets/step_completed.png';

class WizardThree extends Component {
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
              <p>Step 3</p>
              <div className="flexrow">
                <img src={Completed} alt="step one"/>
                <img src={Completed} alt="step two"/>
                <img src={Active} alt="step three"/>
                <img src={Inactive} alt="step four"/>
                <img src={Inactive} alt="step five"/>
              </div>
              <div className="imageHolder">Preview</div>
              <h3>Image Url</h3>
              <input></input>
              <div className="flexrow">
                <button className="darkGreenButton">
                  <Link to="/wizard/step-two">
                    Previous
                  </Link>
                </button>
                <button className="darkGreenButton">
                  <Link to="/wizard/step-four">
                    Next
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>    );
  }
}

export default WizardThree;
