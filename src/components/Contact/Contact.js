import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#ff5500" fill-opacity="1" d="M0,128L120,122.7C240,117,480,107,720,117.3C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
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