import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase,  faAddressBook } from '@fortawesome/fontawesome-free-solid'
import AA from "../../assets/AA.png"
import { useGlobalContext } from "../../Context";

const Navbar = ({showNav}) => {

    const {scrollToSection} = useGlobalContext()
    
    return (
        <div className={showNav ? "navbar show_nav" : "navbar"}>
            <nav>
                <div className="nav-center" id="home" >
                    <div className="nav-header"  name="herohead"  onClick={(e)=>scrollToSection(e)}>
                        <h4>Adedunmola Adeiye</h4>
                    </div>
                    <div className="logo-cont">
                        <img src = {AA} className="logo" alt="my logo"  name="herohead"   onClick={(e)=>scrollToSection(e)}/>
                    </div>
                    <div className="links-container">
                        <div className="links-container-item" name="about"  onClick={(e)=>scrollToSection(e)}>
                            <FontAwesomeIcon icon={faUser}/>
                            <span className="tooltip">About</span>
                        </div>
                        <div className="links-container-item" name="portfolio"  onClick={(e)=>scrollToSection(e)}>
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span className="tooltip">Portolio</span>
                        </div>
                        {/* <div className="links-container-item">
                            <FontAwesomeIcon icon={faCertificate} />
                            <span className="tooltip">Certification</span>
                        </div> */}
                        <div className="links-container-item" name="contact"  onClick={(e)=>scrollToSection(e)}>
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