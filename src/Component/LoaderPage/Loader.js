import React from "react";
import { useState, CSSProperties } from "react";
import "./Loader.scss";
import logo from "../../Images/Logo.svg";
import BarLoader from "react-spinners/BarLoader";
const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="loader-whole-cont">
      <div className="loader-img-cont">
        <img src={logo} alt="" />
      </div>

      <div className="loader-cont">
        <BarLoader
          color={color}
          loading={loading}
          height={2}
          size={150}
          width={300}
          speedMultiplier={1}
        />
      </div>
    </div>
  );
};

export default Loader;
