import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Sign In</Link>
      <Link to="/createaccount">Create Account</Link>
    </nav>
  );
};

export default Navbar;