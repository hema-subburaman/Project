import React from 'react';
import { Link } from 'react-router-dom';
import './AccountForm.css';

const AccountForm = () => {
  return (
    <div className="container">
      <h2>🔑 Sign In</h2>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
      <p>
        Don't have an account? <Link to="/createaccount">Sign Up</Link>
      </p>
    </div>
  );
};

export default AccountForm;