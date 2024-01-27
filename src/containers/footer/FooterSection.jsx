import React from "react";
import "./footer.css";

const FooterSection = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5 foot-font">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h3>About Us</h3>
            <h4>The Loss Project</h4>
            <p>Kolkata, West Bengal, India <br></br> Phone : <br></br> Email :</p>
          </div>

          <div className="col-md-4 mb-4">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/songs">Songs</a>
              </li>
              <li>
                <a href="/people">People</a>
              </li>
              <li>
                <a href="/bts">Behind The Scenes</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h4>Connect With Us</h4>
            &nbsp;
            <ul className="list-unstyled d-flex justify-content-between">
              <li>
                <a
                  href="/spotify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-spotify text-success fa-3x mr-3"></i>
                </a>
              </li>
              <li>
                <a
                  href="/facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-facebook text-primary fa-3x mr-3"></i>
                </a>
              </li>
              <li>
                <a
                  href="/instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-instagram insta-color fa-3x mr-3"></i>
                </a>
              </li>
              <li>
                <a
                  href="/twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="fab fa-x-twitter text-secondary fa-3x mr-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center mb-4">
            <p>&copy; 2024 The Loss Project. All Rights Reserved</p>
            <p>
              <a href="/privacypolicy" className="text-white">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="/termsofuse" className="text-white">
                Terms Of Use
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
