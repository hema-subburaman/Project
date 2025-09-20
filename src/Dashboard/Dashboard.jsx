import React, { useState } from 'react';
import './Dashboard.css';
import XPBar from './XPBar';
import Tabs from './Tabs';
import ModuleBlock from './ModuleBlock';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('play');
  const xp = { current: 210, total: 200 };
  const coins = 70;
  const badges = 2;

  return (
    <div className="container">
      <div className="header">
        <div className="level">
          Your Progress <span className="streak">Level 2 • Streak 4 days</span>
        </div>
      </div>

      <XPBar current={xp.current} total={xp.total} />

      <div className="badges">
        <div className="coin">Coins: <span>{coins}</span></div>
        <div className="badge">Badges: <span>{badges}</span></div>
      </div>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'play' && (
        <div className="tab-content">
          <ModuleBlock
            title="Water Management"
            details="2/2 completed"
            percent="100%"
            color="#3a94ec"
            bg="#e2f1ff"
          />
          <ModuleBlock
            title="Soil Health"
            details="2/2 completed"
            percent="100%"
            color="#24b295"
            bg="#e7f9f5"
          />
        </div>
      )}

      {activeTab === 'rewards' && (
        <div className="tab-content">
          <p>Rewards tab coming soon!</p>
        </div>
      )}

      {activeTab === 'impact' && (
        <div className="tab-content">
          <p>Impact tab coming soon!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;