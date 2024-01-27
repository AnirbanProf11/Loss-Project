import React from "react";
import "./teamsection.css";
import NavbarSection from "../../components/navbar/NavbarSection";

const peopleData = [
  {
    id: 1,
    name: "WhySir?",
    photo: "https://picsum.photos/id/27/200/300",
    credentials: {
      instagram: "dummy",
      facebook: "dummy",
      spotify: "dummy",
    },
    contribution: "Rapper - Songwriter - Composer - Lyricist",
  },
  {
    id: 2,
    name: "DeyMon",
    photo: "https://picsum.photos/id/68/200/300",
    credentials: {
      instagram: "dummy",
      facebook: "dummy",
      spotify: "dummy",
    },
    contribution: "Producer - Composer - Sound Engineer",
  },
  {
    id: 3,
    name: "Knawck",
    photo: "https://picsum.photos/id/107/200/300",
    credentials: {
      instagram: "dummy",
      facebook: "dummy",
      spotify: "dummy",
    },
    contribution: "Producer - Composer - Sound Engineer",
  },
  {
    id: 4,
    name: "Suge",
    photo: "https://picsum.photos/id/117/200/300",
    credentials: {
      instagram: "dummy",
      facebook: "dummy",
      spotify: "dummy",
    },
    contribution: "Mixing Engineer - Sound Engineer",
  },
  {
    id: 5,
    name: "Rishi",
    photo: "https://picsum.photos/id/137/200/300",
    credentials: {
      instagram: "dummy",
      facebook: "dummy",
      website: "dummy",
    },
    contribution: "Director - Cinematographer - Colorist",
  },
];

const TeamSection = () => {
  return (
    <>
      <NavbarSection />
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
                  {person.credentials.website && (
                    <a
                      href={person.credentials.website}
                      target="_blank"
                      className="person-links website-icon"
                      rel="noreferrer"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  )}
                  {person.credentials.spotify && (
                    <a
                      href={person.credentials.spotify}
                      target="_blank"
                      className="person-links spotify-icon"
                      rel="noreferrer"
                    >
                      <i className="fab fa-spotify"></i>
                    </a>
                  )}
                  {person.credentials.instagram && (
                    <a
                      href={person.credentials.instagram}
                      target="_blank"
                      className="person-links instagram-icon"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {person.credentials.facebook && (
                    <a
                      href={person.credentials.facebook}
                      target="_blank"
                      className="person-links facebook-icon"
                      rel="noreferrer"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="find-more-button-container">
          <a
            href="/bts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary find-more-button"
          >
            Find More
          </a>
          <p className="find-more-later-text">
            About Who Helped Us Make This Possible
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
