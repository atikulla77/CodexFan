import React from "react";
import logo from "../../Image/logo.png";
import logo1 from "../../Image/1_icon_1.png";
import { Link } from "react-scroll";

function Footer() {
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "Home",
    },
    {
      id: 2,
      name: "About",
      link: "About",
    },
    {
      id: 3,
      name: "Impact",
      link: "Impact",
    },
    {
      id: 4,
      name: "Team",
      link: "Team",
    },
  ];
  return (
    <div className="bg-[#07001f] w-full [@media(min-width:700px)]:h-[9rem] h-[14rem] flex items-center relative border-t-[1px] border-t-[#ffffff1b]">
      <div className="xl:w-[1230px] [@media(min-width:500px)]:w-[96%] w-[100%] mx-auto [@media(min-width:500px)]:px-5 [@media(min-width:400px)]:px-[15px] px-[6px] flex [@media(min-width:700px)]:flex-row flex-col items-center justify-between GeologicaFont">
        <div className="w-[100px] flex flex-col justify-center [@media(min-width:700px)]:mb-0 [@media(min-width:500px)]:mb-[1.5rem] mb-[1rem]">
          <img
            src={logo1}
            className="[@media(min-width:700px)]:w-[50px] w-[40px] mx-auto mb-[8px]"
          />
          <img
            src={logo}
            className="[@media(min-width:500px)]:w-[90px] w-[80px] mx-auto"
          />
        </div>
        <span className="w-[90%] flex flex-col [@media(min-width:700px)]:justify-end justify-center z-10">
          <div className="flex [@media(min-width:700px)]:justify-end justify-center sm:space-x-4 space-x-1">
            {navItems.map((key) => {
              return (
                <Link
                  key={key.id}
                  to={key.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={
                    "[@media(min-width:1024px)]:px-3 px-[5px] [@media(min-width:700px)]:text-[14px] text-[13px] [@media(min-width:500px)]:font-[400] font-[300] cursor-pointer text-[#fff] hover:text-[#EA3E76] transition-[0.3s]"
                  }
                  aria-current="page"
                >
                  {key.name}
                </Link>
              );
            })}
          </div>
          <div className="w-full h-[2px] bg-[#ffffff1b] [@media(min-width:500px)]:my-[15px] my-[10px]"></div>
          <p className="text-[#fff] [@media(min-width:500px)]:text-[14px] text-[13px] font-[300] [@media(min-width:700px)]:text-right text-center">
            © Copyright 2021{" "}
            <a
              href="https://kodify.vercel.app/"
              target="_blank"
              className="text-[#EA3E76] cursor-pointer ml-[5px]"
            >
              https://kodify.vercel.app/
            </a>{" "}
            <span className="mx-[5px]">|</span> All Rights Reservesd
          </p>
        </span>
      </div>
    </div>
  );
}

export default Footer;
