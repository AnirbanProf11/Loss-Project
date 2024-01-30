import React from "react";
import "./LandingPage.css";
import { Cta, Timeline } from "../../components";
import { PeopleSection } from "../../components";
import { Bts } from "../../components";
import NavbarSection from "../../components/navbar/NavbarSection";
import SongTimeline from "../song-timeline/SongTimeline";

const LandingPageSection = () => {
  return (
    <>
      <div className="nav-div">
        <NavbarSection />
      </div>

      <div className="flex-container bg_gradient">
        <img
          src="https://picsum.photos/200/600"
          className="responsive-image"
          alt="images"
        ></img>
        <img
          src="https://picsum.photos/200/600"
          className="responsive-image"
          alt="images"
        ></img>
        <div className="hero">
          <Cta />
        </div>
        <img
          src="https://picsum.photos/200/600"
          className="responsive-image"
          alt="images"
        ></img>
        <img
          src="https://picsum.photos/200/600"
          className="responsive-image"
          alt="images"
        ></img>
      </div>

      <SongTimeline />
      <Timeline />
      <PeopleSection />
      <Bts />
    </>
  );
};

export default LandingPageSection;
