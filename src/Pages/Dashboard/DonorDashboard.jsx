import React from "react";
import Donate from "../../components/Dashboard/Donor/Donate";
import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Home/Navbar/Navbar";

const DonorDashboard = () => {
  return (
    <>
      <div>
        <Navbar userType="DONOR" />
        <Donate />
        <Footer />
      </div>
    </>
  );
};

export default DonorDashboard;
