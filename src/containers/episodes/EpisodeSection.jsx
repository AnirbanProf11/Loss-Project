import React from "react";
import "./episodes.css";

const episodes = [
  { name: "Intro", description: "XYZXYZ" },
  { name: "Mathye Haath", description: "XYZXYZ" },
  { name: "Tara Kor", description: "XYZXYZ" },
  { name: "3 Chokka", description: "XYZXYZ" },
  { name: "Circle", description: "XYZXYZ" },
  { name: "Kara Bhai", description: "XYZXYZ" },
  { name: "Dewale Pith", description: "XYZXYZ" },
  { name: "Ces't La Vie", description: "XYZXYZ" },
  { name: "Outro", description: "XYZXYZ" },
];

const BoxComponent = () => {
  return (
    <div className="box-component">
      <video width="400" height="180">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls="controls"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

const EpisodeSection = () => {
  return (
    <div className="episode-section">
      <h2 className="episode-title">EPISODES</h2>
      <div className="episodes-list">
        {episodes.map((episode, index) => (
          <div className="episode-item" key={index}>
            <div className="left-content">
              <h3>{episode.name}</h3>
              <p>{episode.description}</p>
            </div>
            <div className="right-content">
              <BoxComponent />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodeSection;
