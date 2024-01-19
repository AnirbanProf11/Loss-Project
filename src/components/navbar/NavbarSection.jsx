import React, { useState } from "react";
import "./navbar.css";
const NavbarSection = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <div
        className={
          isNavExpanded
            ? "navigation-menu-left expanded"
            : "navigation-menu-left"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/songs">Songs</a>
          </li>
        </ul>
      </div>
      <a href="/" className="brand-name">
        Loss
      </a>
      <p className="para">Project</p>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/People">People</a>
          </li>
          <li>
            <a href="/bts">BTS</a>
          </li>
        </ul>
      </div>
      <button
        className="hamburger"
        title="burgerbutton"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default NavbarSection;
