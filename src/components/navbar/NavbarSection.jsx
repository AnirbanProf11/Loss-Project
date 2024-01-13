import React from "react";
import "./navbar.css";

const NavbarSection = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div class="container-fluid">
          <a class="header_style" href="#">
            Loss Project
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mr-3 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  People
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Behind The Scenes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarSection;