import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Createaccount.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const navigate = useNavigate(); // to redirect after signup success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = formData;

    if (!name || !email || !password || !confirm) {
      setMessageColor('red');
      setMessage('⚠️ Please fill all fields!');
      return;
    }

    if (password !== confirm) {
      setMessageColor('red');
      setMessage('❌ Passwords do not match!');
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageColor('green');
        setMessage('✅ Account created successfully!');
        
        // Optionally store token or user info
        localStorage.setItem("token", data.access_token); 

        // Redirect to login or profile page
        setTimeout(() => navigate("/loginpage"), 1500);

      } else {
        setMessageColor('red');
        setMessage(data.msg || "❌ Signup failed!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessageColor('red');
      setMessage("⚠️ Server error. Try again later!");
    }
  };

  return (
    <div className="container">
      <h2>📝 Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="name" value={formData.name} onChange={handleChange} required />
        <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" id="confirm" placeholder="Confirm Password" value={formData.confirm} onChange={handleChange} required />
        <button type="submit">Create Account</button>
        <p style={{ color: messageColor }}>{message}</p>
        <p>Already have an account? <Link to="/loginpage">Sign In</Link></p>
      </form>
    </div>
  );
};

export default CreateAccount;
