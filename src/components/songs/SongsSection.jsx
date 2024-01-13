import React from "react";
import "./songs.css";
import { useState } from "react";

const SongsSection = () => {
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSong(null);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) closeModal();
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
      <div className="container mt-5">
        <h1 className="text-center mb-4">Tracks On Loss Project</h1>
        {songs.map((song, index) => (
          <div
            key={index}
            className="song-item"
            onClick={() => handleSongClick(song)}
          >
            {song.name}
            <div className="content-wrapper">
              <div className="hover-effect"></div>
            </div>
          </div>
        ))}
        {showModal && (
          <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Listen To {selectedSong.name} On
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  {selectedSong.platforms.map((platform, index) => (
                    <button
                      key={index}
                      className="platform-button"
                      onClick={() => handlePlatformClick(platform)}
                    >
                      <i className={`bi bi-${platform} platform-icon`}></i>
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SongsSection;
