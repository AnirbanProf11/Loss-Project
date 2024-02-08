import React, { useState } from "react";
import "./bts.css";
import { NavbarSection } from "../../components";

const BTS = () => {
  const btsVideoData = [
    {
      id: 1,
      thumbnail: "https://picsum.photos/id/201",
      title: "Nyangto Sayak",
      videoSrc: "https://youtube.com/embed/KKdfJ7Up2T8",
    },
    {
      id: 2,
      thumbnail: "https://picsum.photos/id/105",
      title: "Dhon Kapai",
      videoSrc: "https://youtube.com/embed/HRRL9XgGWjw",
    },
    {
      id: 13,
      thumbnail: "https://picsum.photos/id/332",
      title: "Buur Chatta",
      videoSrc: "https://youtube.com/embed//NFEVZyBKvd0",
    },
  ];

  return (
    <>
      <NavbarSection />
      <div className="container-sm mt-5">
        <h2 className="text-center mb-4 text-white text-style">
          Behind The Scenes
        </h2>
        <div className="row justify-content-around">
          {btsVideoData.map((video) => (
            <div key={video.id} className="col-md-4 mb-4 video-item">
              <h3 className="text-white">{video.title}</h3>
              <div className="embed-responsive embed-responsive-16by9 mb-3">
                <iframe
                  title={video.title}
                  className="embed-responsive-item"
                  src={video.videoSrc}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default BTS;
