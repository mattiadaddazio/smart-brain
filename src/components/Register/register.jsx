import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="form shadow mx-auto p-3">
      <h1 className="h3 mb-3">Register</h1>
      <input
        type="text"
        className="form-control w-75 mb-2 mx-auto"
        placeholder="Name"
        autoFocus
      />
      <input
        type="email"
        className="form-control w-75 mb-2 mx-auto"
        placeholder="Email address"
      />
      <input
        type="password"
        className="form-control w-75 mb-2 mx-auto"
        placeholder="Password"
      />
      <Link style={{ color: "white" }} to="/smart-brain/home">
        <button id="sign-up-button" className="btn btn-lg btn-primary m-3">
          Register
        </button>
      </Link>
    </div>
  );
};

export default Register;
