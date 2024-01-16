import React, { useState } from "react";
import "./navbar.css";

const NavbarSection = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`navbar ${isCollapsed ? "collapsed" : "opened"}`}>
      <div className="container">
        <button
          className={`navbar-toggler ${isCollapsed ? "" : "open"}`}
          type="button"
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav ${isCollapsed ? "collapsed" : ""}`}>
          <li className="nav-item">
            <a className="nav-link" href="/" data-tooltip="Home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/songs" data-tooltip="Songs">
              Songs
            </a>
          </li>
        </ul>

        <div className="spacer"></div>

        <a className="navbar-brand" href="/" id="lossProjectTitle">
          LOSS PROJECT
        </a>

        <div className="spacer"></div>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/bts" data-tooltip="BTS">
              Behind The Scenes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/people" data-tooltip="People">
              People
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarSection;
