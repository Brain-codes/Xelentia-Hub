import React from "react";
import "./About.scss";
import abt from "../../Images/abt.svg";
import time from "../../Images/time.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-whole-cont">
        <div className="about-top">
          <h1>
            We are <span>Xellentia Hub</span>
          </h1>
          <h2>Providing you with the best IELTS couching</h2>

          <div className="abt-top-l-r">
            <div className="about-left">
              <img src={abt} alt="" />
            </div>

            <div className="about-right">
              <p>
                At xelentia hub, we want to solve the biggest problem faces whrn
                they write IELTS.
              </p>
              <p>
                Publishers need to know that when i am creating a website, i
                alwasy put rubbish in places where i write text so they need to
                helpus provide reasonable text not just lorem ispum because it
                is very borinPublishers need to know that when i am creating a
                website, i alwasy put rubbish in places where i write text so
                they need to helpus provide reasonable text not{" "}
              </p>

              <p>
                In business, we need more people to come and come and come to
                make sxure things arew well. In business, we need more people to
                come and come and come to make.
              </p>
            </div>
          </div>
        </div>

        <div className="about-bottom">
          <div className="abt-one">
            <div className="abt-each">
              <div className="abt-each-top">
                <img src={time} alt="" />
                <h3>Flexible Timing</h3>
              </div>
              <p>
                It helps people become better citizens, get a better paid job,
                show the difference between good and It helps people become
                better citizens, get a better paid job, show the difference
                between good andIt helps people become better citizens, get a
                better paid job, show the difference between good and
              </p>
              <p>
                It helps people become better citizens, get a better paid job,
                show the difference between good and It helps people become
                better citizens, get a better paid job, show the difference
                between good andIt helps people become better citizens, get a
                better paid job, show the difference between good and
              </p>
            </div>

            <div className="abt-each">
              <div className="abt-each-top">
                <img src={time} alt="" />
                <h3>Flexible Timing</h3>
              </div>
              <p>
                It helps people become better citizens, get a better paid job,
                show the difference between good and It helps people become
                better citizens, get a better paid job, show the difference
                between good andIt helps people become better citizens, get a
                better paid job, show the difference between good and
              </p>
              <p>
                It helps people become better citizens, get a better paid job,
                show the difference between good and It helps people become
                better citizens, get a better paid job, show the difference
                between good andIt helps people become better citizens, get a
                better paid job, show the difference between good and
              </p>
            </div>
          </div>

          <div className="abt-one">
            <div className="abt-each">
              <div className="abt-each-top">
                <img src={time} alt="" />
                <h3>Flexible Timing</h3>
              </div>
              <p>
                It helps people become better citizens, get a better paid job,
                show the difference between good and It helps people become
                better citizens, get a better paid job, show the difference
                between good andIt helps people become better citizens, get a
                better paid job, show the difference between good and
              </p>
              <p>
                It helps people become better citizens, get a better paid job,
                show the difference between good and It helps people become
                better citizens, get a better paid job, show the difference
                between good andIt helps people become better citizens, get a
                better paid job, show the difference between good and
              </p>
            </div>

            <div className="abt-each">
              <div className="abt-each-top">
                <img src={time} alt="" />
                <h3>Flexible Timing</h3>
              </div>
              <p>
                It helps people become better citizens, get a better paid job,
                show the difference between good and It helps people become
                better citizens, get a better paid job, show the difference
                between good andIt helps people become better citizens, get a
                better paid job, show the difference between good and
              </p>
              <p>
                It helps people become better citizens, get a better paid job,
                show the difference between good and It helps people become
                better citizens, get a better paid job, show the difference
                between good andIt helps people become better citizens, get a
                better paid job, show the difference between good and
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-com-cont">
        <Footer />
      </div>
    </div>
  );
};

export default About;
