import Vite from "../../public/vite.svg";

const EachServices = () => {
  return (
    <div className="flex relative bg-[#FEBE4257] py-10 rounded-lg ">
      <div className="rounded-full w-20 h-20 p-2 bg-[#FEBE42] flex items-center justify-center absolute md:left-[-40px] left-[-20px] md:top-0 top-[-20px] ">
        <img src={Vite} alt="" />
      </div>
    <div className="flex items-start flex-col justify-center md:ml-20 ml-8 md:mt-0 mt-10 md:pr-10 pr-8">
        <h1 className=" text-white text-[23px] font-bold md:mb-0 mb-10">
          Marketting 2.0
        </h1>
        <p className="text-neutral-500 text-[14px] font-normal">
          {" "}
          It can shape your academic, professional, and personal growth, making
          it a valuable investment in your future. Don't miss out on the doors
          that IELTS can open for you!
        </p>
      </div>
    </div>
  );
};

export default EachServices;
