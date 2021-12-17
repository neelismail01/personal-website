import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import './Intro.css';
import headshot from '../../assets/headshot.jpeg';
import resume from '../../assets/Neel-Ismail-Resume.pdf';

const Intro = () => {
    const showPortfolio = event => {
        event.preventDefault();
    }

    return (
        <div className="intro-container">
            <div className="intro-background">
                <div className="info-container">
                    <img
                        alt="headshot"
                        src={headshot}
                        className="headshot"
                    />
                    <div className="content">
                        <p className="name">Hi, I'm Neel.</p>
                        <p className="intro-text">Computer Science @ <strong>University of Waterloo</strong></p>
                        <p className="intro-text">SWE @ <strong>RBC Capital Markets</strong>, <strong>UW Blueprint</strong></p>
                        <div className="icons-row">
                            <a href="https://www.linkedin.com/in/neelismail/" >
                                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                            </a>
                            <a href={resume} >
                                <FontAwesomeIcon icon={faFileDownload} className="icon" />
                            </a>
                            <a href="https://github.com/neelismail01" >
                                <FontAwesomeIcon icon={faGithub} className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-row">
                <div className="arrow" onClick={showPortfolio}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} className="down-arrow" />
                </div>
            </div>
        </div>
    );
}

export default Intro;