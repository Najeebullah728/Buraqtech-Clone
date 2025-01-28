import React from 'react';
import './AnimatedHeader.css'; // Custom CSS for animations

const AnimatedHeader = () => {
  return (
    <header className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-3 animated-title">Welcome to My React App</h1>
        <p className="lead animated-subtitle">
          Beautiful designs, smooth animations, and great user experience.
        </p>
        <a href="#features" className="btn btn-light btn-lg animated-button">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default AnimatedHeader;
