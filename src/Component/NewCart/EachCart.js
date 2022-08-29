import React from "react";
import "./NewCart.scss";
import ear from "../../Images/ear.svg";
import question from "../../Images/question.svg";
import ic_store from "../../Images/ic_store.svg";
import trash from "../../Images/trash.svg";
import info from "../../Images/info.svg";
import plus from "../../Images/plus.svg";
import minus from "../../Images/minus.svg";
import { EmptyDom } from "./EmptyDom";

export const EachCart = () => {
  console.log(EmptyDom);

  return (
    <div className="each-cart-efe-cont">
      <div className="each-cart-efe">
        <div className="left-cart">
          <div className="img-left-cart">
            <img src={ear} alt="" />
          </div>

          <div className="details-right-cart">
            <h1>Earrings</h1>
            <div className="escrow">
              <h2>Escrow Disabled</h2>
            </div>
            <p>
              <img src={ic_store} alt="" /> | 2k Store
            </p>
            <p>
              <img src={info} alt="" />
              Security manual to protect your social media accouts from
              hacker/fraudster
            </p>

            <div className="adon-cont">
              <div className="top-adon">
                <select name="" id="" className="delivery">
                  <option value="">Choose your delivery</option>
                </select>

                <img src={question} alt="" />
              </div>
              <div className="bottom-adon">
                <select name="" id="" className="size">
                  <option value="">XL | &#8358;500 </option>
                </select>

                <div className="color-adon">
                  <select name="" id="" className="color">
                    <option value="">Yellow | &#8358;319 </option>
                  </select>

                  <div className="color-box"></div>

              </div>
                  <div className="quantity">
                    <img src={minus} alt="" /> <h6>2</h6> <img src={plus} alt="" /></div>
                </div>
            </div>
          </div>
        </div>

        <div className="right-cart">
          <div className="price">&#8358;2,000</div>
          <button>
            <img src={trash} alt="" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};
