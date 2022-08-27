import React from "react";
import "./Home.css";
import home from "../Assests/image/home.png";
import Navbar from "../components/Navbar";

const Main = () => {
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.reload();
  // };

  return (
    <div className="main-container">
      {/* <nav>
        <ul className="show v-class">
          <li>
           Home
          </li>
          <li>
            About us
          </li>
          <li>
            Consultancy
          </li>
          <li>
            Prescription
          </li>
          <li>
            Contact us
          </li>
        </ul>
        <button className="white_btn" onClick={handleLogout}>
          {" "}
          Logout
        </button>
        <div className="burger">
          <div classNames="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav> */}
      <Navbar />
      <div className="home">
        <div className="home-left">
          <h1>SYSMEDIC</h1>
          <h2>Systemize Medical Care</h2>
          <p>
          Project Sysmedic will guide patients to get medical services in real-time.This system includes Disease symptoms awareness,Medicine availability or reachability,Digitalized prescription,Online doctor consultancy.This web application will assist an individual according to the above situations.
          </p>
        </div>
        <div className="home-right">
          <img src={home} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
