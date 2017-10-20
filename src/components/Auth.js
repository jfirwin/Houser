import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/auth_logo.png';

export default Auth => {
  return (
    <div className="flex">
      <div className="auth">
        <img src={Logo} alt="logo"/>
        <div className="authcontent">
          <h4>Username</h4>
          <input></input>
          <h4>Password</h4>
          <input></input>
          <div className="flex">
            <button>
              <Link to={`/dashboard`}>
                Login
              </Link>
            </button>
            <button>
            <Link to={`/dashboard`}>
              Register
            </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
