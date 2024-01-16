import React from "react";
import "./people.css";

const peopleData = [
  {
    id: 1,
    name: "WhySir?",
    photo: "https://picsum.photos/id/27/200/300",
    credentials: {
      instagram: "",
      facebook: "",
      website: "",
    },
    contribution: "Rapper - Songwriter - Composer - Lyricist",
  },
  {
    id: 2,
    name: "DeyMon",
    photo: "https://picsum.photos/id/68/200/300",
    credentials: {
      instagram: "",
      facebook: "",
      spotify: "",
    },
    contribution: "Producer - Composer - Sound Engineer",
  },
  {
    id: 3,
    name: "Knawck",
    photo: "https://picsum.photos/id/107/200/300",
    credentials: {
      instagram: "",
      facebook: "",
      spotify: "",
    },
    contribution: "Producer - Composer - Sound Engineer",
  },
  {
    id: 4,
    name: "Suge",
    photo: "https://picsum.photos/id/117/200/300",
    credentials: {
      instagram: "",
      facebook: "",
      spotify: "",
    },
    contribution: "Mixing & Sound Engineer",
  },
  {
    id: 5,
    name: "Rishi",
    photo: "https://picsum.photos/id/137/200/300",
    credentials: {
      instagram: "",
      facebook: "",
      website: "",
    },
    contribution: "Director - Cinematographer - Colorist",
  },
];

const PeopleSection = () => {
  return (
    <div className="people-section-container">
      <h1 className="team-title">THE TEAM</h1>
      <div className="people-container">
        {peopleData.map((person, index) => (
          <div key={person.id} className=" person-item">
            <div className="person-photo">
              <img src={person.photo} alt={person.name} />
            </div>
            <div className="person-details">
              <h3 className="person-name">{person.name}</h3>
              <p className="person-contribution">{person.contribution}</p>
              <div className="person-links">
                <a
                  href={person.credentials.website}
                  target="_blank"
                  className="person-links website-icon"
                >
                  <i className="fas fa-globe"></i>
                </a>
                <a
                  href={person.credentials.spotify}
                  target="_blank"
                  className="person-links spotify-icon"
                >
                  <i className="fab fa-spotify"></i>
                </a>
                <a
                  href={person.credentials.instagram}
                  target="_blank"
                  className="person-links instagram-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href={person.credentials.facebook}
                  target="_blank"
                  className="person-links facebook-icon"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;
