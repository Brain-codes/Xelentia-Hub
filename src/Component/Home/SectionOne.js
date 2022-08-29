import React from "react";
import "./Home.scss";
import hero from "../../Images/Hero.svg";
import arrow from "../../Images/Arrow.svg";
import { Link } from "react-router-dom";
const SectionOne = () => {
  return (
    <div className="sec1-whole-cont">
      <div className="sec1-cont">
        <div className="left-sec1">
          <h1>Improve Your Skill & Gain More Knowledge</h1>
          <p>
            It helps people become better citizens, get a better paid job, show
            the difference between good and bad. Education shows us the
            importance of hard work and at the same time helps us grow and
            develop.
          </p>

          <div className="btn-sec1">
            <Link to="/">Enroll Now</Link>
            <img src={arrow} alt="" />
          </div>

          <div className="overview-sec1">
            <div className="each-sec1">
              <h2>1M+</h2>
              <h6>Students</h6>
            </div>

            <div className="each-sec1">
              <h2>5k+</h2>
              <h6>Courses</h6>
            </div>

            <div className="each-sec1">
              <h2>75+</h2>
              <h6>Mentors</h6>
            </div>
          </div>
        </div>

        <div className="right-sec1">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
