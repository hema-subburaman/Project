import React from 'react';
import './ModuleBlock.css';

const ModuleBlock = ({ title, details, percent, color, bg }) => {
  return (
    <div className="module-block">
      <span
        className="progress-percent"
        style={{ background: bg, color: color }}
      >
        {percent}
      </span>
      <div className="module-title">{title}</div>
      <div className="module-details">{details}</div>
      <button className="continue-btn">Continue</button>
    </div>
  );
};

export default ModuleBlock;