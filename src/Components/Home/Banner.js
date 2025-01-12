import React from "react";
import Navber from "../Navbar/Navbar";
import bg from "../../Image/bg_1.jpg";
import bg2 from "../../Image/bg_1.2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      className="w-full h-[100%] relative flex items-end justify-center bg-[#d5d5d5] pt-[5rem]"
      id="Home"
    >
      <Navber />
      <div
        className={`w-full h-full [@media(min-width:590px)]:flex hidden absolute top-0 left-0 z-0`}
      >
        <img src={bg} className="w-full h-full object-cover object-center" />
      </div>
      <div
        className={`w-full h-full [@media(min-width:590px)]:hidden flex absolute top-0 left-0 z-0`}
      >
        <img src={bg2} className="w-full h-full object-cover  object-bottom" />
      </div>

      <div className="w-full [@media(min-width:590px)]:h-[60rem] h-[40rem] flex mx-auto relative">
        <div className="w-[100%] z-10 GeologicaFont text-white relative flex flex-col pt-[7rem] items-center justify-start text-center">
          <h1 className="lg:!text-[55px] [@media(min-width:768px)]:text-[45px] [@media(min-width:590px)]:text-[35px] text-[23px] text-clip font-[500] lg:!leading-[80px] [@media(min-width:768px)]:leading-[60px] [@media(min-width:590px)]:leading-[50px] leading-[35px] [@media(min-width:590px)]:pb-[16px] pb-[13px] ">
            {/* Become a Smarter<br className="[@media(min-width:570px)]:hidden flex" />  Marketer With {" "}
            <br className="[@media(min-width:570px)]:flex hidden" />
            Conversion<br className="[@media(min-width:570px)]:hidden flex" />  Optimization */}
            Become a Smarter
            <br className="[@media(min-width:400px)]:hidden flex" /> Marketer
            With <br className="[@media(min-width:400px)]:flex hidden" />
            Conversion
            <br className="[@media(min-width:400px)]:hidden flex" />{" "}
            Optimization
          </h1>
          <h2 className="lg:!text-[18px] [@media(min-width:768px)]:text-[15px] text-[12px] font-[300] text-[#ffffffbd] [@media(min-width:590px)]:pb-[20px] pb-[20px]">
            Put a Creative Team Of Fanatical Split-Testers
            <br className="[@media(min-width:410px)]:!hidden flex" /> To Work On
            <br className="[@media(min-width:570px)]:!hidden [@media(min-width:410px)]:!flex hidden" />
            Your Site
          </h2>
          <button className="lg:px-[30px] px-[26px] lg:py-[10px] py-[9px] lg:!text-[14px] [@media(min-width:590px)]:text-[12px] text-[10px] font-[500] cursor-pointer text-[#fff] bg-[#232323] rounded-[50px] uppercase Poppins">
            Get My Free Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
