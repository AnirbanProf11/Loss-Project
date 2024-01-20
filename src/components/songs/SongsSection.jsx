import React from "react";
import "./songs.css";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const animateIn = () => {
    gsap.to(".cont1", { x: "-50%", duration: 0.3, ease: "power3.inOut" });
    gsap.to(".cont2", { x: "0%", duration: 0.3, ease: "power3.inOut" });
  };

  const animateOut = (onComplete) => {
    gsap.to(".cont1", { x: "-100%", duration: 0.3, ease: "power3.inOut" });
    gsap
      .to(".cont2", { x: "50%", duration: 0.3, ease: "power3.inOut" })
      .then(() => {
        if (onComplete) {
          onComplete();
        }
      });
  };

  const animateToggle = () => {
    if (selectedSong) animateIn();
    else animateOut();
  };
  const handleSongClick = (song) => {
    if (selectedSong === song) {
      animateOut();
      setTimeout(() => setSelectedSong(null), 500);
    } else {
      setSelectedSong(song);
      animateIn();
    }
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
        <div
          className={`container-sm cont1 ${selectedSong ? "list-hidden" : ""}`}
        >
          <div className="list-item">
            {songs.map((song, index) => (
              <div
                key={index}
                className="list-items"
                onClick={() => handleSongClick(song)}
              >
                <strong>{song.name.replace("-", "")}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="container-sm cont2">
          <h3>Listen To {songs.name} On Your Favourite Streaming Platform</h3>
          <div className="platform-icons">
            <div className="platform-icon">
              {<i class="fa-brands fa-spotify fa-3x"></i>}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {<i class="fa-brands fa-amazon fa-3x"></i>}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {<i class="fa-brands fa-youtube fa-3x"></i>}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {<i class="fa-brands fa-apple fa-4x"></i>}
            </div>
          </div>
          Or{" "}
          <button className="btn btn-lg btn-primary mt-2 mb-2">
            Click Here
          </button>{" "}
          To Find More Streaming Platforms
          <h4 className="yt-title">Stream On YouTube</h4>
          <iframe
            title="YouTube Video"
            width="100%"
            height={`calc(100%-40px)`}
            src="https://www.youtube.com/embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default SongsSection;
