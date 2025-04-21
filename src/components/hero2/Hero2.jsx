import React from 'react';
import './Hero2.css';
import banner from './banner.jpg';

const Hero2 = () => {
  return (
    <div className="hero2-section">
      <img src={banner} alt="STEM Courses Banner" className="banner-image" />

      <div className="stats-container">
        <div className="stat-badge google-badge">
          <div className="google-logo">
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </div>
          <div className="rating">
            <div className="stars">★★★★★</div>
            <div className="rating-text">4.8/5 stars</div>
          </div>
        </div>

        <div className="stat-badge courses-badge">
          <div className="stat-number">50+</div>
          <div className="stat-label">Courses</div>
        </div>

        <div className="stat-badge students-badge">
          <div className="stat-number">10k+</div>
          <div className="stat-label">Students</div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
