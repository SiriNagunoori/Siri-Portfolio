// src/Home.js
import React from 'react'; 
import './Home.css';
import myPhoto from './assets/profesh.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-blob"></div>

      <div className="profile-section">
        <img src={myPhoto} alt="Siri Nagunoori" className="profile-photo" />

        <div className="intro-text">
          <h1>Hi, I'm Siri Nagunoori</h1>
          <p className="tagline">Undergraduate | Java & Full Stack Enthusiast</p>
          <p>Welcome to my creative space 🎨 | Explore my journey --></p>

          <div className="button-group">
            <a
              href="/NagunooriSiriRes.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-btn"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

