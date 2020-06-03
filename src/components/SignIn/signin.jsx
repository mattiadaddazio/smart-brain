import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";

const Signin = () => {
  return (
    <div className="form shadow mx-auto p-3">
      <h1 className="h3 mb-3">Sign In</h1>
      <input
        type="email"
        className="form-control w-75 mb-2 mx-auto"
        placeholder="Email address"
        autoFocus
      />
      <input
        type="password"
        className="form-control w-75 mb-2 mx-auto"
        placeholder="Password"
      />
      <p>
        Don't have an account?&nbsp;
        <Link className="text-dark underline" to="/register">
          Sign up
        </Link>
      </p>
      <p>or</p>
      <p>
        <Link className="text-dark underline" to="/home">
          Use without an account
        </Link>
      </p>
      <Link style={{ color: "white" }} to="/home">
        <button id="sign-in-button" className="btn btn-lg btn-primary m-3">
          Sign in
        </button>
      </Link>
    </div>
  );
};

export default Signin;
