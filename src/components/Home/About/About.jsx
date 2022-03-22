import React from "react";
import "./About.css";

import sectionImg from "../../../assets/slider/donation-01.png";

const About = () => {
  return (
    <section className='app__about flex__center section__padding'>
      <h2 className='section__heading'>About Us Charity</h2>
      <p className='app__about__headingText p__normal'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laborisnisi.
      </p>
      <div className='app__about__aboutContent-wrapper flex__justify'>
        <div className='app__about__aboutContent-wrapper-left'>
          <img src={sectionImg} alt='Donation' className='animatedImg' />
        </div>
        <div className='app__about__aboutContent-wrapper-right'>
          <p className='p__light'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
            derit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className='p__light'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation they ullamco.
          </p>
          <p className='p__light'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation they ullamco.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
