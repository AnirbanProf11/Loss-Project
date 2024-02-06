import React from "react";
import VideoPlayer from "react-video-js-player";
import { motion } from "framer-motion";

import "./videoComponent.css";

function TrailerComponent() {
  // Define the video source and poster
  const video = {
    src: "https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4",
    poster:
      "https://res.cloudinary.com/codelife/image/upload/v1637805738/1.png",
  };

  // Define the callback function for when the video player is ready
  function onPlayerReady(player) {
    // You can access the video.js player object here
    console.log("Player is ready: ", player);
  }

  return (
    <div className="container">
      {/* Wrap the video player component with a motion component */}
      <motion.div
        className="motion-div"
        animate={{ scale: 1.2 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <VideoPlayer
          className="video-player"
          controls={true}
          src={video.src}
          poster={video.poster}
          width="720"
          height="420"
          onReady={onPlayerReady}
        />
      </motion.div>
    </div>
  );
}

export default TrailerComponent;
