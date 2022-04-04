import React from 'react';
import FetchProposals from '../../components/Dashboard/Donor/FetchProposals';
import Footer from '../../components/Home/Footer/Footer';
import Navbar from '../../components/Home/Navbar/Navbar';

const DonorDashboard = () => {
  return (
    <>
      <div>
        <Navbar userType="DONOR" />
        <FetchProposals userType="DONOR" />
        <Footer />
      </div>
    </>
  );
};

export default DonorDashboard;
