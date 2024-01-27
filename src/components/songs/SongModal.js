import React from "react";
import "./songmodal.css";
const SongModal = (selectedSong, onClose) => {
  return (
    <div className="song-modal">
      <div className="modal-content">
        <h2>Listen To {selectedSong.name} On :</h2>
        <iframe
          title="YouTube Video"
          width="100%"
          height="220px"
          src="https://www.youtube.com/embed"
          allowFullScreen
        />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SongModal;
