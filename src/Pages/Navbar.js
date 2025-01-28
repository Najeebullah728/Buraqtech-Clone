import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file for navbar animations

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark animated-navbar">
      <div className="container">
        <Link className="navbar-brand animate-logo" to="/">
          ReactApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link animate-nav-item" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate-nav-item" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate-nav-item" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link animate-nav-item" to="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
