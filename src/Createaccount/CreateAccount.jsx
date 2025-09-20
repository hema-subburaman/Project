import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Createaccount.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirm } = formData;

    if (!username || !email || !password || !confirm) {
      setMessageColor('red');
      setMessage('⚠️ Please fill all fields!');
      return;
    }

    if (password !== confirm) {
      setMessageColor('red');
      setMessage('❌ Passwords do not match!');
      return;
    }

    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    setMessageColor('green');
    setMessage('✅ Account created successfully!');
  };

  return (
    <div className="container">
      <h2>📝 Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
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