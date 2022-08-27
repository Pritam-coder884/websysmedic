import React, { useState } from "react";
import "./Detection.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Detection = () => {
  const [disease1, setdisease1] = useState([]);
  const [type1,setType1]=useState([]);
  const [disease2, setdisease2] = useState([]);
  const [type2,setType2]=useState([]);
  const [searchSymptoms, setSearchSymptoms] = useState("");
    
  const addItem=async()=>{
      try{
        const res=await axios.get(
          'http://localhost:7000/api/disease/symptomOfDisease',
        {params: {
          symptoms: searchSymptoms
        }} );
        console.log(res.data);
        // console.log(res.data[0].DiseaseName);
        setdisease1(res.data[0].DiseaseName);
        // console.log(res.data[0].Type);
        setType1(res.data[0].Type);
        setdisease2(res.data[1].DiseaseName);
        setType2(res.data[1].Type);

      }catch(err){
        console.log(err);
      }
  }

 


  const searchSymptom = (evt) => {
    if (evt.key === "Enter") {
      addItem();
    }
  };

  const searchSymptomByButton = () => {
    addItem();
  };



  return (
    
    <div className="features">
      <div className="Features-top">
         <input
          type="text"
          placeholder="Enter disease symptoms"
          onKeyPress={searchSymptom}
          value={searchSymptoms}
          onChange={(e) => setSearchSymptoms(e.target.value)}
        />
        <button onClick={searchSymptomByButton}>
         <FaSearch />
        </button>
      </div>
      <div className="Features-bottom">
        <div className="Features-card">
          <h1>Disease name</h1>
          <input value={disease1}/>
          <h1>Type</h1>
          <input value={type1}/>
          <h1>Symptoms of Disease</h1>
          <input />
        </div>
        <div className="Features-card">
          <h1>Disease name</h1>
          <input value={disease2}/>
          <h1>Type</h1>
          <input value={type2} />
          <h1>Symptoms of Disease</h1>
          <input />
        </div>
        <div className="Features-card">
          <h1>Disease name</h1>
          <input />
          <h1>Type</h1>
          <input />
          <h1>Symptoms of Disease</h1>
          <input />
        </div>
      </div>
    </div>
  );
};

export default Detection;
