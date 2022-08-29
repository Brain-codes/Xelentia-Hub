import React from 'react'
import phones from "../../Images/phones.svg"
import check from "../../Images/check.svg";
import "./Home.scss"

const SectionThree = () => {
  return (
    <div className='sec3-whole-cont'>
      <div className="sec3-left">
        <img src={phones} alt="" />
      </div>

      <div className="sec3-right">
        <h1>Ask Your Problem Immediately and Get Feedback</h1>

        <p>
          It helps people become better citizens, get a better paid job, show
          the difference between good and bad. Education shows us the importance
          of hard work and at the same time helps us grow and develop.
        </p>

        <div className="each-point-sec3">
          <img src={check} alt="" />
          <h6>Identify your problems and send a message</h6>
        </div>

        <div className="each-point-sec3">
          <img src={check} alt="" />
          <h6>Identify your problems and send a message</h6>
        </div>

        <div className="each-point-sec3">
          <img src={check} alt="" />
          <h6>Identify your problems and send a message</h6>
        </div>
      </div>
    </div>
  );
}

export default SectionThree