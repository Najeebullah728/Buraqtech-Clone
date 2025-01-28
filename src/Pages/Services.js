import React from 'react';
import './Services.css';
import webdev from '../img/Web-Development-1-scaled.jpg';
import { Link } from 'react-router-dom';
import appgame from '../img/Gsaming-app-01-01-scaled.jpg';
import Markiting from '../img/Digital-Marketing.jpg';
import Graphic from '../img/Graphic-Design.jpg';
import Logo from '../img/Logo-Desing-1.jpg';
import Cartoon from '../img/Cartoon-Art-01-scaled.jpg';
import teamCollaboration from '../img/team-building-team-collaboration-for-business-idea-teamwork-to-solve-problem-strategy-plan-to-work-together-for-success-concept-businessmen-and-businesswomen-team-up-to-solve-lightbulb-jigsaw-vector.jpg'


const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      
      <div className="hero-section bg-primary text-white text-center py-200">
   
        <div className="container">
          <h1 className="display-4">Our Services</h1>
          <p className="lead">
            Explore our range of services designed to help your business grow and succeed.
          </p>
        </div>
      </div>
    

      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">What We Offer</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={webdev}
                className="card-img-top"
                alt="Web Development"
              />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Build fast, modern, and responsive websites tailored to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={appgame}
                className="card-img-top"
                alt="Mobile App Development"
              />
              <div className="card-body">
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">
                  Develop high-performance apps for iOS and Android platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={Markiting}
                className="card-img-top"
                alt="Digital Marketing"
              />
              <div className="card-body">
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text">
                  Boost your online presence with effective marketing strategies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={Graphic}
                className="card-img-top"
                alt="Digital Marketing"
              />
              <div className="card-body">
                <h5 className="card-title">Graphic Design</h5>
                <p className="card-text">
                Unlocking the power of visual storytelling, our graphic design service brings your ideas to life with stunning creativity and precision, leaving a lasting impression on your audience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={Logo}
                className="card-img-top"
                alt="Digital Marketing"
              />
              <div className="card-body">
                <h5 className="card-title">Logo Design</h5>
                <p className="card-text">
                Transforming visions into unforgettable brands, our logo design service crafts timeless identities that captivate and inspire.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src={Cartoon}
                className="card-img-top"
                alt="Digital Marketing"
              />
              <div className="card-body">
                <h5 className="card-title">Cartoon Art</h5>
                <p className="card-text">
                Unleash the power of imagination with our captivating cartoon art service. Our talented artists create vibrant and expressive characters that will delight and enchant audiences of all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
   
  
          {/* Working Process Section */}
          <section className="working-process">
            <div className="container text-center">
              <h2>Our Working Process</h2>
              <p>How We Work For Our Customers</p>
              <div className="process-steps">
                <div>
                  <h3>1.</h3>
                  <p>Discovery</p>
                </div>
                <div>
                  <h3>2.</h3>
                  <p>Planning</p>
                </div>
                <div>
                  <h3>3.</h3>
                  <p>Execute</p>
                </div>
                <div>
                  <h3>4.</h3>
                  <p>Deliver</p>
                </div>
              </div>
              {/* Contact Us Button */}
              <button className="btn-primary1">
              <Link to="/contact">
                Contact Us
              </Link>
              </button>
            </div>
          </section>
    
          {/* Request a Quote Section */}
          <section className="quote-section">
            <div className="container">
              <div className="quote-content">
                {/* Left Image */}
                <div className="quote-image">
                  <img
                    src={teamCollaboration}
                    alt="Team Collaboration"
                  />
                  
                </div>
    
                {/* Form Section */}
                <div className="quote-form">
                  <h3>Request a Free Quote</h3>
                  <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="E-Mail" required />
                    <input type="text" placeholder="Phone Number" required />
                    <input type="url" placeholder="Your Website" required />
                    <textarea placeholder="Your Message Here" required></textarea>
                    <button type="submit" className="btn-primary">
                      Submit Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          </div>
  
    
  );
};

export default Services;
