import React from 'react';
import './Student.css';

const Student = () => {
  const handleQuiz = () => {
    alert('Start Quiz: Soil Health 🌱');
  };

  return (
    <div className="student-dashboard">
      <h1>🎓 Student Dashboard</h1>
      <p className="info">Welcome, Student! Learn about sustainability in farming.</p>
      <button onClick={handleQuiz}>Start Quiz</button>
    </div>
  );
};

export default Student;