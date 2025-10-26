// src/Footer.js
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Siri Nagunoori</p>
      <div className="footer-icons">
        <a href="https://github.com/SiriNagunoori" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sirinagunoori" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:sirinagunoori@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://leetcode.com/u/sirinagunoori/" target="_blank" rel="noopener noreferrer">
          <FaCode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
