import React from "react";
import "./footer.css";

const FooterSection = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5 foot-font">
      <div className="container-sm">
        <div className="row">
          <div className="justify-center text-left col-md-4 mb-4">
            <h3 className="pb-3 text-xl">About Us</h3>
            <h4 className="pb-2">The Loss Project</h4>
            <p className="location">
              Kolkata, West Bengal, India <br></br> Phone : <br></br> Email :
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h4 className="pb-3 text-xl">Quick Links</h4>
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
            <h4 className="text-xl">Connect With Us</h4> 
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

        <div className="row mt-1">
          <div className="col-md-12 text-center mb-2">
            <p className="text-xs">
              © 2024 The Loss Project. All Rights Reserved
            </p>
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
