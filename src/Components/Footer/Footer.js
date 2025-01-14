import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import footer1 from "../../Image/Footer.png";
import footer2 from "../../Image/Mobile_Footer.png";

function Footer() {
  return (
    <div className="w-full h-full relative bg-white" id="footer">
      <div className={`w-full h-full flex absolute top-0 left-0 z-0`}>
        <img
          src={footer1}
          className="w-full h-full object-cover [@media(min-width:815px)]:flex hidden object-top"
        />
        <img
          src={footer2}
          className="w-full h-full object-cover [@media(min-width:815px)]:hidden flex object-top"
        />
      </div>
      <footer className="text-white body-font">
        <div className="w-full">
          <div className="xl:w-[1230px] w-[100%] [@media(min-width:815px)]:!pt-[12rem] [@media(min-width:600px)]:pt-[15rem] [@media(min-width:450px)]:pt-[12rem] pt-[9rem] pb-[3rem] flex md:flex-row flex-col md:text-left text-center items-center justify-between border-b-[1px] border-b-[#ffffff45] z-10 relative mx-auto px-[1.5rem]">
            <h1 className="[@media(min-width:1100px)]:!text-[29px] [@media(min-width:815px)]:text-[27px] [@media(min-width:500px)]:text-[22px] text-[18px] text-[#ffffff] font-[700] tracking-[1px] drop-shadow-[0px_0px_4px_#6262626b] GeologicaFont">
              Test Everything. Get Marketing{" "}
              <br className="[@media(min-width:500px)]:flex hidden" />
              Super Powers. Make More Money.
            </h1>
            <button className="[@media(min-width:1100px)]:px-[30px] [@media(min-width:500px)]:px-[25px] px-[20px] [@media(min-width:500px)]:py-[10px] py-[9px] [@media(min-width:1100px)]:text-[13px] [@media(min-width:500px)]:text-[12px] text-[10px] font-[600] cursor-pointer text-[#1fb5f0] bg-[#ffffff] rounded-[50px] uppercase Poppins w-fit shadow-[0px_0px_3px_0px_#fff] md:mt-0 mt-[1rem]">
              Get My Free Proposal
            </button>
          </div>
        </div>
        {/* ``````````````` */}
        <div className="xl:w-[1230px] w-[96%] px-5 md:py-[7rem] py-[1rem] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col z-10 relative">
          <div className="flex-grow flex flex-wrap md:mt-0 mt-10 md:text-left text-center z-10 mx-auto">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-[14px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Agency
              </h2>
              <nav className="list-none lg:mb-0 mb-10 text-[#ffffffde] text-[13px] GeologicaFont">
                <li className=" py-[5px]">
                  <a className="cursor-pointer">What We Do</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">About Us</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Case studies</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Resources</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Blog</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-[14px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Conversion Optimization
              </h2>
              <nav className="list-none lg:mb-0 mb-10 text-[#ffffffde] text-[13px] GeologicaFont">
                <li className=" py-[5px]">
                  <a className="cursor-pointer">About Us</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Contact Us</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Career</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">FAQs</a>
                </li>
                <li className=" py-[5px]">
                  <a className="cursor-pointer">Resources</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-[14px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Traffic Management
              </h2>
              <nav className="list-none lg:mb-0 mb-10 text-[#ffffffde] text-[13px] GeologicaFont">
                <li className=" py-[5px]">
                  <p className="cursor-pointer">Local SEO</p>
                </li>
                <li className=" py-[5px]">
                  <p className="cursor-pointer">Social Media Marketing</p>
                </li>
                <li className=" py-[5px]">
                  <p className="cursor-pointer">Pay Per Click Management</p>
                </li>
                <li className=" py-[5px]">
                  <p className="cursor-pointer">What We Do</p>
                </li>
                <li className=" py-[5px]">
                  <p className="cursor-pointer">Free SEO Analysis</p>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-[14px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Contact Us
              </h2>
              <nav className="list-none lg:mb-0 mb-10 text-[#ffffffde] text-[13px] GeologicaFont">
                <li className="flex py-[5px] md:justify-start justify-center ">
                  <IoLocationSharp className="text-[17px] mr-[5px] md:text-left text-center mt-[3px]" />
                  <a className="flex items-start">
                    Office Address 12548
                    <br /> Unknown, Rd. Ste 102 Austin
                    <br />
                    TX 84855
                  </a>
                </li>
                <li className="flex items-center py-[5px] md:text-left text-center  md:justify-start justify-center">
                  <MdEmail className="text-[16px] mr-[6px]" />
                  <a className="">hi@gmail.com</a>
                </li>
                <li className="flex items-center py-[5px] md:text-left text-center  md:justify-start justify-center">
                  <FaPhoneFlip className="text-[14px] mr-[6px]" />
                  <a className="">+01 130 301 0014</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        {/* ``````````````` */}
        <div className="w-full">
          <div className="xl:w-[1230px] w-[100%] py-4 flex flex-wrap flex-col sm:flex-row items-center border-t-[1px] border-t-[#ffffff45] z-10 relative mx-auto px-[1.5rem]">
            <p className="text-[#ffffffd1] text-sm font-[400] text-center sm:text-left sm:flex hidden">
              ©2019 Conversion Fanatics LLC
            </p>

            <span className="inline-flex sm:ml-auto justify-center sm:justify-start">
              <div className="bg-[#ffffff38] rounded-[50%] w-[35px] h-[35px] text-center justify-center flex items-center mx-[0.25rem]">
                <RiFacebookFill className="text-[17px]" />
              </div>
              <div className="bg-[#ffffff38] rounded-[50%] w-[35px] h-[35px] text-center justify-center flex items-center mx-[0.25rem]">
                <FaTwitter className="text-[15px]" />
              </div>
              <div className="bg-[#ffffff38] rounded-[50%] w-[35px] h-[35px] text-center justify-center flex items-center mx-[0.25rem]">
                <FaYoutube className="text-[16px]" />
              </div>
            </span>
            <p className="text-[#ffffffd1] text-sm font-[400] text-center sm:text-left sm:hidden flex pt-[0.5rem]">
              ©2019 Conversion Fanatics LLC
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
