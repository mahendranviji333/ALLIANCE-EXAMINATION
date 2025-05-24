import React from "react";
import logo from "./../../assets/au-online.png";
import "./navbar.css";

const NavLinks = () => (
  <React.Fragment>
    <p className="hidden">
      <a href="/">Blog</a>
    </p>
    <p className="hidden">
      <a href="/">Product</a>
    </p>
    <p className="hidden">
      <a href="/">Community</a>
    </p>
    <p className="hidden">
      <a href="/">Pricing</a>
    </p>
    <p className="hidden">
      <a href="/">Contact Us</a>
    </p>
    <p className="">
      <a href="/login">Login</a>
    </p>
  </React.Fragment>
);

const Navbar = () => {
  return (
    <div className="landing-navbar">
      <div className="landing-navbar-logo">
        <img src={logo} alt="ALLIANCE UNIVERSITY ONLINE-logo" />
      </div>
      <div className="landing-navbar-links">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
