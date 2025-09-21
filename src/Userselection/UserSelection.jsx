import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserSelection.css';

const UserSelection = () => {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  return (
    <div className="user-selection">
      <h1>🌱 Sustainable Farm Quest</h1>
      <div className="buttons">
        <button className="farmer" onClick={() => goTo('/farmer')}>👩‍🌾 Farmer</button>
        <button className="student" onClick={() => goTo('/student')}>🎓 Student</button>
        <button className="general" onClick={() => goTo('/general')}>👤 General User</button>
      </div>
    </div>
  );
};

export default UserSelection;