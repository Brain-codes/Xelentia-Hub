import React from "react";
import "./Footer.scss";
import logo from "../../Images/Logo.svg";
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-whole-cont">
        <div className="logo-foot">
          <div className="top-foot">
            <img src={logo} alt="" />
            <p>Xellentia Hub</p>
          </div>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quo?
          </h6>
        </div>

        <div className="link-foot">
          <h1>Quich Links</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="link-foot">
          <h1>Socials</h1>

          <div className="each-social">
            <FacebookFilled />
            <a href="">Facebook</a>
          </div>
          <div className="each-social">
            <InstagramFilled />
            <a href="">Whatsapp</a>
          </div>

          <div className="each-social">
            <InstagramFilled />
            <a href="">Instagram</a>
          </div>

          <div className="each-social">
            <LinkedinFilled />
            <a href="">Linkdin</a>
          </div>

          <div className="each-social">
            <TwitterSquareFilled />
            <a href="">Twitter</a>
          </div>
        </div>
      </div>
      <div className="copi">
        <a href="https://www.braincodes.netlify.app">
          &#169; 2022 Brain codes. All rights reserved
        </a>
      </div>
    </div>
  );
};

export default Footer;
