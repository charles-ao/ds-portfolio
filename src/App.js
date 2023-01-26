import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import { useGlobalContext } from "./Context";

const  App = ()  => {
 const {navStatus} = useGlobalContext()
 
  return (
    <div>
      <Navbar showNav={navStatus}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
