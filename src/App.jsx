import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import DonorDashboard from './Pages/Dashboard/DonorDashboard';
import NgoDashboard from './Pages/Dashboard/NgoDashboard';
import DaoDashboard from './Pages/Dashboard/DaoDashboard';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <div>
        <Toaster />
        <Routes>
          <Route path="/dashboard/ngo" element={<NgoDashboard />} />
          <Route path="/dashboard/donor" element={<DonorDashboard />} />
          <Route path="/dashboard/donor" element={<DaoDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
