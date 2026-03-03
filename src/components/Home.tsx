// import React from 'react'
import Navbar from "./Navbar";
import Firstpage from './Firstpage';
import Recommendation from './Recommendation';
import Secondslide from "./Secondslide"
import Aboutus from "./Aboutus";
import ContactSection from './Contactus';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 800); 
    }
  }, [location]);
  return (
    <div className='font-serif'>
      <Navbar />
      <Firstpage/>
      <Aboutus/>
        <Secondslide/>
      <Recommendation/>
    <ContactSection/>
    </div>
  )
}

export default Home