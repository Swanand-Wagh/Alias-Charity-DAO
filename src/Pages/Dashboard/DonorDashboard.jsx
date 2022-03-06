import React from "react";
import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Home/Navbar/Navbar";

const DonorDashboard = () => {
  return (
    <>
      <div>
        <Navbar userType="DONOR" />
        <Footer />
      </div>
    </>
  );
};

export default DonorDashboard;