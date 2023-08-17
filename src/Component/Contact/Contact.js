import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.scss";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Alert } from "antd";
import Marquee from "react-fast-marquee";
import { useForm, ValidationError } from "@formspree/react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyylnlyn");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interest, setInterest] = useState("IELTS");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [setAlert, setSetAlert] = useState(false);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let newMonth = month[d.getMonth()];
  let day = d.getDate();
  let year = d.getFullYear();
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  let Submitted = `Submitted ${formatAMPM(d)} - ${day} ${newMonth} ${year}`;
  
  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      service_id: "service_xnsjr34",
      template_id: "template_2akcabc",
      user_id: "PYd8-knCh6-H2vva2",
      template_params: {
        interest: interest,
        message: message,
        phoneNumber: phoneNumber,
        email: email,
        name: name,
        time: Submitted,
      },
    };

    await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then((res) => {
        if (res.data === "OK") {
          setEmail("");
          setInterest("");
          setMessage("");
          setPhoneNumber("");
          setName("");
          setSetAlert(true);
          setLoading(false);
        } else {
          alert("Something went wrong, please try again");
          setSetAlert(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setSetAlert(false);
        setLoading(false);
        alert(err.message);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="contact-whole-cont">
        <h1>
          Love to hear from you, <br /> Get in touch
        </h1>

        <form
          action=""
          className="contact-form"
          autoComplete="on"
          onSubmit={(e) => handleLogin(e)}
        >
          <div className="form-one">
            <div className="similar-form">
              <p>Your name</p>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // required
              />
            </div>

            <div className="similar-form">
              <p>Your email</p>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </div>
          </div>
          <div className="form-two">
            <div className="similar-form">
              <p>Phone number</p>
              <input
                type="number"
                placeholder="08100909090"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                // required
              />
            </div>

            <div className="similar-form">
              <p>What are you interested in</p>
              <select
                name=""
                id=""
                onChange={(e) => setInterest(e.target.value)}
              >
                <option value="IELTS">IELTS</option>
                <option value="TOEFL">TOEFL</option>
                <option value="Cambridge">Cambridge</option>
                <option value="A levels">A levels</option>
                <option value="SAT">SAT</option>
                <option value="None">None</option>
              </select>
            </div>
          </div>
          <div className="form-two flexing-message">
            <p>Message</p>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Let tell us know what you will like to say to us"
              // required
            ></textarea>
          </div>
          {setAlert == true ? (
            <div className="alert-cont">
              {/* <Alert
                message="Thanks for your message"
                type="success"
                closable
              /> */}

              <Alert
                banner
                type="success"
                message={
                  <Marquee pauseOnHover gradient={false}>
                    Thanks for your message, we will get back to you shortly.
                  </Marquee>
                }
                closable
              />
            </div>
          ) : (
            <></>
          )}

          {loading == true ? (
            <button type="submit" className="send" disabled>
              <Spinner animation="border" size="sm" />
            </button>
          ) : (
            <button type="submit" className="send" disabled={state.submitting}>
              Just Send
            </button>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
