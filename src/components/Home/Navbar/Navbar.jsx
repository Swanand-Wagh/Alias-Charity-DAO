import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import siteLogo from "../../../assets/logo.png";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { CharityContext } from "../../Context/CharityContext";
import toast, { Toaster } from "react-hot-toast";

const Navbar = ({ userType }) => {
  const { toastStyles } = useContext(CharityContext);
  let navigate = useNavigate();
  const { authenticate, isAuthenticated, logout, user } = useMoralis();
  const [isNGO, setIsNGO] = useState(undefined);

  const hideElement = { display: "none" };
  const showElement = { display: "block" };

  useEffect(() => {
    if (isNGO !== undefined) {
      if (isAuthenticated && isNGO && userType === "DONOR") {
        toast.error("Connect Again using a NGO Account!", toastStyles);
        logout();
      }
      if (isAuthenticated && !isNGO && userType === "NGO") {
        toast.error("Connect Again using a DONOR Account!!", toastStyles);
        logout();
      }
    }
  }, [isNGO]);

  useEffect(() => {
    if (user) {
      setIsNGO(user.get("isNgo"));
    }
  }, []);

  const connectWallet = async () => {
    authenticate().then((u) => {
      const isNGO = u?.get("isNgo"); // remove ? if error
      setIsNGO(isNGO);

      if (isNGO === undefined) {
        const bool = userType === "NGO";
        u.set("isNgo", bool);
        u.save();
      } else {
        if (!isNGO) {
          userType === "DONOR"
            ? toast.success("Wallet Successfully Connected!", toastStyles)
            : navigate("/dashboard/donor");
        } else {
          userType === "NGO"
            ? toast.success("Wallet Successfully Connected!", toastStyles)
            : navigate("/dashboard/ngo");
        }
      }
    });
  };

  return (
    <>
      <Toaster />
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
            DONOR Dashboard
          </li>
          {userType && !isAuthenticated && (
            <li onClick={() => connectWallet()}>Connect Wallet</li>
          )}
          {userType === "NGO" && isAuthenticated && <li>Host Campaign</li>}
          {userType && isAuthenticated && (
            <>
              <li>
                {userType} :{" "}
                <span style={{ fontWeight: "500" }}>{user.getUsername()}</span>
              </li>
              <li
                onClick={() => {
                  toast.error("Wallet Disconnected!", toastStyles);
                  logout();
                }}
              >
                Logout
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
