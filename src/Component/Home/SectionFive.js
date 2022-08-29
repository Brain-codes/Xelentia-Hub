import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.scss"
const SectionFive = () => {
  return (
    <div>
      <div className="sec5-whole-cont">
        <div className="sec5-left">
          <h1>Some Special Words From Our Students About Us</h1>

          <Carousel>
            <Carousel.Item>
              <div className="each-testi-cont">
                <h2>Help me and improve my productive activities</h2>
                <p>
                  It helps people become better citizens, get a better paid job,
                  show the difference between good and bad. Education shows us
                  the importance of hard work and at the same time helps us grow
                  and develop.
                </p>

                <div className="user-testi">
                  <img src="" alt="" />
                  <div className="user-name">
                    <h5>Adenuga Adewumi Efe</h5>
                    <h6>Ibadan, Nigeria</h6>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="each-testi-cont">
                <h2>Help me and improve my productive activities</h2>
                <p>
                  It helps people become better citizens, get a better paid job,
                  show the difference between good and bad. Education shows us
                  the importance of hard work and at the same time helps us grow
                  and develop.
                </p>

                <div className="user-testi">
                  <img src="" alt="" />
                  <div className="user-name">
                    <h5>Adenuga Adewumi Efe</h5>
                    <h6>Ibadan, Nigeria</h6>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="sec5-right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
