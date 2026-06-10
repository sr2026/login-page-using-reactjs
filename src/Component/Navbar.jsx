import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2>Your Dashboard</h2>

      <ul>
        <li onClick={() => navigate("/home")}>Home</li>
        <li onClick={() => navigate("/profile")}>Profile</li>
        <li onClick={() => navigate("/projects")}>Projects</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      <button
        className="logout"
        onClick={() => navigate("/")}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;