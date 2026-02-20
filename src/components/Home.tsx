import React from 'react'
import Navbar from "./Navbar";
import Firstpage from './Firstpage';
import Recommendation from './Recommendation';
import Secondslide from "./Secondslide"
import Aboutus from "./Aboutus";
import ContactSection from './Contactus';

const Home = () => {
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