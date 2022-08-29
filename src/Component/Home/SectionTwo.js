import React from "react";
import time from "../../Images/time.svg"
import left from "../../Images/anga.svg";
import right from "../../Images/semia.svg";


const SectionTwo = () => {
  return (
    <div>
      <div className="sec2-whole-cont">
        <h1>Why Choose Us Xelentia Hub?</h1>
        <p>
          It helps people become better citizens, get a better paid job, show
          the difference between good and bad. Education shows us the importance
          of hard work and at the same time helps us grow and develop.
        </p>

        <div className="sec2-points-cont">
          <img src={left} alt="" className="sec2-left" />
          <div className="each-sec2-point">
            <img src={time} alt="" />
            <h2>Flexible Time</h2>
            <h6>
              It helps people become better citizens, get a better paid job,
              show the difference between good and
            </h6>
          </div>

          <div className="each-sec2-point">
            <img src={time} alt="" />
            <h2>Flexible Time</h2>
            <h6>
              It helps people become better citizens, get a better paid job,
              show the difference between good and
            </h6>
          </div>

          <div className="each-sec2-point">
            <img src={time} alt="" />
            <h2>Flexible Time</h2>
            <h6>
              It helps people become better citizens, get a better paid job,
              show the difference between good and
            </h6>
          </div>

          <div className="each-sec2-point">
            <img src={time} alt="" />
            <h2>Flexible Time</h2>
            <h6>
              It helps people become better citizens, get a better paid job,
              show the difference between good and
            </h6>
          </div>

          <img src={right} alt="" className="sec2-right" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
