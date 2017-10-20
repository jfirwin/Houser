import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import deleteIcon from '../assets/delete_icon.png';

class Dashboard extends Component {
  constructor(){
    super();

    this.state = {
      properties: [
        {id: 'id0', name: 'name',description: 'description', loan: 123456789, monthlyMortgage: 1234, recommendedRent: 3456, desiredRent: 23456, address: 'address', city: 'city', state: 'state', zip: 12345, image: 'url' },
        {id: 'id1', name: 'name',description: 'description', loan: 123456789, monthlyMortgage: 1234, recommendedRent: 3456, desiredRent: 23456, address: 'address', city: 'city', state: 'state', zip: 12345, image: 'url' },
        {id: 'id2', name: 'name',description: 'description', loan: 123456789, monthlyMortgage: 1234, recommendedRent: 3456, desiredRent: 23456, address: 'address', city: 'city', state: 'state', zip: 12345, image: 'url' },
        {id: 'id3', name: 'name',description: 'description', loan: 123456789, monthlyMortgage: 1234, recommendedRent: 3456, desiredRent: 23456, address: 'address', city: 'city', state: 'state', zip: 12345, image: 'url' },
        {id: 'id4', name: 'name',description: 'description', loan: 123456789, monthlyMortgage: 1234, recommendedRent: 3456, desiredRent: 23456, address: 'address', city: 'city', state: 'state', zip: 12345, image: 'url' }
      ]
    }
  }

  render() {
    return(
      <div>
        <Nav/>
        <div className="flex">
          <div className="dashboard">
            <div className="content">
              <h1>Dashboard</h1>
              <button className="lightGreenButton">
                <Link to="/wizard/step-one">
                  Add New Property
                </Link>
              </button>
              <div className="flexrow">
                List properties with "desired rent" greater than $
                <input></input>
                <button className="lightGreenButton">Filter</button>
                <button className="darkGreenButton">Reset</button>
              </div>
              <hr/>
                <p>Home Listings</p>

                {this.state.properties.map(property => {
                  return(
                    <div key={property.id} className="flex propertyBox">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRbeCcTzT3iPgaDbi6p1q6rg33knZRrLprUOOO_xP1RuKx1KZf" alt="placeholder" className="propertyImage"/>
                      <div>
                        <p>{property.name}</p>
                        <p>{property.description}</p>
                      </div>
                        <div className="detailsFlex">
                          <div className="details">
                            <p>Loan: ${property.loan}</p>
                            <p>Monthly Mortgage: ${property.monthlyMortgage}</p>
                            <p>Recommended Rent: ${property.recommendedRent}</p>
                            <p>Desired Rent: ${property.desiredRent}</p>
                            <p>Address: {property.address}</p>
                            <p>City: {property.city}</p>
                            <p>State: {property.state}</p>
                            <p>Zip: {property.zip}</p>
                          </div>
                            <img src={deleteIcon} className="deleteButton" alt="delete property"/>
                        </div>
                    </div>
                );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
