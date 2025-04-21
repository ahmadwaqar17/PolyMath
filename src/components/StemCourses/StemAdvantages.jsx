import React from 'react';
import './StemAdvantages.css';

// Import fonts
import '@fontsource/fredoka';
import '@fontsource/poppins';

// Advantage item component
export const AdvantageItem = ({ icon, title, description, titleColor }) => {
  return (
    <div className="advantage-item">
      <div className="advantage-icon" style={{ backgroundColor: `${titleColor}20` }}>
        <span>{icon}</span>
      </div>
      <div className="advantage-content">
        <h3 className="advantage-title" style={{ color: titleColor }}>{title}</h3>
        <p className="advantage-description">{description}</p>
      </div>
    </div>
  );
};

// Main component
const StemAdvantages = () => {
  // Advantage items data
  const advantageItems = [
    {
      id: 1,
      icon: "🏆",
      title: "Hands-on Learning",
      description: "Kids build real projects that spark creativity.",
      color: "#E91E63"
    },
    {
      id: 2,
      icon: "🔍",
      title: "STEM.org Certified",
      description: "Trusted, global-standard curriculum.",
      color: "#FFD166"
    },
    {
      id: 3,
      icon: "🏅",
      title: "Expert Teachers",
      description: "Learn from experienced mentors.",
      color: "#06D6A0"
    },
    {
      id: 4,
      icon: "🎮",
      title: "Fun & Age-Appropriate",
      description: "Courses tailored to every age group.",
      color: "#118AB2"
    },
    {
      id: 5,
      icon: "🏠",
      title: "Flexible & Online",
      description: "Learn anytime, from anywhere.",
      color: "#9370DB"
    },
    {
      id: 6,
      icon: "🚀",
      title: "21st-Century Skills",
      description: "Boost leadership, teamwork & problem-solving.",
      color: "#E76F51"
    },
    {
      id: 7,
      icon: "🌎",
      title: "Global Community",
      description: "Join a diverse group of young learners worldwide.",
      color: "#FFD166"
    }
  ];

  return (
    <div className="stem-advantages">
      <div className="search-container">
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Explore Courses by Age" />
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="advantages-content">
        <h2 className="advantages-title">
          <span className="purple-text">Advantages of Taking STEM</span>
          <span className="pink-text">Courses from Polymath-Kids</span>
        </h2>

        <div className="advantages-list">
          {advantageItems.map(item => (
            <AdvantageItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              titleColor={item.color}
            />
          ))}
        </div>

        <div className="demo-button-container">
          <button className="demo-button">Book a free demo lesson</button>
        </div>
      </div>

      <div className="decorative-images">
        <div className="left-images"></div>
        <div className="right-images"></div>
      </div>
    </div>
  );
};

export default StemAdvantages;
