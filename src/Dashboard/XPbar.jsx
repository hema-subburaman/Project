import React from 'react';
import './xpbar.css';

const XPBar = ({ current, total }) => {
  const percent = Math.min(100, (current / total) * 100);

  return (
    <div className="xp-bar">
      <span>XP <strong>{current}/{total} to next level</strong></span>
      <div className="xp-bar-progress">
        <div className="xp-bar-filled" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default XPBar;