import { timelineData } from "../musicData";
import React from "react";
import "./timeline.css";
import { FaSpotify, FaYoutube, FaAmazon } from "react-icons/fa";
import CountdownComponent from "../countdown/CountdownComponent";
import { useInView } from "react-intersection-observer"; // import useInView hook
import { motion } from "framer-motion"; // import motion component

// Define the variants for the card animation
const cardVariants = {
  hidden: {
    opacity: 0.5,
    y: 50,
    scale: 0.9,
    filter: "blur(3px)",
    pointerEvents: "none", // make the card unclickable
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    pointerEvents: "auto", // make the card clickable
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// TimelineItem component
const TimelineItem = ({ data, index, i }) => {
  // add index and i as props
  // use useInView hook to get the ref and inView value of the card
  const [ref, inView] = useInView({
    threshold: 0.5, // card is in view when 50% of it is visible
    triggerOnce: true, // only trigger once
  });

  return (
    // use motion.div instead of div and pass the variants and initial props
    <motion.div
      ref={ref}
      className="timeline-item"
      variants={cardVariants}
      initial="hidden"
      // change the animate prop to use the index and i values
      animate={index >= i ? "visible" : "hidden"} // animate based on the index and i values
      // add a whileHover prop to scale up the card on hover
      whileHover={{ scale: 1.1 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      }}
    >
      <div className="timeline-item-content">
        {/* use motion.span instead of span and add a whileHover prop */}
        <motion.span
          className="tag"
          style={{ background: data.category.color }}
          whileHover={{ scale: 1.1 }} // scale up the tag on hover
        >
          {data.category.tag}
        </motion.span>
        <time>{data.date}</time>
        {/* use motion.p instead of p and add an animate prop */}
        <motion.p
          animate={{
            color: inView ? "black" : "gray", // change the color based on the inView value
          }}
        >
          {data.text}
        </motion.p>
        <div className="icons">
          <a href="https://open.spotify.com">
            <FaSpotify size="1.5em" />
          </a>
          <a href="https://www.youtube.com/music">
            <FaYoutube size="1.5em" />
          </a>
          <a href="https://music.amazon.com">
            <FaAmazon size="1.5em" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Timeline component
const TimelineComponent = () => {
  // Get the current index of the timeline
  const [index, setIndex] = React.useState(0);
  const [currentDate, setCurrentDate] = React.useState(
    new Date(timelineData[0].date)
  );
  // Handle the click event on the timeline items
  const handleClick = (i) => {
    setIndex(i);
    setCurrentDate(new Date(timelineData[i].date));
  };

  return (
    // remove the AnimatePresence component
    <div className="timeline-container">
      <div className="timeline-line" />
      <div
        className="timeline-progress"
        style={{ height: `${(index + 1) * 10}%` }}
      />
      <CountdownComponent date={currentDate} />

      {timelineData.map((data, i) => (
        <div
          key={i}
          className={`timeline-item-wrapper ${i % 2 === 0 ? "left" : "right"} ${
            i <= index ? "active" : ""
          }`}
          onClick={() => handleClick(i)}
        >
          {/* pass the index and i values as props to the TimelineItem component */}
          <TimelineItem data={data} index={index} i={i} />
          {/* use motion.span instead of span and add a layout and layoutId props */}
          <motion.span
            className="circle"
            layout // enable layout animation
            layoutId={data.id} // assign a unique id for each circle
          />{" "}
        </div>
      ))}
    </div>
  );
};

export default TimelineComponent;
