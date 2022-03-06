import React from "react";
import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Home/Navbar/Navbar";

const NgoDashboard = () => {
  return (
    <>
      <div>
        <Navbar userType="NGO" />
        <Footer />
      </div>
    </>
  );
};

export default NgoDashboard;
