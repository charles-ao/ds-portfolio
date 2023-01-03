import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faCertificate, faAddressBook } from '@fortawesome/fontawesome-free-solid'
import irobot from "../../assets/irobot.png";

const HeroheadTwo = () => {
  
  return (
      <div className="herohead">
          <div className="herohead-content">
              <div  className="herohead-content-top">
                  <div className="herohead-content-top-tile">
                      <FontAwesomeIcon icon={faUser}/>
                      <h5>about</h5>
                  </div>
                  <div className="herohead-content-top-tile">
                      <FontAwesomeIcon icon={faBriefcase} />
                      <h5>portfolio</h5>
                  </div>
                  <div className="herohead-content-top-tile">
                      <FontAwesomeIcon icon={faCertificate} />
                      <h5>certification</h5>
                  </div>
                  <div className="herohead-content-top-tile">
                      <FontAwesomeIcon icon={faAddressBook} />
                      <h5>contact</h5>
                  </div>
              </div>
              <div  className="herohead-content-center">
                <div  className="herohead-content-center-left">
                  <div className="centered">
                    <h3>“... and the geek shall inherit the earth...”</h3>
                    <h1 className="name-head">HEY! I'M <span id="charles">CHARLES</span>, THE TECH ENTHUSIAST.</h1>
                    <button className="btn-primary">
                      <p>my portfolio</p>
                    </button>
                  </div>
                </div>
                <div  className="herohead-content-center-right">
                  <img src={irobot} className="irobot" alt="robot pic" />
                </div>
              </div>
          </div>
          <p className="track" id="data_science">DATA  SCIENCE</p>
          <p className="track" id="front_end">FRONTEND WEB DEVELOPMENT </p>
      </div>
  )
}

export default HeroheadTwo

