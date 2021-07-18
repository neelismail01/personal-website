import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ff5500" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,176C640,160,800,96,960,80C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
                </path>
            </svg>
            <div className="contact-header">
                <div className="contact-underline" />
                <h1>Contact Me</h1>
                <p className="contact-text">
                    Feel free to contact me! Whether it's a discussion on emerging technologies or current events, or simply scheduling a game of squash, I am always happy to chat!
                </p>
                <div className="email-button">
                    <a href="mailto:n7ismail@uwaterloo.ca">
                        Email Me
                    </a>
                </div>
            </div>
            <div className="contact-indented-circle" />
        </div>
    )
}

export default Contact;