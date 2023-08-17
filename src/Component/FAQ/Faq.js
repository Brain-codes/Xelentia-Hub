import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Faq.scss";
import { Collapse } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { FaqData } from "./FaqData";
import Footer from "../Footer/Footer";

const Faq = () => {
  const { Panel } = Collapse;

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Navbar />
      <div className="faq-whole-cont">
        <div className="hero-faq">
          <h5>The FAQs</h5>
          <h1>Help Center</h1>
          <p>Everything you need to know about xelentia academy.</p>
        </div>

        <div className="sup-faq-cont">
          <div className="faq-left">
            <h5>Support</h5>
            <h1>FAQs</h1>
            <p>
              Everything you need to know about xelentia hub. Can’t find what
              you are looking fof? Please
            </p>
            <a href="gs">Chat with us.</a>
          </div>

        <div className="faq-right">
            <Collapse
              defaultActiveKey={["1"]}
              onChange={onChange}
              expandIcon={({ isActive }) => (
                <PlusCircleFilled fill="#020e8a" rotate={isActive ? 45 : 0} />
              )}
            >
              {FaqData.map((faqData) => {
                const { id, title, body } = faqData;
                return (
                  <Panel key={id} header={title}>
                    <p className="acc-text">{body}</p>
                  </Panel>
                );
              })}
            </Collapse>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default Faq;
