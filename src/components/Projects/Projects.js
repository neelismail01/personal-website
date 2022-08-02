import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faAppStore } from "@fortawesome/free-brands-svg-icons";

import "./Projects.css";

import driplockerfeed from "../../assets/drip-locker-feed.png";
import driplockerprofile from "../../assets/drip-locker-profile.png";
import driplockersearch from "../../assets/drip-locker-search.png";
import queueithome from "../../assets/queue-it-home.png";
import queueitsearch from "../../assets/queue-it-search.png";
import queueitartistprofile from "../../assets/queue-it-artist-profile.png";
import chatappconversation from "../../assets/chat-app-conversation.png";
import chatappconversationlist from "../../assets/chat-app-conversation-list.png";
import chatappregister from "../../assets/chat-app-register.png";
import orderbudhome from "../../assets/order-bud-home.png";
import orderbudmenu from "../../assets/order-bud-menu.png";
import orderbudbusiness from "../../assets/order-bud-business.png";
import flashback from "../../assets/flashback.png";
import catan from "../../assets/catan.png";

const Projects = () => {
  return (
    <div className="projects-section-main-container">
      <div className="projects-section-container">
        <div className="projects-header">
          <div className="header-underline" />
          <h1>Projects</h1>
          <p>
            Here are some of my most recent projects. Feel free to click on the
            Github icons to view more details and the source code.
          </p>
        </div>
        <div className="project-container">
          <div class="project">
            <div className="mobile-project-image">
              <img
                src={driplockersearch}
                alt="drip locker search"
                className="mobile-image-left"
              />
              <img
                src={driplockerfeed}
                alt="drip locker feed"
                className="mobile-image-main"
              />
              <img
                src={driplockerprofile}
                alt="drip locker profile"
                className="mobile-image-right"
              />
            </div>
            <p className="project-name">
              Drip Locker
              <a href="https://github.com/neelismail01/drip-frontend">
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
              </a>
              <a href="https://apps.apple.com/us/app/drip-locker/id1599141142">
                <FontAwesomeIcon icon={faAppStore} className="github-icon" />
              </a>
            </p>
            <p className="technologies">
              React Native, Node.js, MongoDB, Docker, AWS
            </p>
            <p className="project-description">
              Social media app enabling users to share pictures of purchases
              with friends.
            </p>
          </div>
          <div class="project">
            <div className="mobile-project-image">
              <img
                src={queueitartistprofile}
                alt="queue it artist profile"
                className="mobile-image-left-no-frame"
              />
              <img
                src={queueithome}
                alt="queue it home"
                className="mobile-image-main-no-frame"
              />
              <img
                src={queueitsearch}
                alt="queue it search"
                className="mobile-image-right-no-frame"
              />
            </div>
            <p className="project-name">
              Queue It
              <a href="https://github.com/neelismail01/queue-it">
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
              </a>
            </p>
            <p className="technologies">Swift, SwiftUI, Firebase, MusicKit</p>
            <p className="project-description">
              iOS app that enables multiple people to add music to the same
              queue.
            </p>
          </div>
          <div class="project">
            <div className="mobile-project-image">
              <img
                src={chatappconversationlist}
                alt="chat app conversation list"
                className="mobile-image-left"
              />
              <img
                src={chatappconversation}
                alt="chat app conversation"
                className="mobile-image-main"
              />
              <img
                src={chatappregister}
                alt="chat app register"
                className="mobile-image-right"
              />
            </div>
            <p className="project-name">
              Real Time Chat App
              <a href="https://github.com/neelismail01/real-time-chat-app">
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
              </a>
            </p>
            <p className="technologies">Swift, UIKit, Firebase</p>
            <p className="project-description">
              Real-time messaging app capable of sending multimedia including
              text, photos, and videos.
            </p>
          </div>
          <div class="project">
            <div className="mobile-project-image">
              <img
                src={orderbudmenu}
                alt="order bud menu"
                className="mobile-image-left"
              />
              <img
                src={orderbudhome}
                alt="order bud home"
                className="mobile-image-main"
              />
              <img
                src={orderbudbusiness}
                alt="order bud business"
                className="mobile-image-right"
              />
            </div>
            <p className="project-name">
              OrderBud
              <a href="https://github.com/neelismail01/order-bud">
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
              </a>
            </p>
            <p className="technologies">
              React Native, Express.js, Node.js, MongoDB
            </p>
            <p className="project-description">
              Prototype for marketplace app enabling users to discover and
              transact with local businesses.
            </p>
          </div>
          <div class="project">
            <div className="project-image">
              <img src={flashback} alt="flashback" className="image" />
            </div>
            <p className="project-name">
              Flashback
              <a href="https://github.com/neelismail01/flashback">
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
              </a>
            </p>
            <p className="technologies">React, Express, Node.js, PostgreSQL</p>
            <p className="project-description">
              Photo repository that analyzes user generated tags to facilitate
              natural language searching of memories.
            </p>
          </div>
          <div class="project">
            <div className="project-image">
              <img src={catan} alt="smart brain" className="image" />
            </div>
            <p className="project-name">Settlers of Catan</p>
            <p className="technologies">C++, OOP, Observer Design Pattern</p>
            <p className="project-description">
              Waterloo-inspired version of Settlers of Catan board game that can
              be played through the command line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
