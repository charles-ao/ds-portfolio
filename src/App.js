import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
// import Navbar from './Components/Navbar/Navbar';
// import { useGlobalContext } from "./Context";

const  App = ()  => {
//  const {navStatus} = useGlobalContext()
 
  return (
    <div>
      {/* <Navbar showNav={navStatus}/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Details />} />
          <Route
              path="*"
              element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
