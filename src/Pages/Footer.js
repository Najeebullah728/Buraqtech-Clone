import React from 'react';
import './Footer.css';  // Import CSS for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="text-white mx-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white mx-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white mx-3">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white mx-3">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
