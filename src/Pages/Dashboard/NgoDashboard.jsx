import React from "react";
import CreateProposal from "../../components/Dashboard/Ngo/CreateProposal";
import Footer from "../../components/Home/Footer/Footer";
import Navbar from "../../components/Home/Navbar/Navbar";

const NgoDashboard = () => {
  return (
    <>
      <div>
        <Navbar userType="NGO" />
        <CreateProposal />
        <Footer />
      </div>
    </>
  );
};

export default NgoDashboard;
