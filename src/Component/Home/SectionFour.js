import React from "react";
import time from "../../Images/time.svg";
import online from "../../Images/online.svg";
import left from "../../Images/sql.svg";
import right from "../../Images/sqr.svg";
import star from "../../Images/star.svg";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SectionFour = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div className="sec2-whole-cont override3-a">
        <h1>Our Top & Trending Classes</h1>
        <p>
          It helps people become better citizens, get a better paid job, show
          the difference between good and bad. Education shows us the importance
          of hard work and at the same time helps us grow and develop.
        </p>

        <div className="sec2-points-cont sec3-course-cont override3-c">
          <img src={left} alt="" className="sec2-left override3-b" />
          <div className="each-sec3-course">
            <div className="course-img">
              <img src={online} alt="" />
            </div>

            <div className="each-c-details">
              <div className="on-rate">
                <div className="online">Online</div>
                <div className="onsite">Onsite</div>

                <div className="rating">
                  <img src={star} alt="" />
                  <h6>5.0</h6>
                </div>
              </div>

              <div className="course-title">
                <h2>IELTS Listening</h2>
                <h5>Eight Band | Listening | Flexible</h5>
              </div>

              <div className="price-view">
                <Link to="/courses">View Course</Link>

                <div className="price-c">
                  <h2>$357</h2>
                  <h5>N24,399.99</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="each-sec3-course">
            <div className="course-img">
              <img src={online} alt="" />
            </div>

            <div className="each-c-details">
              <div className="on-rate">
                <div className="online">Online</div>
                <div className="onsite">Onsite</div>

                <div className="rating">
                  <img src={star} alt="" />
                  <h6>5.0</h6>
                </div>
              </div>

              <div className="course-title">
                <h2>IELTS Listening</h2>
                <h5>Eight Band | Listening | Flexible</h5>
              </div>

              <div className="price-view">
                <Link to="/courses">View Course</Link>

                <div className="price-c">
                  <h2>$357</h2>
                  <h5>N24,399.99</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="each-sec3-course">
            <div className="course-img">
              <img src={online} alt="" />
            </div>

            <div className="each-c-details">
              <div className="on-rate">
                <div className="online">Online</div>
                <div className="onsite">Onsite</div>

                <div className="rating">
                  <img src={star} alt="" />
                  <h6>5.0</h6>
                </div>
              </div>

              <div className="course-title">
                <h2>IELTS Listening</h2>
                <h5>Eight Band | Listening | Flexible</h5>
              </div>

              <div className="price-view">
                <Link to="/courses">View Course</Link>

                <div className="price-c">
                  <h2>$357</h2>
                  <h5>N24,399.99</h5>
                </div>
              </div>
            </div>
          </div>
          <img src={right} alt="" className="sec2-right" />
        </div>

        <Link to="/courses" className="visit">
          View all courses
        </Link>
      </div>
    </div>
  );
};

export default SectionFour;
