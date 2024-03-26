import React from 'react';
import './Navbar.css'; // Import the Navbar CSS file
import Logo from '../assets/Logo.png'; // Import your logo

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container" role="navigation" aria-label="main navigation">
        {/* Use the imported image as the logo */}
        <img src={Logo} alt="KIMC" />
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/documentation">
              Documentation
            </a>
            {/* Add more navbar items as needed */}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/signup">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href="/login">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
