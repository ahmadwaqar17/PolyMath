import React from 'react';
import './PopularCourses.css';
import CourseCard from './CourseCard';

const PopularCourses = () => {
  // Course data array
  const courses = [
    {
      id: 1,
      title: "Math's Portal",
      image: "", // Add your image path here
      iconBgColor: "#E91E63",
      iconText: "123"
    },
    {
      id: 2,
      title: "Coding & Technology",
      image: "", // Add your image path here
      iconBgColor: "#9C27B0",
      iconText: "<>"
    },
    {
      id: 3,
      title: "Graphic Design & Creativity",
      image: "", // Add your image path here
      iconBgColor: "#2196F3",
      iconText: "🎨"
    },
    {
      id: 4,
      title: "Quran & Islamic Studies",
      image: "", // Add your image path here
      iconBgColor: "#03A9F4",
      iconText: "☪️"
    },
    {
      id: 5,
      title: "Business & Entrepreneurship",
      image: "", // Add your image path here
      iconBgColor: "#FFC107",
      iconText: "💼"
    },
    {
      id: 6,
      title: "Engineering & Technology",
      image: "", // Add your image path here
      iconBgColor: "#4CAF50",
      iconText: "🔧"
    },
    {
      id: 7,
      title: "Architecture & Interior Design",
      image: "", // Add your image path here
      iconBgColor: "#E91E63",
      iconText: "🏛️"
    },
    {
      id: 8,
      title: "Communication & Public Speaking",
      image: "", // Add your image path here
      iconBgColor: "#00BCD4",
      iconText: "🗣️"
    },
    {
      id: 9,
      title: "Space Sciences",
      image: "", // Add your image path here
      iconBgColor: "#9C27B0",
      iconText: "🚀"
    }
  ];

  return (
    <div className="popular-courses">
      <h2 className="courses-title"><span className="title-first">Our Popular</span> <span className="title-second">Stem Courses</span></h2>

      <div className="courses-grid">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            title={course.title}
            image={course.image}
            iconBgColor={course.iconBgColor}
            iconText={course.iconText}
          />
        ))}
      </div>

      <div className="demo-button-container">
        <button className="demo-button">Book a free demo lesson</button>
      </div>
    </div>
  );
};

export default PopularCourses;
