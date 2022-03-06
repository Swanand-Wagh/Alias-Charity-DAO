import React, { useEffect } from "react";
import "./Navbar.css";
import siteLogo from "../../../assets/logo.png";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";

const Navbar = ({ userType }) => {
  let navigate = useNavigate();
  const { authenticate, isAuthenticated, logout, user } = useMoralis();

  const hideElement = {
    display: "none",
  };
  const showElement = {
    display: "block",
  };

  return (
    <nav className="app__navbar flex__center section__padding">
      <img
        src={siteLogo}
        title="Logo"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li
          onClick={() => navigate("/dashboard/ngo")}
          style={userType ? hideElement : showElement}
        >
          NGO Dashboard
        </li>
        <li
          onClick={() => navigate("/dashboard/donor")}
          style={userType ? hideElement : showElement}
        >
          Donor Dashboard
        </li>
        {userType && !isAuthenticated && (
          <li onClick={() => authenticate()}>Connect Wallet</li>
        )}
        {userType && isAuthenticated && (
          <li>
            {userType} :{" "}
            <span style={{ fontWeight: "500" }}>{user.get("username")}</span>
          </li>
        )}
        {userType && isAuthenticated && (
          <li onClick={() => logout()}>Logout</li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
