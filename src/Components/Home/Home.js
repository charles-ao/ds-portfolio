import React from "react";
import About from "../../Sections/About/About";
import Contact from "../../Sections/Contact/Contact";
import Herohead from "../../Sections/Herohead/Herohead";
import Portfolio from "../../Sections/Portfolio/Portfolio";

const Home = () => {
    return (
        <div className="home">
            <Herohead />
            <About/>
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home