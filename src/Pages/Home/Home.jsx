import React from "react";
import "./Home.css";

import Navbar from "../../components/Home/Navbar/Navbar";
import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/Home/About/About";
import Services from "../../components/Home/Services/Services";
import Team from "../../components/Home/Team/Team";
import Footer from "../../components/Home/Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default Home;
