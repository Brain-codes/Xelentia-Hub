import Abt from "../../public/abt.png";
import Card from "../../public/card.svg";
import ImgA from "../../public/a.jpg";
import ImgB from "../../public/b.jpg";
import ImgC from "../../public/c.jpg";
import AA from "../../public/aa.jpg";
import BB from "../../public/bb.jpg";
import CC from "../../public/cc.jpg";
import DD from "../../public/dd.jpg";
import Thumb from "../../public/Thumb.png";
import EachServices from "../components/EachServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 5,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    fade: true,
  };
  // const settings: Settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };
  const TUT = "../../public/tut.mp4";
  return (
    <div className="">
      <Navbar/>
      <div className="">
        <div className="h-[40vh] bg-[#161616] flex items-center justify-center object-cover overflow-hidden">
          <Slider {...settings} className="w-full object-center">
            <img src={AA} alt="" className="w-full object-center " />
            <img
              src={BB}
              alt=""
              className="w-full object-center object-cover  h-[60vh]"
            />
            <img
              src={CC}
              alt=""
              className="w-full h-full object-center object-cover  h-[60vh]"
            />
            <img src={DD} alt="" className="w-full object-center " />
            <img src={ImgA} alt="" className="w-full object-center " />
            <img
              src={ImgB}
              alt=""
              className="w-full object-center object-cover h-[60vh]"
            />
            <img src={ImgC} alt="" className="w-full object-center " />
            {/* Add more images if needed */}
          </Slider>
        </div>
        <div className="bg-[#EEF5FF] flex w-full px-[5%] flex-col items-start pt-20 justify-between">
          <div>
            <p className="md:ml-3 ml-1 text-neutral-500 md:text-xl   font-normal ">
              Your 8+
              <span className="text-amber-300 text-xl font-semibold mx-2">
                BAND
              </span>
              score is secured in
            </p>
            <h1 className="text-blue-900 md:text-[240px] text-[120px] leading-[5rem] md:leading-[10.75rem] font-extrabold ">
              IELTS
            </h1>
            <div className="w-full flex items-center md:justify-end md:ml-0 ml-2 justify-start md:mt-5 mt-2">
              <p className="text-neutral-500 md:text-xl text-[14px] font-normal">
                With
                <span className="text-amber-300 text-xl font-semibold uppercase">
                  Xellentia Hub
                </span>
              </p>
            </div>
          </div>
          <div className="w-full flex items-end md:justify-end justify-start">
            <p className="ml-3 text-neutral-500 text-[14px] font-normal md:text-right text-left md:w-1/3 w-full mt-20 pb-[120px] ">
              <span className="text-amber-300 text-xl  font-semibold mr-2">
                IELTS
              </span>
              exam is not just a test; it's a passport to a world of
              opportunities. It can shape your academic, professional, and
              personal growth, making it a valuable investment in your future.
              Don't miss out on the doors that IELTS can open for you!
            </p>
          </div>
        </div>
      </div>
      {/* OUR SERVICES */}
      <div className="flex items-center bg-[#000327] justify-center flex-col pt-10 pb-20">
        <h1 className="text-[#FEBE42] text-5xl font-extrabold mt-20">
          Our Services
        </h1>
        <p className="md:w-1/2 w-[90%] mt-5 text-center text-zinc-400 md:text-xl font-normal text-[14px]">
          In the "Services" section, you need clearly formulate and show the
          services that provides by your company. Services should be described
          by short sentences. If necessary, you can add a "Read More"
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 w-[70%] mt-20">
          <EachServices />
          <EachServices />
          <EachServices />
          <EachServices />
        </div>
      </div>
      {/* ABOUT US */}
      <div className="bg-[#EEF5FF] gap-20 w-full flex justify-between items-center py-[10%] px-[10%]">
        <div className="w-full">
          <p className="text-zinc-400 text-xl font-normal uppercase">
            About Us
          </p>
          <h1 className="text-slate-950 text-5xl font-extrabold mt-5">
            About Our Company
          </h1>
          <img
            src={Abt}
            alt=""
            className="inline-flex md:hidden w-full mt-20"
          />

          <p className="w-[640px] text-black md:text-xl text-[14px] font-normal mt-20 w-full">
            The purpose of the "About Us" section is to provide information
            about your company and your services. Usually, the "About Us"
            section includes a small description consisting of a few sentences,
            in which can be included additional images.
            <br />
            <br />
            <br />
            There is no reason to post all information about your company in the
            "About Us" section. We recommend to add a "Read More" button with a
            link to a page "About Us" where you can fully tell about your
            company, your team, your rewards, etc. Available “About Us” blocks
            you can see below:
          </p>
        </div>

        <img src={Abt} alt="" className="md:inline-flex hidden" />
      </div>
      {/* ACHIEVEMENTS */}
      <div className="py-20  bg-[#000327] px-[5%]">
        <div className="w-full md:flex-row flex-col flex justify-between md:items-center items-start md:gap-0 gap-10">
          <h1 className="text-slate-950 text-5xl font-extrabold mt-5 text-white">
            Your Data. Your Business.
          </h1>
          <div className="md:w-1/2 flex items-end justify-end">
            <p className="w-full text-neutral-500 text-[14px] font-normal md:text-right text-left ">
              exam is not just a test; it's a passport to a world of
              opportunities. It can shape your academic, professional, and
              personal growth, making it a valuable investment in your future.
              Don't miss out on the doors that IELTS can open for you!
            </p>
          </div>
        </div>
        <video
          src={TUT}
          controls
          poster={Thumb}
          className="h-[80vh] w-full mt-20 object-cover"
        >
          <source src={TUT} type="video/mp4" className="object-cover" />
        </video>
      </div>
      {/* ACHIEVEMENTS */}
      <div className="py-20  bg-[#EEF5FF] px-[5%]">
        <h1 className="text-slate-950 text-5xl font-extrabold mt-5">
          How our teaching <br /> can help you
        </h1>

        <div className="w-full mt-[210px] flex-wrap md:gap-0 gap-10 flex justify-between">
          <div className=" bg-[#000327] p-10 md:w-[20%] w-full rounded-lg">
            <img src={Card} alt="" className="mb-7" />
            <h1 className="my-5 text-1xl uppercase text-white font-extrabold">
              Sentence Structure
            </h1>
            <p className=" w-full text-neutral-500 text-[14px] font-normal ">
              exam is not just a test; it's a passport to a world of
              opportunities. It can shape your academic, professional, and
              personal growth, making it a valuable investment in your future.
              Don't miss out on the doors that IELTS can open for you!
            </p>
          </div>
          <div className=" bg-[#000327] p-10 md:w-[20%] w-full rounded-lg">
            <img src={Card} alt="" className="mb-7" />
            <h1 className="my-5 text-1xl uppercase text-white font-extrabold">
              Sentence Structure
            </h1>
            <p className=" w-full text-neutral-500 text-[14px] font-normal ">
              exam is not just a test; it's a passport to a world of
              opportunities. It can shape your academic, professional, and
              personal growth, making it a valuable investment in your future.
              Don't miss out on the doors that IELTS can open for you!
            </p>
          </div>
          <div className=" bg-[#000327] p-10 md:w-[20%] w-full rounded-lg">
            <img src={Card} alt="" className="mb-7" />
            <h1 className="my-5 text-1xl uppercase text-white font-extrabold">
              Sentence Structure
            </h1>
            <p className=" w-full text-neutral-500 text-[14px] font-normal ">
              exam is not just a test; it's a passport to a world of
              opportunities. It can shape your academic, professional, and
              personal growth, making it a valuable investment in your future.
              Don't miss out on the doors that IELTS can open for you!
            </p>
          </div>
          <div className=" bg-[#000327] p-10 md:w-[20%] w-full rounded-lg">
            <img src={Card} alt="" className="mb-7" />
            <h1 className="my-5 text-1xl uppercase text-white font-extrabold">
              Sentence Structure
            </h1>
            <p className=" w-full text-neutral-500 text-[14px] font-normal ">
              exam is not just a test; it's a passport to a world of
              opportunities. It can shape your academic, professional, and
              personal growth, making it a valuable investment in your future.
              Don't miss out on the doors that IELTS can open for you!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
