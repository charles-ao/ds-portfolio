import React from "react";
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from "./Components/Footer/Footer";
// import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import { useGlobalContext } from "./Context";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Herohead from "./Sections/Herohead/Herohead";
import Portfolio from "./Sections/Portfolio/Portfolio";

const  App = ()  => {
 const {navStatus} = useGlobalContext()
 
  return (
    <div>
      <Navbar showNav={navStatus}/>
      <Herohead/>
      <About/>
      <Portfolio/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
