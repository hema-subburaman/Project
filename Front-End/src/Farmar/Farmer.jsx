import React from 'react';
import { useNavigate } from "react-router-dom";
import './Farmer.css';

const Farmer = () => {
  const navigate = useNavigate();
  const handleChallenge = () => {
    alert('Start Challenge: Agriculture based Questions 🌊');
    navigate("/quiz"); 
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