import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faCertificate, faAddressBook } from '@fortawesome/fontawesome-free-solid'
import AA from "../../assets/AA.png"

const Navbar = ({showNav}) => {
    return (
        <div className={showNav ? "navbar show_nav" : "navbar"}>
            <nav>
                <div className="nav-center" id="home">
                    <div className="nav-header">
                        <h4>Adedunmola Adeiye</h4>
                    </div>
                    <div className="logo-cont">
                        <img src = {AA}  className="logo" alt="my logo"/>
                    </div>
                    <div className="links-container">
                        <div className="links-container-item">
                            <FontAwesomeIcon icon={faUser}/>
                            <span className="tooltip">About</span>
                        </div>
                        <div className="links-container-item">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span className="tooltip">Portolio</span>
                        </div>
                        <div className="links-container-item">
                            <FontAwesomeIcon icon={faCertificate} />
                            <span className="tooltip">Certification</span>
                        </div>
                        <div className="links-container-item">
                            <FontAwesomeIcon icon={faAddressBook} />
                            <span className="tooltip">Contact</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar