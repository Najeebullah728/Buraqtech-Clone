import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import About from './Pages/About';  // Assuming About page is another component
import Contact from './Pages/Contact';  // Assuming Contact page is another component
import { motion } from 'framer-motion';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import Services from './Pages/Services';
import './App.css';


const App = () => {
  return (
   <>
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        
      </Routes>
     
    </Router>


    
    <Footer/>
    </>



  );
  
};


export default App;
