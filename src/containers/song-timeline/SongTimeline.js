import React from "react";
import "./songtimeline.css";

function Branch({ title, link, side }) {
  return (
    <div className={`branch ${side === "left" ? "branch-reverse" : ""}`}>
      <div className="song-details">
        <h3 className="song-title">{title}</h3>
        <a href={link} className="song-link">
          Listen here
        </a>
      </div>
    </div>
  );
}

function SongTimeline() {
  const songs = [
    {
      name: "Intro",
      link: "www.spotify.com",
    },
    {
      name: "Mathaye Haath",
      link: "www.spotify.com",
    },
    {
      name: "Tara Kor",
      link: "www.spotify.com",
    },
    {
      name: "3 Chokka",
      link: "www.spotify.com",
    },
    {
      name: "Circle",
      link: "www.spotify.com",
    },
    {
      name: "Kara Bhai",
      link: "www.spotify.com",
    },
    {
      name: "Dewale Pith",
      link: "www.spotify.com",
    },
    {
      name: "C'est La Vie",
      link: "www.spotify.com",
    },
    {
      name: "Outro",
      link: "www.spotify.com",
    },
  ];

  return (
    <>
    <div className="header-logo">Episodes</div>
    <div className="timeline">
      {songs.map((song, index) => (
        <Branch
          key={index}
          title={song.name}
          link={song.link}
          side={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
    </>
  );
}

export default SongTimeline;
