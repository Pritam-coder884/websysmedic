import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
 const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div>
         <nav>
        <ul className="show v-class">
          <Link to="/"><li>
           Home
          </li></Link>
          <Link to="/about"><li>
           About us
          </li></Link>
         <Link to="/features">
         <li>
            Features
          </li>
         </Link>
         <Link to="/prescription">
          <li>
            Prescription
          </li>
         </Link>
         <Link to="/pdf">
          <li>
            pdf download
          </li>
         </Link>
        </ul>
        <button className="white_btn" onClick={handleLogout}>
          Logout
        </button>
        <div className="burger">
          <div classNames="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar