import React from 'react';
import './Contact.css';
import wavereversed from '../../assets/wave-reversed.svg'

const Contact = () => {
    return (
        <div className="contact-section-container">
            <img src={wavereversed} alt="wave svg reversed" />
            <div className="contact-header">
                <div className="contact-underline" />
                <h1>Contact Me</h1>
                <p className="contact-text">
                    Feel free to contact me! Whether it's a discussion on emerging technologies or simply scheduling a game of squash, I am always happy to chat!
                </p>
                <div className="email-button">
                    <a href="mailto:n7ismail@uwaterloo.ca">
                        Email Me
                    </a>
                </div>
            </div>
            <div className="contact-bottom-bar" />
        </div>
    )
}

export default Contact;