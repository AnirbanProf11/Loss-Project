import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="big-title-cta-container">
      <h1>LOSS</h1>
      <h1>PROJECT</h1>
      &nbsp;
      <div className="cta-buttons">
        <button
          type="button"
          className="btn btn-outline-dark btn-lg"
          onClick={() => (window.location.href = "/songs")}
        >
          Go To Songs List
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg"
          onClick={() => (window.location.href = "https://www.youtube.com")}
        >
          View On<br></br>
          <i className="fa-brands fa-youtube fa-3x color-yt"></i>
          <p>YouTube</p>
        </button>
      </div>
    </div>
  );
};

export default CTA;
