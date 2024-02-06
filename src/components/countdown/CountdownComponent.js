import React, { useEffect, useState } from "react";
import "./countdown.css";

// Countdown component
const CountdownComponent = () => {
  // Get the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Set the target date to June 21st, 2024
  const date = new Date(2024, 5, 21); // Note: month is zero-based

  // Get the difference between the current time and the target date
  const diff = date - currentTime;

  // Calculate the days, hours, minutes and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Update the current time every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <span className="countdown-value">{days}</span>
        <br></br>
        <span className="countdown-label">Days</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{hours}</span>
        <br></br>
        <span className="countdown-label">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{minutes}</span>
        <br></br>
        <span className="countdown-label">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{seconds}</span>
        <br></br>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownComponent;
