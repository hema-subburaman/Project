import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">GreenQuest</h2>
      <div className="nav-links">
        <Link to="/">Getstarted</Link>
        <Link to="/loginpage">Loginpage</Link>
        <Link to="/createaccount">Createaccount</Link>
      </div>
    </nav>
  );
};

export default Navbar;