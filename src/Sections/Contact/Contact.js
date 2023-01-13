import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    return (
        <div className="contact">
            <div className="contact-content">
                <div className="contact-quote">
                    <h5>“Torture the data, and it will confess to anything.”</h5>
                </div>
                <div className="contact-title">
                    <h3>Get In Touch.</h3>
                </div>
                <div className="contact-text">
                    <p>
                    Although I’m not currently looking for any new opportunities,
                    my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                </div>
                <div className="contact-social-media-icons">
                    <div className="contact-social-media-icon">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </div>
                    <div className="contact-social-media-icon">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
                    </div>
                    <div className="contact-social-media-icon">
                        <FontAwesomeIcon icon={faTwitter}  size="2x"/>
                    </div>
                </div>
                <div className="contact-btn">
                    <div className="btn-primary" id="spc-btn"><span><FontAwesomeIcon icon={faEnvelope}/></span></div>
                </div>
            </div>
        </div>
    )
}

export default Contact