import React from "react";
import brain from "./brain.svg";
import { Link } from "react-router-dom";
import "./navigation.css";

const OutsideNavigation = () => {
  return (
    <nav className="d-flex justify-content-between">
      <img src={brain} alt="logo" />
      <div className="d-flex">
        <div>
          <Link className="link underline" to="/signin">
            Sign In
          </Link>
        </div>
        <div>
          <Link className="link underline" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default OutsideNavigation;
