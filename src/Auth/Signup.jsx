import React, { useState, useEffect } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import building from "../assets/jin-cl-gJdQ3FV3-Mw-unsplash.jpg";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Signup Page Loaded");
  }, []);

  const handleSignup = () => {
    if (email==="" || password==="") {
      alert("Please fill in all fields");
      return;
    }
    if (email.endsWith("@gmail.com") || email.endsWith("@yahoo.com") || email.endsWith("@outlook.com")) 
    {
      console.log({
        email,
        password,
      });
      alert("Signup successful!");
    navigate("/");
    }
    else{
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Create Account</h1>
        <p className="text">fill details</p>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>
          Sign Up
        </button>

        <p className="bottomText">
          have account?
          <span onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>

      <div className="right">
        <div
          className="rightImage"
          style={{ backgroundImage: `url(${building})` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default Signup;