import React, { useEffect } from "react";
import "./Navbar.css";
import siteLogo from "../../../assets/logo.png";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const { authenticate, isAuthenticated } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard/donor");
    }
  }, [isAuthenticated]);

  return (
    <nav className="app__navbar flex__center section__padding">
      <img src={siteLogo} title="Logo" alt="logo" />
      <ul>
        <li>Home</li>
        <li onClick={() => authenticate()}>Connect Wallet</li>
      </ul>
    </nav>
  );
};

export default Navbar;
// {
//   isAuthenticated ? user.get("username") : "Connect Wallet";
// }
