import React from "react";
import './Prescription.css'
import prescriptionimage from '../Assests/image/Prescription.jpeg'
import Navbar from "../components/Navbar";

const Prescription = () => {

  return (
    <>
    <Navbar />
    <div className="Prescription">
      <div className="Prescription-left">
        <form>
          <input placeholder="Disease Detected" />
          <br/>
          <input placeholder="Patient Name" />
          <br/>
          <input placeholder="Doctor's Name " />
          <br/>
          <input placeholder="Medicine & Dosage" />
          <br/>
          <br />
          <button>Download</button>
        </form>
      </div>
      <div className="Prescription-right">
        <img src={prescriptionimage} alt="" />
      </div>
    </div>
    </>
    
  );
};

export default Prescription;