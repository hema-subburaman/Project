import React from "react";
import { useNavigate } from "react-router-dom";
import "./iconspage.css";
import fertilizerImage from "/fertilizer.jpg"; // adjust path if needed

const Iconspage = () => {
  const navigate = useNavigate();

  const openApp = (appName) => {
    alert(`${appName} app clicked!`);
  };

  const handleClickQuiz = () => {
    navigate("/quiz");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/loginpage");
  };

  const apps = [
    { name: "Weather", icon: "https://img.icons8.com/ios-filled/100/000000/partly-cloudy-day.png", action: () => openApp("Weather") },
    { name: "Fertilizer", icon: fertilizerImage, action: () => openApp("Fertilizer") },
    { name: "Quiz", icon: "https://img.icons8.com/ios-filled/100/000000/quiz.png", action: handleClickQuiz },
    { name: "Doctor", icon: "https://img.icons8.com/ios-filled/100/000000/doctor-male.png", action: () => openApp("Doctor") },
  ];

  return (
    <div>
    <h1> 🌱GreenQuest </h1><br></br>
    <div className="iconspage-wrapper">
      <div className="apps-grid">
        {apps.map((app, index) => (
          <div key={index} className="app-card" onClick={app.action}>
            <img src={app.icon} alt={app.name} />
            <span>{app.name}</span>
          </div>
        ))}
      </div>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
    </div>
  );
};

export default Iconspage;
