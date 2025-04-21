import React from 'react';
import './HeroSection.css';
import boyWithLaptop from './images/boy-with-laptop.svg';
import kidsOnBook from './images/kids-on-book.svg';
import googleLogo from './images/google-logo.svg';
import userAvatars from './images/user-avatars.svg';

// Import Google Fonts in index.html or add @import in CSS

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="left-image">
          <img src={boyWithLaptop} alt="Boy with laptop" className="boy-image" />
        </div>

        <div className="hero-text">
          <h1 className="hero-title">
            <span className="purple-text">Explore Our Top-Rated</span>
            <span className="pink-text">Stem Courses</span>
          </h1>

          <p className="hero-description">
            Empower young minds with essential problem-solving skills through engaging courses
            in math, coding, and technology. These hands-on programs foster creativity, critical
            thinking, and a strong foundation in STEM subjects.
          </p>

          <button className="demo-button">
            <span className="button-icon">🎓</span>
            Book a free demo lesson
          </button>
        </div>

        <div className="right-image">
          <img src={kidsOnBook} alt="Kids on flying book" className="kids-image" />
        </div>
      </div>

      <div className="wave-bottom">
        <div className="stats-container">
          <div className="stat-badge google-badge">
            <img src={googleLogo} alt="Google" className="google-logo" />
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
            <div className="stat-label">Student</div>
          </div>

          <div className="stat-badge users-badge">
            <img src={userAvatars} alt="User avatars" className="user-avatars" />
            <div className="plus-icon">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
