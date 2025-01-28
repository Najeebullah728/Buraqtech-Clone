import React from 'react';
import './About.css'; // Import the custom CSS file for styling

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Learn more about our mission and the team behind this amazing app.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Our Mission</h2>
        <p className="text-center">
          At <strong>My React App</strong>, we are committed to providing users with the best experience.
          Our mission is to make the most intuitive and powerful tool to help users achieve their goals
          quickly and efficiently. We aim to innovate and make complex tasks easier for our users.
        </p>

        {/* About the Team */}
        <div className="row mt-5">
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="rounded-circle mb-3"
              width="150"
            />
            <h4>John Doe</h4>
            <p>Founder & CEO</p>
            <p>
              John is the visionary behind this app. He strives to bring innovative solutions to help
              users around the world.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="rounded-circle mb-3"
              width="150"
            />
            <h4>Jane Smith</h4>
            <p>Lead Developer</p>
            <p>
              Jane is responsible for the development of the core features. Her expertise ensures the
              app’s functionality is smooth and user-friendly.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="rounded-circle mb-3"
              width="150"
            />
            <h4>David Johnson</h4>
            <p>UI/UX Designer</p>
            <p>
              David ensures that the user experience is at the heart of every design. His goal is to
              create interfaces that are easy to use and visually appealing.
            </p>
          </div>
        </div>

        {/* Contact Us Call to Action */}
        <div className="text-center mt-5">
          <h3>Want to Learn More?</h3>
          <p>
            If you have any questions or would like to know more, feel free to{' '}
            <a href="/contact" className="btn btn-primary mt-3">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
