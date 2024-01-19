import React from "react";
import "./LandingPage.css";
import { Cta } from "../../components";

const LandingPageSection = () => {
  return (
    <>
      <div className="flex-container bg_gradient">
        <img
          src="https://picsum.photos/200/600"
          className="responsive-image" alt="images" 
        ></img>
        <img
          src="https://picsum.photos/200/600"
          className="responsive-image" alt="images"
        ></img>
        <div className="hero">
          <Cta />
        </div>
        <img
          src="https://picsum.photos/200/600"
          className="responsive-image" alt="images"
        ></img>
        <img
          src="https://picsum.photos/200/600"
          className="responsive-image" alt="images"
        ></img>
      </div>
    </>
  );
};

export default LandingPageSection;
