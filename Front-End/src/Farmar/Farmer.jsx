import React from 'react';
import './Farmer.css';

const Farmer = () => {
  const handleChallenge = () => {
    alert('Start Challenge: Water Management 🌊');
  };

  return (
    <div className="farmer-dashboard">
      <h1>👩‍🌾 Farmer Dashboard</h1>
      <p className="info">Welcome, Farmer! Start your sustainable farming journey.</p>
      <button onClick={handleChallenge}>Start Challenge</button>
    </div>
  );
};

export default Farmer;