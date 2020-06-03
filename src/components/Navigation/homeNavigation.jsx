import React from "react";
import brain from "./brain.svg";
import { Link } from "react-router-dom";
import "./navigation.css";

const HomeNavigation = () => {
  return (
    <nav className="d-flex justify-content-between">
      <img src={brain} alt="logo" />
      <div>
        <Link className="link underline" to="/signin">
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavigation;
