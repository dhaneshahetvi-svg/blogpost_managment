import React from "react";
import { FaBlog, FaHome, FaMoon, FaPlusSquare, FaSignOutAlt, FaStar, FaSun } from "react-icons/fa";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MdAnalytics } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";


export default function Navbar() {
  const data=JSON.parse(localStorage.getItem("blog_rdata"))
  const navigate=useNavigate();
  const {theme,toggleTheme}=useTheme();

  const handleLogout =()=>{
    localStorage.removeItem("data");
    localStorage.removeItem("user");
    navigate("/login")
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <FaBlog className="logo-icon" />
          <span className="logo-text">BlogPost</span>
        </div>
        <div className="navbar-links">
          <NavLink to="/dashboard" className="nav-item">
            <FaHome className="nav-icon" />
            Home
          </NavLink>

          <NavLink to="/create-post" className="nav-item">
            <FaPlusSquare className="nav-icon" />
            Create Post

          </NavLink>

          <NavLink to="/analytics" className="nav-item">
            <MdAnalytics className="nav-itoms"/>
            Analyitcs
          </NavLink>

          <NavLink to="/Favorites" className="nav-item" onClick={() => Navigate("/favorites")}>
          <FaStar className="nav-icon"/>Favorites
           
            
          </NavLink>


          

        </div>
        <div className="navbar-actions">
          <span className="user-name">Hi,{data?.name?.split(' ')[0]||'user'}</span>

          <button className="theme-toggle-btn" onClick={toggleTheme} arial-lable="Toggle theme">
            {theme ==='light'?<FaMoon/> : <FaSun/>}
            </button>
            <button onClick={handleLogout} className="logout-btn">
<FaSignOutAlt />
            Logout
            </button>

            
          
        </div>
      </div>
    </nav>
  );
};