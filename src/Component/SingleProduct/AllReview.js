import React, { useState, useEffect } from "react";
import "./Reviews.scss";
import star from "../../Images/stars.svg";
import uss from "../../Images/uss.svg";
import file from "../../Images/file.svg";
import emoji from "../../Images/emoji.svg";
import axios from "axios";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Rate } from "antd";
import { MdVerified } from "react-icons/md";
import { message } from "antd";
import TopNavbar from "../TopNavbar/TopNavbar";
import Footer from "../Footer/Footer";
import { FaChevronLeft } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";
import PulseLoader from "react-spinners/PulseLoader";
import { Spin } from "antd";

const AllReviews = (props) => {
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [review, setReview] = useState("");
  const [reviewData, setReviewData] = useState([]);
  const [value, setValue] = useState(0);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const { token } = useParams();
  const [emptyReview, setEmptyReview] = useState("");
  const [count, setCount] = React.useState(1);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [totalRating, setTotalRating] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0052cc");


//   const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;


  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  let navigate = useNavigate();

  useEffect(() => {
    getReviews();
    getProductDetails();
  }, []);

  //   GET PRODUCT DETAILS
  const getProductDetails = async () => {
    setLoading(true);

    const formData = new FormData();

    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("producttoken", token);
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/nicco_renidev/get-product-details`,
        data: formData,
      }).then((res) => {
        if (res.data.success == true) {
          setTotalRating(res.data.totalRating);
          setLoading(false);
        } else {
          navigate("/p/not-found");
          setLoading(false);
        }
      });
    } catch (err) {
      setLoading(false);
    }
  };

  const getReviews = async () => {
    const formData = new FormData();
    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("producttoken", token);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/getProductReview`,
        data: formData,
      }).then((res) => {
        if (res.data.success == false) {
          setReviewData([]);
          console.log(res.data);
          setEmptyReview(res.data.success);
        } else {
          setReviewData(res.data.reviews);
          console.log(res.data);
          setEmptyReview(res.data.success);
        }
      });
    } catch (err) {
      console.log(err.message);
      setTimeout(() => {
        getReviews();
      }, 4000);
    }
  };

  const submitReview = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    const formData = new FormData();
    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("review", review);
    formData.append("usertoken", user.usertoken);
    formData.append("rating", value);
    formData.append("producttoken", token);
    formData.append("fullname", user.fullname);
    formData.append("picture", user.picture);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/sendReview`,
        data: formData,
      }).then((res) => {
        if (res.data.success == true) {
          setSubmitLoading(false);
          message.success(res.data.message);
          setValue(0);
          setReview("");
          getReviews();
        } else {
          setSubmitLoading(false);
          message.info("Please add your rating");
        }
      });
    } catch (err) {
      setSubmitLoading(false);
      message.error(err.message);
    }
  };

  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <>
      {loading === true ? (
        <>
          <TopNavbar />

          <div className="div-wwww">
            <PulseLoader
              color={color}
              loading={loading}
              // css={override}
              size={15}
            />
          </div>
          <Footer />
        </>
      ) : (
        <>
          <div className="www-rev">
            <TopNavbar />
            <div className="top-rev-tab">
              <FaChevronLeft onClick={() => goBack()} />
              <h1>Reviews</h1>
            </div>

            <div className="total-rev-cont">
              <div className="tt-rat">
                <div className="total-rating-rev-cont">
                  <button className="t-rat">Product Total rating:</button>
                  {totalRating === null ? (
                    <span className="rating-no">0 Rating</span>
                  ) : (
                    <>
                      <span className="rating-no">{totalRating} Rating</span>
                    </>
                  )}{" "}
                </div>
                {/* <button>View All</button> */}
              </div>

              {loggedIn === true ? (
                <>
                  <form
                    action=""
                    className="form-rev-cont"
                    onSubmit={(e) => submitReview(e)}
                  >
                    {/* <textarea type="text" cols="20" rows="40px" /> */}
                    <div className="top-form-usee">
                      <div className="add-fm">
                        <img src={user.picture} alt="" />
                        <p>Add your review comment</p>
                      </div>

                      <div className="rev-star-cmt">
                        <Rate
                          tooltips={desc}
                          onChange={setValue}
                          value={value}
                        />
                      </div>
                    </div>
                    <div className="real-form-shi">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                      ></textarea>
                      <div className="rev-form-bottom">
                        <img src={file} alt="" />

                        <div className="submit-rev">
                          <img src={emoji} alt="" />
                          {submitLoading === true ? (
                            <>
                              <LoadingOutlined
                                style={{
                                  fontSize: 24,
                                }}
                                spin
                              />
                            </>
                          ) : (
                            <>
                              <button>Submit</button>
                            </>
                          )}{" "}
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <></>
              )}
              {emptyReview === true ? (
                <>
                  {" "}
                  {reviewData?.map((reviewData) => {
                    const { picture, rating, real_date, review, username } =
                      reviewData;
                    return (
                      <div className="each-review-cont">
                        <div className="user-rev">
                          <img src={picture} alt="" />
                          <p>{username}</p>
                        </div>

                        <div className="user-rev-message">
                          <p>{review}</p>
                        </div>

                        <div className="user-rev-time">
                          <p>{real_date}</p>

                          <div className="stars-rev">
                            <img src={star} alt="" />
                            <h6>{rating} Star(s)</h6>
                          </div>
                        </div>

                        <hr style={{ margin: "0px" }} />
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <p className="mt-4">
                    {" "}
                    <MdVerified
                      style={{ color: "#12957d", fontSize: "20px" }}
                    />{" "}
                    Be the first to write a review
                  </p>
                </>
              )}

              <br />
            </div>
          </div>
          <br />
          <br /> <br />
          <Footer />
        </>
      )}
    </>
  );
};

export default AllReviews;
