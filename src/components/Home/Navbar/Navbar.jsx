import React from "react";
import "./Navbar.css";
import siteLogo from "../../../assets/logo.png";
import { useMoralis } from "react-moralis";

const Navbar = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <nav className="app__navbar flex__center section__padding">
      <img src={siteLogo} title="Logo" alt="logo" />
      <ul>
        <li>Home</li>
        <li onClick={() => authenticate()}>
          {isAuthenticated ? user.get("username") : "Connect Wallet"}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
