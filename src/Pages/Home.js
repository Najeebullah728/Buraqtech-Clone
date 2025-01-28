import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Ecommerce from '../img/Ecommerce-mouckup-02-01-scaled.jpg';
import web from '../img/Web-Development-1-scaled.jpg';
import Digital from '../img/Digital-Marketing.jpg';

const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Create Your <span className="highlight">Website</span>
          </h1>
          <p className="hero-subtitle">& Grow Your Business</p>
          <div className="button-group">
            <Link to="/contact" className="btn btn-primary">
              Place Your Order
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section" id="features">
        <h2 className="section-title">Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img
              src={Ecommerce}
              alt="Feature 1"
              className="feature-image"
            />
            <h3 className="feature-title font-bold">Ecommerce Website</h3>
            <p className="feature-text">
              Revolutionize your online shopping experience with our cutting-edge ecommerce platform. Explore a curated selection of top-notch products and enjoy seamless transactions for a hassle-free shopping journey.
            </p>
          </div>
          <div className="feature-card">
            <img
              src={web}
              alt="Feature 2"
              className="feature-image"
            />
            <h3 className="feature-title">Website Development</h3>
            <p className="feature-text">
              Building digital experiences that seamlessly blend functionality and aesthetics, our website development service creates engaging online platforms that drive your business forward with elegance and efficiency.
            </p>
          </div>
          <div className="feature-card">
            <img
              src={Digital}
              alt="Feature 3"
              className="feature-image"
            />
            <h3 className="feature-title">Digital Marketing</h3>
            <p className="feature-text">
              Elevate your brand's online presence with our results-driven digital marketing service. We employ strategic techniques to boost visibility, engage audiences, and drive measurable success for your business.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to get started?</h2>
          <p className="cta-text">
            Sign up today and unlock the full potential of our application!
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Clock in Upper Right Corner */}
      <div className="clock-container">
        <h3 className="clock">{time}</h3>
      </div>
    </div>
  );
};

export default Home;
