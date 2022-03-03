import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DonorDashboard from "./Pages/Dashboard/DonorDashboard";
import NgoDashboard from "./Pages/Dashboard/NgoDashboard";

const App = () => {
  let navigate = useNavigate();
  const { isAuthenticated, user } = useMoralis();

  // if wallet is not connected, display landing page
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, user]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/dashboard/ngo" element={<NgoDashboard />} />
          <Route path="/dashboard/donor" element={<DonorDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
