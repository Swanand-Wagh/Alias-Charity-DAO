import React from "react";
import "./Services.css";

import {
  FaBone,
  FaGraduationCap,
  FaChild,
  FaHeart,
  FaHandHoldingHeart,
  FaHome,
} from "react-icons/fa";

const Servicescard = ({ icon, heading, text }) => {
  return (
    <div className="app__servicesCard flex__center">
      <span className="icons">{icon}</span>
      <h3 className="p__subHeading">{heading}</h3>
      <p className="p__normal">{text}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="app__services flex__center section__padding">
      <h2 className="section__heading">Our Services</h2>
      <p className="app__services__headingText p__normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laborisnisi.
      </p>
      <div className="app__services__servicesCard-container">
        <Servicescard
          icon={<FaBone size={30} color="#FD1B5B" />}
          heading="Raise fund for healthy food"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        />
        <Servicescard
          icon={<FaGraduationCap size={30} color="#FD1B5B" />}
          heading="Education for poor children"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        />
        <Servicescard
          icon={<FaChild size={30} color="#FD1B5B" />}
          heading="Promoting the rights of children"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        />
        <Servicescard
          icon={<FaHeart size={30} color="#FD1B5B" />}
          heading="Massive donation to poor"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        />
        <Servicescard
          icon={<FaHandHoldingHeart size={30} color="#FD1B5B" />}
          heading="Huge help to homeless pupil"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        />
        <Servicescard
          icon={<FaHome size={30} color="#FD1B5B" />}
          heading="Let's build some homes"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
        />
      </div>
    </section>
  );
};

export default Services;
