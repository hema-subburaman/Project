import React from "react";
import "./iconspage.css";

const Iconspage = () => {
  const openApp = (appName) => {
    alert(`${appName} app clicked!`);
  };

  return (
    <div className="app-container">
      <div className="app-icon" onClick={() => openApp("weather")}>
        <img
          src="https://img.icons8.com/ios-filled/100/000000/partly-cloudy-day.png"
          alt="Weather"
        />
        <span>Weather</span>
      </div>

      <div className="app-icon" onClick={() => openApp("fertilizer")}>
        <img
          src="https://img.icons8.com/ios-filled/100/000000/fertilizer.png"
          alt="Fertilizer"
        />
        <span>Fertilizer</span>
      </div>

      <div className="app-icon" onClick={() => openApp("quiz")}>
        <img
          src="https://img.icons8.com/ios-filled/100/000000/quiz.png"
          alt="Quiz"
        />
        <span>Quiz</span>
      </div>

      <div className="app-icon" onClick={() => openApp("doctor")}>
        <img
          src="https://img.icons8.com/ios-filled/100/000000/doctor-male.png"
          alt="Doctor"
        />
        <span>Doctor</span>
      </div>
    </div>
  );
};

export default Iconspage;