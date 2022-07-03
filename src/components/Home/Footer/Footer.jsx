import React from 'react';
import './Footer.css';

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaMobileAlt,
  FaAngleRight,
} from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className="app__footer flex__center section__padding">
      <div className="app__footer-conatiner-wrapper flex__center">
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Smart charitables</h3>
          <div className="app__footer-container-underline"></div>
          <p className="p__normal">
            Charity DAO is a decentralised charitable organisation that intends to make charity
            easier and more effective by removing government and geographic constraints ♥️
          </p>
          <div className="app__footer-socialIcons-container">
            <span className="footer-socialIcons flex__center">
              <FaFacebookSquare />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaInstagram />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaTwitterSquare />
            </span>
            <span className="footer-socialIcons flex__center">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Services</h3>
          <div className="app__footer-container-underline"></div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Huge Help To Homeless Pupil</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Education For Poor Children</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Medical Facilities</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Raise Fund For Healthy Food</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Let’S Build Some Homes</p>
          </div>
        </div>
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Quick links</h3>
          <div className="app__footer-container-underline"></div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Home</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">About Us</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Services</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Blog</p>
          </div>
          <div className="app__footer-container-services-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaAngleRight />
            </span>
            <p className="p__normal">Contact Us</p>
          </div>
        </div>
        <div className="app__footer-container">
          <h3 className="app__footer-container-heading">Find us</h3>
          <div className="app__footer-container-underline"></div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <BiCurrentLocation />
            </span>
            <p className="p__normal">Marthandam</p>
          </div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <FaMobileAlt />
            </span>
            <p className="p__normal">+91 1234567890</p>
          </div>
          <div className="app__footer-container-findus-content">
            <span className="app__footer-container-findus-content-icons flex__center">
              <GrMail />
            </span>
            <p className="p__normal">yourmail@domain.com</p>
          </div>
        </div>
      </div>
      <div className="empty"></div>
      <p className="copyright__text p__normal">
        2022 &copy; All Rights Reserved Designed and developed by <span>ALIAS</span>
      </p>
    </footer>
  );
};

export default Footer;
