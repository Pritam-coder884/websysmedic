import React from 'react'
import "./About.css"
import about from "../Assests/image/about.png";
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about">
        <div className="about-left">
          <h1>About Us</h1>
          <h2>Why Choose Sysmedic ?</h2>
          <p>
            We hear by, provide you with a handy web application, where, just by
            entering the symptoms, can detect the disease anytime and anywhere.
            Hence it's a cheaper solution. Patients will get one-to-one proper
            attention.
          </p>
        </div>
        <div className="about-right">
          <img src={about} alt="" />
        </div>
      </div>
    </>
   
  )
}

export default About