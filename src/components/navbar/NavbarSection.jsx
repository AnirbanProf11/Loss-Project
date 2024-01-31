// NavbarSection.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import "./navbar.css";

const NavbarSection = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Loss Project
        </Link>
        <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/songs" className="nav-link" onClick={toggleMenu}>
              Songs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/people" className="nav-link" onClick={toggleMenu}>
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bts" className="nav-link" onClick={toggleMenu}>
              Behind The Scenes
            </Link>
          </li>
        </ul>
        <div className={showSearch ? "search-box active" : "search-box"}>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="burger" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div className="search-icon" onClick={toggleSearch}>
        <FaSearch />
      </div>
    </nav>
  );
};

export default NavbarSection;
