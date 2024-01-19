import React from "react";
import "./songs.css";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const SongsSection = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const songs = [
    {
      name: "Intro",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
    {
      name: "Mathaye Haath",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
    {
      name: "Tara Kor",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
    {
      name: "3 Chokka",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
    {
      name: "Circle",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
    {
      name: "Kara Bhai",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
    {
      name: "Dewale Pith",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
    {
      name: "C'est' La Vie",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
    {
      name: "Outro",
      platforms: ["Spotify", "YouTube Music", "Amazon Music", "Apple Music"],
    },
  ];

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };
  const handlePlatformClick = (platform) => {
    switch (platform) {
      case "Spotify":
        window.location.href = "https://www.spotify.com";
        break;
      case "YouTube Music":
        window.location.href = "https://www.spotify.com";
        break;
      case "Amazon Music":
        window.location.href = "https://www.spotify.com";
        break;
      case "Apple Music":
        window.location.href = "https://www.spotify.com";
        break;

      default:
        break;
    }
  };


  return (
    <>
      <h1 className="title-head">Tracks On Loss Project</h1>

      <div className="container-dad">
        <div className="container-sm cont1">
          <ul>
            {songs.map((song, index) => (
              <li key={index} onClick={() => handleSongClick(song)}>
                <strong>{song.name}</strong> - {song.platforms.join(" | ")}
              </li>
            ))}
          </ul>
        </div>
        <div className="container-sm cont2">
          <div className="platform-icons">
            <i className="fa-brands fa-spotify" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SongsSection;
