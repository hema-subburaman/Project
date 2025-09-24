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
      <h1>🌱 GreenQuest</h1>
      <div className="buttons">
        <button className="farmer" onClick={() => goTo('/farmerinformation')}>👩‍🌾 Farmer</button>
        <button className="student" onClick={() => goTo('/studentinformation')}>🎓 Student</button>
        <button className="general" onClick={() => goTo('/generalinformation')}>👤 General User</button>
      </div>
    </div>
  );
};

export default UserSelection;