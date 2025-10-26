// src/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2 className="about-heading">About </h2>

        <p className="about-paragraph">
          Hello! I’m <strong>Siri Nagunoori</strong>, an enthusiastic undergraduate at Anurag University, Hyderabad,
          pursuing a degree in <strong>Computer Science with a specialization in Data Science</strong>.
          I’m a quick learner, positive thinker, and passionate about building data-driven solutions that make a difference.
        </p>

        <p className="about-paragraph">
          Currently, I hold a <strong>CGPA of 8.79</strong> and am actively involved in the university’s <strong>Data Analytics Club (DAC)</strong>,
          where we empower students with real-world analytics skills.
        </p>

        <p className="about-paragraph">
          I love blending tech with creativity — from developing full-stack apps to crafting art and DIYs during my downtime.
        </p>

        <div className="about-section-block">
          <h4>🎓 Education</h4>
          <ul>
            <li><strong>B.Tech CSE (Data Science)</strong>, Anurag University – CGPA: 8.79 (2026 expected)</li>
            <li>Class XII – 97.8%, Alphores Junior College</li>
            <li>Class X – CGPA 10, Alphores High School</li>
          </ul>
        </div>

        <div className="about-section-block">
          <h4>🏆 Achievements</h4>
          <ul>
            <li>Delivered a tech talk on Tableau</li>
            <li>Core team member – Data Analytics Club (DAC)</li>
            <li>Completed Campus Corporate Connect Training Program(2025), focused on technical skill enhancement.</li>
            <li>600+ submissions across all judges.</li>
          </ul>
        </div>

        <div className="about-section-block">
          <h4>🎨 Hobbies</h4>
          <p>Listening to music, Art and Craft, DIY projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
