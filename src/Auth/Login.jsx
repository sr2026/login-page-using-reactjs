import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import building from "../assets/jin-cl-gJdQ3FV3-Mw-unsplash.jpg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    console.log("Login Page Loaded");
  }, []);

  const handleLogin = () => {
    const newemail ="testemail@gmail.com"
    const password1 ="12345" 
    if (email==="" || password==="") {
      alert("fill in all fields");
      return;
    }else if(email === newemail && password === password1) {
      navigate("/home");
    }
    else{
      alert("enter a valid email address");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Welcome Back</h1>
        <p className="text">enter details</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Sign In
        </button>

        <p className="bottomText">
          Don't have an account?
          <span onClick={() => navigate("/signup")}>
            Sign Up
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

export default Login;