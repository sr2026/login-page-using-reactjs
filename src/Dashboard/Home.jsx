
import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Background from "../Component/background";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Background />
      <Hero />
    </div>
  );
}

export default Home;