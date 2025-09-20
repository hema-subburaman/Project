import React from 'react';
import './tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['play', 'rewards', 'impact'];

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;