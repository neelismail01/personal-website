import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import './Projects.css';
import flashback from '../../assets/flashback.png';
import orderbudhome from '../../assets/order-bud-home.png';
import orderbudmenu from '../../assets/order-bud-menu.png';
import orderbudfriends from '../../assets/order-bud-friends.png';
import smartbrain from '../../assets/smart-brain.jpeg';
import catan from '../../assets/catan.png';
import alexa from '../../assets/alexa.png';

const Projects = () => {

    return (
        <div className="projects-section-main-container">
            <div className="projects-section-container">
                <div className="projects-header">
                    <div className="header-underline" />
                    <h1>Projects</h1>
                    <p>Here are some of my most recent projects. Feel free to click on the Github icons to view more details and the source code.</p>
                </div>
                <div className="project-container">
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
                                src={orderbudfriends}
                                alt="order bud friends"
                                className="mobile-image-right"
                            />
                        </div>
                        <p className="project-name">
                            OrderBud
                            <a href="https://github.com/neelismail01/order-bud"><FontAwesomeIcon icon={faGithub} className="github-icon" /></a>
                        </p>
                        <p className="project-description">
                            Social marketplace enabling users to discover and transact with local businesses and share purchases with friends.
                        </p>
                        <p className="technologies">
                            React Native, Redux, Express, Node, MongoDB
                        </p>
                    </div>
                    <div class="project">
                        <div className="project-image">
                            <img
                                src={flashback}
                                alt="flashback"
                                className="image"
                            />
                        </div>
                        <p className="project-name">
                            Flashback
                            <a href="https://github.com/neelismail01/flashback"><FontAwesomeIcon icon={faGithub} className="github-icon" /></a>
                        </p>                        <p className="project-description">
                            Photo repository facilitating natural language searching of memories through tagging on upload.
                        </p>
                        <p className="technologies">
                            React, Express, Node, PostgreSQL
                        </p>
                    </div>
                    <div class="project">
                        <div className="project-image">
                            <img
                                src={catan}
                                alt="smart brain"
                                className="image"
                            />
                        </div>
                        <p className="project-name">
                            Settlers of Catan
                        </p>
                        <p className="project-description">
                            Waterloo-inspired version of Settlers of Catan board game that can be played through the command line.
                        </p>
                        <p className="technologies">
                            C++, OOP, Observer Design Pattern
                        </p>
                    </div>
                    <div class="project">
                        <div className="project-image">
                            <img
                                src={smartbrain}
                                alt="smart brain"
                                className="image"
                            />
                        </div>
                        <p className="project-name">
                            Smart Brain
                    <a href="https://github.com/neelismail01/smart-brain"><FontAwesomeIcon icon={faGithub} className="github-icon" /></a>
                        </p>
                        <p className="project-description">
                            Uses Clarifai facial recognition API to detect faces within any uploaded image.
                        </p>
                        <p className="technologies">
                            React, Express, Node, PostgreSQL
                        </p>
                    </div>
                    <div class="project">
                        <div className="project-image">
                            <img
                                src={alexa}
                                alt="analyst alexa"
                                className="image"
                            />
                        </div>
                        <p className="project-name">
                            Analyst Alexa
                    <a href="https://creator.voiceflow.com/prototype/600328e1e386c80007e2dd54"><FontAwesomeIcon icon={faLink} className="link-icon" /></a>
                        </p>
                        <p className="project-description">
                            An Alexa app that can answer various common queries about publicly traded companies.
                        </p>
                        <p className="technologies">
                            Voiceflow, JavaScript, Yahoo Finance API
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;