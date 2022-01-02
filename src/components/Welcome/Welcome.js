import React, { useState, useEffect } from "react";

import "./Welcome.css";
import squashPicture from "../../assets/Ismail_N.jpg";
import wavesvg from "../../assets/wave.svg";

const Welcome = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

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
      <div
        className={
          width > 892 ? "welcome-container" : "welcome-container-mobile"
        }
      >
        <img
          src={squashPicture}
          alt="Varsity Squash Headshot"
          className="squash-picture"
        />
        <div className={width > 892 ? "welcome-text" : "welcome-text-mobile"}>
          <p className="welcome-paragraph">
            Welcome to my website! My name is Neel Ismail and I am an 
            aspiring software developer currently studying computer science at the 
            University of Waterloo. I am interested in mobile and backend development 
            and love building projects that blend these two areas together. I have also
            completed internships at RBC and Fidelity Investments where I have gained
            professional experience in full-stack web development and automation testing.
            <br />
            <br />
            Outside of the classroom, I am a competitive squash player. I have
            represented Canada at the Pan-American Junior Squash Championships
            and currently compete as a member of the Varsity Squash Team at the
            University of Waterloo. I also volunteer as a software developer at UW Blueprint, a
            student organization at the University of Waterloo that offers
            pro-bono software development services to non-profits across Canada.
            In my free-time you can find me working on new side projects, learning music production,
            and watching NBA basketball!
          </p>
        </div>
      </div>
      <img src={wavesvg} alt="wave svg" />
    </div>
  );
};

export default Welcome;
