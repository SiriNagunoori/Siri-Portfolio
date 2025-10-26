import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Home from './Home.js';
import About from './About.js';
import Projects from './Projects';
import CreativeCorner from './CreativeCorner';
import Contact from './Contact';
import Footer from './Footer';
import VoiceButton from './VoiceButton';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/creative" element={<CreativeCorner />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
       <VoiceButton /> 
      <Footer/>
    </Router>
  );
}

export default App;

