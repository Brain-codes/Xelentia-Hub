import React, { useState } from "react";
import LeftSec from "./LeftSec";
import RightSec from "./RightSec";
import "./Test.scss";

const Test = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  function toogle0() {
    setLeft(true);
  }

  function toogle9() {
    setRight(true);
  }

  return (
    //IN HERE IM WRITING A CONDITION INSIDE A CONDITION
    <>
      {left ? (
        //THIS PLACE CHECKS IF LEFT IS TRUE IS HHOULD DISPLAY THIS
        <LeftSec />
      ) : (
        //THIS IS WHERE I NOW DECIDED TO WRITE ELSE IF LEFT IS NOT TRUE AND RIGHT IS TRUE, IT SHOULD DISPLAY THIS
        <>
          {right ? (
            <RightSec />
          ) : (
            //NOW FOR THIS PLACE IF BOTH LEFT AND RIGHT IS NOT TRUE OR LEFT IS TRUE AND RIGHT IS NOT VICE VERSA  IT SHOULD DISPLAY THIS --- THE BUTTON CONTROLLING THEM
            <>
              {" "}
              <div className="test-cont">
                <div className="left-btn" onClick={() => toogle0()}>
                  Click left
                </div>

                <div className="right-btn" onClick={() => toogle9()}>
                  Click right
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

//YOU CAN DELETE ALL THE COMMENT SO AS TO SEE THE CODE CLEARLY

export default Test;
