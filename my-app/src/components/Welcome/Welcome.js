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
                <h1>Welcome</h1>
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
                        I have gained professional experience in full stack development and automation testing through two 
                        internships at Fidelity Investments and am excited to deepen my technical skills further as a Software
                        Engineer Intern at RBC Capital Markets in Fall 2021.
                        <br /><br />
                        I have also deepened my technical skills in full stack web and mobile development through various personal
                        projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;