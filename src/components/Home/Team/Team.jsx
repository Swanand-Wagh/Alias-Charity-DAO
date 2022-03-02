import React from "react";
import "./Team.css";

import personOne from "../../../assets/team/1.jpg";
import personTwo from "../../../assets/team/2.jpg";
import personThree from "../../../assets/team/3.jpg";
import personFour from "../../../assets/team/4.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaBehance,
} from "react-icons/fa";

const Teamcard = ({ picture, name }) => {
  return (
    <div className="app__teamCard flex__center">
      <img src={picture} alt={name} title={name} />
      <p className="p__subHeading">{name}</p>
      <div className="app__teamCard-socialsContainer">
        <span className="social-icons flex__center">
          <FaFacebookF cursor={"pointer"} size={17} />
        </span>
        <span className="social-icons flex__center">
          <FaTwitter cursor={"pointer"} size={17} />
        </span>
        <span className="social-icons flex__center">
          <FaLinkedinIn cursor={"pointer"} size={17} />
        </span>
        <span className="social-icons flex__center">
          <FaGooglePlusG cursor={"pointer"} size={17} />
        </span>
        <span className="social-icons flex__center">
          <FaBehance cursor={"pointer"} size={17} />
        </span>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="app__team section__padding">
      <h2 className="section__heading">Our Team</h2>
      <div className="app__team-teamcardContainer">
        <Teamcard picture={personOne} name="James" />
        <Teamcard picture={personTwo} name="Albert" />
        <Teamcard picture={personThree} name="Johns" />
      </div>
    </div>
  );
};

export default Team;
