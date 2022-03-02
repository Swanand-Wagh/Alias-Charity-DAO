import React from "react";
import "./Home.css";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";

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
