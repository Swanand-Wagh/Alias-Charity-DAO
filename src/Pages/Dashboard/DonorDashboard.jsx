import React from "react";
import TransferMoney from "../../components/Dashboard/Donor/TransferMoney";
import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Home/Navbar/Navbar";

const DonorDashboard = () => {
  return (
    <>
      <div>
        <Navbar userType="DONOR" />
        <TransferMoney />
        <Footer />
      </div>
    </>
  );
};

export default DonorDashboard;
