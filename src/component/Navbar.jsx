import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBlog,
  FaHome,
  FaPlusSquare,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

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
          </NavLink>

          {/* CORRECT LINK */}
          <NavLink
            to="/create-post"
            className="nav-item"
          >
            <FaPlusSquare className="nav-icon" />
            Create Post
          </NavLink>
        </div>

        <div className="navbar-actions">
          <span className="user-name">Hi, user</span>

          <button
            className="logout-btn"
            onClick={() => navigate("/login")}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
