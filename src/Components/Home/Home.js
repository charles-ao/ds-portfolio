import React from "react";
import { useGlobalContext } from "../../Context";
import About from "../../Sections/About/About";
import Contact from "../../Sections/Contact/Contact";
import Herohead from "../../Sections/Herohead/Herohead";
import Portfolio from "../../Sections/Portfolio/Portfolio";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const {navStatus} = useGlobalContext()


    return (
        <div className="home">
            <Navbar showNav={navStatus}/>
            <Herohead />
            <About/>
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home