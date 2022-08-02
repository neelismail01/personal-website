import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFileDownload,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import "./Intro.css";
import headshot from "../../assets/headshot.jpeg";
import resume from "../../assets/Neel-Ismail-Resume.pdf";

const Intro = () => {
  const showPortfolio = (event) => {
    event.preventDefault();
  };

  return (
    <div className="intro-container">
      <div className="info-container">
        <div className="info">
          <div className="headshot-container">
            <img alt="headshot" src={headshot} className="headshot" />
          </div>
          <div>
            <p className="name">Hi, I'm Neel.</p>
            <div className="icons-row">
              <a href="https://www.linkedin.com/in/neelismail/">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
              <a href={resume}>
                <FontAwesomeIcon icon={faFileDownload} className="icon" />
              </a>
              <a href="https://github.com/neelismail01">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faChevronDown}
        className="down-arrow"
        onClick={showPortfolio}
      />
    </div>
  );
};

export default Intro;
