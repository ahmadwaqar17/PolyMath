import React from 'react';
import './PopularCourses.css';

const CourseCard = ({ title, image, iconBgColor, iconText }) => {
  return (
    <div className="course-card">
      <div className="card-image-container">
        <img
          src={image || "https://placehold.co/300x200/e9e9e9/9C27B0?text=Course+Image"}
          alt={`${title} course image - Polymath Kids STEM education`}
          className="card-image"
        />
        <div
          className="card-icon"
          style={{ backgroundColor: iconBgColor }}
        >
          <span>{iconText}</span>
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default CourseCard;
