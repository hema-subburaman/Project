import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Loginpage.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      setMessageColor('red');
      setMessage('⚠️ No account found. Please create an account.');
      return;
    }

    const user = JSON.parse(storedUser);

    if (username === user.username && password === user.password) {
      setMessageColor('green');
      setMessage('✅ Login successful!');
      setTimeout(() => {
        navigate('/user-selection'); // redirect to your 3-buttons page
      }, 1500);
    } else {
      setMessageColor('red');
      setMessage('❌ Incorrect username or password.');
    }
  };

  return (
    <div className="container">
      <h2>🔑 Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p id="message" style={{ color: messageColor }}>{message}</p>
      <p>Don't have an account? <Link to="/createaccount">Create Account</Link></p>
    </div>
  );
};

export default Login;