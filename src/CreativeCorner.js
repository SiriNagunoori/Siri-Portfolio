import React from 'react';
import './CreativeCorner.css';
import birthday1 from './assets/BirthdayDecor.jpg';
import birthday2 from './assets/BirthdayDecor1.jpg';
import photobooth1 from './assets/PhotoBooth1.jpg';
import oilpastel1 from './assets/OilPastel1.jpg';
import oilpastel2 from './assets/OilPastel2.jpg';
import oilpastel3 from './assets/OilPastel3.jpg';
import heart from './assets/Heart.jpg';
import ghibili from './assets/Ghibili.jpg';
const CreativeCorner = () => {
  return (
    <div className="creative-corner-container">
      <h2 className="creative-heading">🎨 Welcome to My Creative Corner</h2>
      <p className="creative-sub">A glimpse into my artistic and musical world</p>

      {/* 🎨 Art Section */}
      <section className="creative-section">
        <h3 className="section-title">My Art Gallery</h3>
        <div className="art-gallery">
          <img src={oilpastel1} alt="Artwork 1" />
        </div>
      </section>
      <section className="creative-section">
        
        <div className="art-gallery">
          <img src={oilpastel2} alt="Artwork 2" />
        </div>
      </section>
      <section className="creative-section">
       
        <div className="art-gallery">
          <img src={oilpastel3} alt="Artwork 3" />
        </div>
      </section>
      <section className="creative-section">
      
        <div className="art-gallery">
          <img src={heart} alt="Artwork 4" />
        </div>
      </section>
      <section className="creative-section">
        
        <div className="art-gallery">
          <img src={ghibili} alt="Artwork 5" />
        </div>
      </section>

      
      {/* 🧵 DIY Section */}
      <section className="creative-section">
        <h3 className="section-title">My DIY Projects</h3>
        <div className="diy-gallery">
          <div className="diy-card">
            <img src={birthday1} alt="DIY 1" />
            <p className="diy-desc">Birthday Decor</p>
          </div>
          <div className="diy-card">
            <img src={birthday2} alt="DIY 2" />
            <p className="diy-desc">Birthday Decor</p>
          </div>
          <div className="diy-card">
            <img src={photobooth1} alt="DIY 3" />
            <p className="diy-desc">Photo Booth</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeCorner;
