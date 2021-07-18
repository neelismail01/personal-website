import React, { useState, useEffect } from 'react';

import './Welcome.css';
import squashPicture from '../../assets/Ismail_N.jpg';

const Welcome = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div className="welcome-section-container">
            <div className="welcome-header">
                <div className="welcome-underline" />
                <h1>About Me</h1>
            </div>
            <div className={width > 892 ? "welcome-container" : "welcome-container-mobile"}>
                <img
                    src={squashPicture}
                    alt="Varsity Squash Headshot"
                    className="squash-picture"
                />
                <div className={width > 892 ? "welcome-text" : "welcome-text-mobile"}>
                    <p className="welcome-paragraph">
                        My name is Neel Ismail and I am a second year Computer Science student at the University of Waterloo.
                        I have gained professional experience in full-stack development and automation testing through two 
                        internships at Fidelity Investments and I am excited to deepen my technical skills further as a Software
                        Engineer Intern at RBC Capital Markets in Fall 2021.
                        <br /><br />
                        Outside of the classroom, I am an avid squash player. I have played competitively since I was eleven years old
                        and have had the opportunity to compete in tournaments across Canada and around the world. In 2019, I represented Team Canada
                        Canada at the Pan-American Junior Squash Championships and currently compete as a member of the University of 
                        Waterloo's Varsity Squash Team. Beyond squash, you can find me playing the saxophone, working out, and watching NBA basketball!
                    </p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="1" d="M0,96L60,101.3C120,107,240,117,360,106.7C480,96,600,64,720,64C840,64,960,96,1080,122.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    )
}

export default Welcome;