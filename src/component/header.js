import React from "react";
import { Link } from "react-router-dom";  
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="left-content">
          <img src="/images/myntra logo.jpg" alt="Myntra Logo" className="logo" />
          <h1 className="brand-name">Myntra</h1>
        </div>
        <div className="right-content">
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
