import React, { useState, useEffect } from "react";
import Loader from "../LoaderPage/Loader";
import Navbar from "../Navbar/Navbar";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = () => {
  const [loader, setLoader] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 5000);
  // }, []);

  return (
    <>
      {loader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div>
            <Navbar/>
            <SectionOne />
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
