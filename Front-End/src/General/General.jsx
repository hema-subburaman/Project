import React from 'react';
import './General.css';

const General = () => {
  const handleViewImpact = () => {
    alert('View Impact Stats 📊');
  };

  return (
    <div className="general-dashboard">
      <h1>👤 General User Dashboard</h1>
      <p className="info">Welcome! Explore sustainable farming practices.</p>
      <button onClick={handleViewImpact}>View Impact</button>
    </div>
  );
};

export default General;