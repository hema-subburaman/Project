import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Loginpage.css';
import backgrounImage from '../assets/tractor.jpg';

const Loginpage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // backend expects email + password
        body: JSON.stringify({
          email: usernameOrEmail,  
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageColor("green");
        setMessage("✅ Login successful!");

        // Save the token in localStorage for authentication
        localStorage.setItem("token", data.access_token);

        setTimeout(() => {
          navigate("/user-selection"); // redirect to next page
        }, 1500);
      } else {
        setMessageColor("red");
        setMessage(data.error || "❌ Login failed!");
      }
    } catch (err) {
      setMessageColor("red");
      setMessage("⚠️ Server error. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>🔑 Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username / Email"
            className="input-box"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">Login</button>
        </form>
        <p id="message" style={{ color: messageColor }}>{message}</p>
        <p className="signup-text">
          Don't have an account? <Link to="/createaccount">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
