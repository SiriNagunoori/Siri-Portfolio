// src/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">S N</div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeMenu}>Projects</Link>
          <Link to="/creative" className={location.pathname === '/creative' ? 'active' : ''} onClick={closeMenu}>Creative Corner</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'rotate1' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'fade' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate2' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

