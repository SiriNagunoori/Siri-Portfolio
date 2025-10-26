// src/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const otherProjects = [
  {
    title: 'Amazon Clone',
    description:
      'This is a simple clone of the Amazon homepage built using HTML and CSS. It includes additional static pages like Cart, Wishlist, Signup, Orders and Returns. Note: This project is not responsive and is best viewed on desktop.',
    pages: [
      'Homepage',
      'Cart',
      'Wishlist',
      'Signup',
      'Orders & Returns',
    ],
    tech: ['HTML5', 'CSS3'],
    howToRun:
      'Just open index.html in your browser and navigate through the links.',
    github: 'https://github.com/SiriNagunoori/AmazonInd',
  },
  {
    title: 'TieTacToe',
    description: 'A browser-based game where players compete against a computer using rock, paper, or scissors. Features include dynamic score updates, animated choices, and real-time result feedback.', // you can update this later
    pages: ['index.html'],
    tech: ['HTML','CSS','JavaScript'],
    howToRun: 'Download all files and open index.html in a web browser.',
    github: 'https://github.com/SiriNagunoori/TieTacToe',
  },
  {
    title: 'Rock Paper Scissors',
    description: 'A simple browser-based Rock Paper Scissors game with clickable choices, score tracking, and dynamic result display.', // you can update this later
    pages: ['index.html'],
    tech: ['HTML','CSS','JavaScript'],
    howToRun: 'Download all files and open index.html in a web browser.',
    github: 'https://github.com/SiriNagunoori/Rock-paper-scissor',
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(true); // default to All Projects

  return (
    <div className="projects-container">
      <div className="projects-toggle">
        <button
          className={!showAll ? 'active' : ''}
          onClick={() => setShowAll(false)}
        >
          Major Projects
        </button>
        <button
          className={showAll ? 'active' : ''}
          onClick={() => setShowAll(true)}
        >
          Mini Projects
        </button>
      </div>

      <div className="projects-grid">
        {showAll &&
          otherProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              {project.description && (
                <p className="description">{project.description}</p>
              )}

              {project.pages.length > 0 && (
                <div className="project-section">
                  <strong>Pages Included:</strong>
                  <ul>
                    {project.pages.map((page, i) => (
                      <li key={i}>{page}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tech.length > 0 && (
                <div className="project-section">
                  <strong>Technologies Used:</strong>
                  <ul>
                    {project.tech.map((techItem, i) => (
                      <li key={i}>{techItem}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.howToRun && (
                <div className="project-section">
                  <strong>How to Run:</strong>
                  <p>{project.howToRun}</p>
                </div>
              )}

              <div className="card-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}

        {!showAll && (
          <div className="placeholder-text">
            <p>🚧 Main projects coming soon. Stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
