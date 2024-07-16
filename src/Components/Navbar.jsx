import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Ensure you have a logo file in the assets folder

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Senoptix Logo" />
      </div>
      <div className="navbar-menu">
        <Link to="/">Home</Link>
        <div
          className="navbar-dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link to="/our-technology" className="navbar-link">Our Technology</Link>
          {dropdown && (
            <div className="dropdown-content">
              <Link to="/our-technology#tech1">Senoptix Light-activated electrochemistry</Link>
              <Link to="/our-technology#tech2">Aptamers</Link>
              <Link to="/our-technology#tech3">Applications of electrochemistry</Link>
              <Link to="/our-technology#tech4">Why our device?</Link>
            </div>
          )}
        </div>
        <Link to="/our-team">Our Team</Link>
        <Link to="/contact-us" className="navbar-button">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;
