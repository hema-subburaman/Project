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
        <Link to="/createaccount">CreateAccount</Link>
        <Link to="/user-selection">UserSelection</Link>
        <Link to="/farmer">Farmer</Link>
        <Link to="/student">Student</Link>
        <Link to="/general">General</Link>
        <Link to="/iconspage">Iconspage</Link>
        <Link to="/farmerinformation">FarmerInformation</Link>
        <Link to="/studentinformation">StudentInformation</Link>
        <Link to="/generalinformation">GeneralInformation</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
};

export default Navbar;