import React from "react";
import "./Hero.css";
import img from "../assets/img.jpg";

function Hero() {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-content">
        <h1>Welcome Back</h1>
        <p>You are in home Page</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Hero;