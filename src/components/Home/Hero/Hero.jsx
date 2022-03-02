import React from "react";
import "./Hero.css";

import sectionImg from "../../../assets/slider/donation-02.png";

const Hero = () => {
  return (
    <header className="app__hero flex__justify section__padding container__bg">
      <div className="app__hero__contentWrapper-left">
        <h1 className="app__hero-headtext">
          You can help with the poor children
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          adipisci quasi, blanditiis, quidem distinctio suscipit sunt ducimus
          illo veritatis corporis quas! Ipsa obcaecati beatae, aut saepe aliquam
          corrupti fugit. Cupiditate.
        </p>
        <div className="app__hero__buttonWrapper">
          <button className="custom__button">Contact Us</button>
          <button className="custom__button">Follow Us</button>
        </div>
      </div>
      <div className="app__hero__contentWrapper-right">
        <img src={sectionImg} alt="Donation" className="animatedImg" />
      </div>
    </header>
  );
};

export default Hero;
