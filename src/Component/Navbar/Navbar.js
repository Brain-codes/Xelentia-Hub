import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../Images/Logo.svg";

const Navbar = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const [show, setShow] = useState(true);
  const [navshow, setNavshow] = useState(false);

  return (
    <div>
      <div className="cont-mobile">
        <div className="side-logo">
          <div className="side-logo-cont">
            <img src={logo} alt="" />
          </div>
          <h5>Xelentia Hub</h5>
        </div>
        <div className="btn-sidenav" onClick={() => setNavshow(!navshow)}>
          {navshow ? <FaTimes /> : <GiHamburgerMenu />}
        </div>
      </div>

      <div className={navshow ? "sidenav-cont" : "noSidenav-cont"}>
        <div className="side-logo mobile">
          <div className="side-logo-cont">
            <img src={logo} alt="" />
          </div>
          <h5>Xelentia Hub</h5>
        </div>

        <div className="inside-btn-sidenav">
          <button onClick={() => setNavshow(!navshow)}>
            <FaTimes />
          </button>
        </div>

        <div className="sidenav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activenav" : "inactive")}
          >
            Home{" "}
          </NavLink>

          <br />

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "activenav" : "inactive")}
          >
            About Us{" "}
          </NavLink>

          <br />

          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "activenav" : "inactive")}
          >
            Courses{" "}
          </NavLink>

          <br />

          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? "activenav" : "inactive")}
          >
            FAQ{" "}
          </NavLink>

          <br />

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "activenav" : "inactive")}
          >
            Contact Us{" "}
          </NavLink>
        </div>

        <div className="logout-side">
          <p className="enroll-nav">Enroll Now</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
