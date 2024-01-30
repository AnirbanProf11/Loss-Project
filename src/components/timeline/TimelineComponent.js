import React from "react";
import "./timeline.css";
import { FaSpotify, FaYoutube, FaAmazon } from "react-icons/fa";

// Data array
const timelineData = [
  {
    text: "Started learning React",
    date: "January 2020",
    category: {
      tag: "react",
      color: "#61dafb",
    },
    link: {
      url: "https://reactjs.org/",
      text: "Learn more",
    },
  },
  {
    text: "Created my first React app",
    date: "February 2020",
    category: {
      tag: "app",
      color: "#ffbf00",
    },
    link: {
      url: "https://github.com/my-app",
      text: "View code",
    },
  },
  {
    text: "Deployed my app to Netlify",
    date: "March 2020",
    category: {
      tag: "deploy",
      color: "#00c853",
    },
    link: {
      url: "https://my-app.netlify.app/",
      text: "Visit site",
    },
  },
  {
    text: "Added authentication and database to my app",
    date: "April 2020",
    category: {
      tag: "firebase",
      color: "#ff8f00",
    },
    link: {
      url: "https://firebase.google.com/",
      text: "Learn more",
    },
  },
  {
    text: "Refactored my code and added tests",
    date: "May 2020",
    category: {
      tag: "code",
      color: "#673ab7",
    },
    link: {
      url: "https://jestjs.io/",
      text: "Learn more",
    },
  },
  {
    text: "Published a blog post about my app",
    date: "June 2020",
    category: {
      tag: "blog",
      color: "#2196f3",
    },
    link: {
      url: "https://my-blog.com/my-app",
      text: "Read more",
    },
  },
  {
    text: "Received positive feedback and suggestions",
    date: "July 2020",
    category: {
      tag: "feedback",
      color: "#e91e63",
    },
    link: {
      url: "https://twitter.com/my-app",
      text: "Follow me",
    },
  },
];

// TimelineItem component
const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      <div className="icons">
        <a href="https://open.spotify.com">
          <FaSpotify />
        </a>
        <a href="https://www.youtube.com/music">
          <FaYoutube />
        </a>
        <a href="https://music.amazon.com">
          <FaAmazon />
        </a>
      </div>
    </div>
  </div>
);

// Timeline component
const TimelineComponent = () => {
  // Get the current index of the timeline
  const [index, setIndex] = React.useState(0);

  // Handle the click event on the timeline items
  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      <div
        className="timeline-progress"
        style={{ height: `${(index + 1) * 10}%` }}
      />
      {timelineData.map((data, i) => (
        <div
          key={i}
          className={`timeline-item-wrapper ${i % 2 === 0 ? "left" : "right"} ${
            i <= index ? "active" : ""
          }`}
          onClick={() => handleClick(i)}
        >
          <TimelineItem data={data} />
          <span
            className="circle"
            style={{ borderColor: i <= index ? "red" : "#e17b77" }}
          />
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
