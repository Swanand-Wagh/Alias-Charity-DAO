import React from "react";
import "./Navbar.css";
import siteLogo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="app__navbar flex__center section__padding">
      <img src={siteLogo} title="Logo" alt="logo" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
