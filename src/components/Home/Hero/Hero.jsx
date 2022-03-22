import React from "react";
import "./Hero.css";

import sectionImg from "../../../assets/slider/donation-02.png";

const Hero = () => {
  return (
    <header className='app__hero flex__justify section__padding container__bg'>
      <div className='app__hero__contentWrapper-left'>
        <h1 className='app__hero-headtext'>Crypto Donations for the People</h1>
        <p>
          Numerous scandals related to the traditional charity processes
          affected the way public perceives charity and increased the mistrust
          in charitable organizations. In fact, due to the self-isolation and
          lockdown volunteers are not able to collect on the streets;
          furthermore, the cancellation or postponement of mass events and
          individual or small group activities have brought community
          fundraising to a juddering halt. A substantial number of people have
          felt the desire to donate for the recent coronavirus pandemic. Surely,
          they have wondered how their donations were used, whether for the
          stated purposes or for other factors.
        </p>
        <div className='app__hero__buttonWrapper'>
          <button className='custom__button'>Contact Us</button>
          <button className='custom__button'>Follow Us</button>
        </div>
      </div>
      <div className='app__hero__contentWrapper-right'>
        <img src={sectionImg} alt='Donation' className='animatedImg' />
      </div>
    </header>
  );
};

export default Hero;
