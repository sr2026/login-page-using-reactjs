import React from "react";
import "./background.css";
import img from "../assets/img.jpg";

function background() {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="overlay">
        <div className="card">
          <h3>Profile</h3>
          <p>Manage your profile</p>
        </div>

        <div className="card">
          <h3>Projects</h3>
          <p>View your projects</p>
        </div>

        <div className="card">
          <h3>Settings</h3>
          <p>Customize your settings</p>
        </div>
      </div>
    </div>
  );
}

export default background;