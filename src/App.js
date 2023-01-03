import React from "react";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { useGlobalContext } from "./Context";
import About from "./Sections/About/About";
import Herohead from './Sections/Herohead/Herohead';
import Portfolio from "./Sections/Portfolio/Portfolio";

const  App = ()  => {
 const {navStatus} = useGlobalContext()

  
  return (
    <div>
      <Navbar showNav={navStatus}/>
      <Herohead />
      <About/>
      <Portfolio />
    </div>
  );
}

export default App;
