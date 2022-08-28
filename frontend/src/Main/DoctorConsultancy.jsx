import React from 'react'
import './DoctorConsultancy.css'
import offline from '../Assests/image/offline.jpeg'
import online from '../Assests/image/online.jpeg'
import Step from "./Step";



const DoctorConsultancy = () => {
  return (
    <div className="DoctorConsultancy">
      <h1>Doctor Consultancy</h1>
      <div className="DoctorConsultancy-types">
        <div className="Features-card">
          <h2>Offline</h2>
          <img src={offline} alt="" />
          <p>Availability of best doctors within 5km radius</p>
          <a href="https://www.google.com/maps/d/u/0/viewer?mid=1nuHZpVepXWUr0CpzZyMWwG8hpIg&hl=en_US&ll=17.45610698228129%2C78.50592391425194&z=15" target="_blank" rel="noopener noreferrer">
            <button>Book Slot</button>
          </a>
        </div>
        <div className="Features-card">
          <h2>online</h2>
          <img src={online} alt="" />
          <p>Availability of best doctors around the clock</p>
          <button>Book Slot</button>
        </div>
      </div>
      <Step />
    </div>
  )
}

export default DoctorConsultancy