import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Dashboard/Home";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import Projects from "./Projects/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;