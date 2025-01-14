import React from "react";
import Marquee from "react-fast-marquee";
import Clients1 from "../../Image/Branding/branding-1.png";
import Clients2 from "../../Image/Branding/branding-2.png";
import Clients3 from "../../Image/Branding/branding-3.png";
import Clients4 from "../../Image/Branding/branding-4.png";
import Clients5 from "../../Image/Branding/branding-5.png";
import Clients6 from "../../Image/Branding/branding-6.png";

function OurClients() {
  const allTeam = [
    {
      id: 1,
      image: Clients1,
    },
    {
      id: 2,
      image: Clients2,
    },
    {
      id: 3,
      image: Clients3,
    },
    {
      id: 4,
      image: Clients4,
    },
    {
      id: 5,
      image: Clients5,
    },
    {
      id: 6,
      image: Clients6,
    },
    {
        id: 7,
        image: Clients1,
      },
      {
        id: 8,
        image: Clients2,
      },
      {
        id: 9,
        image: Clients3,
      },
      {
        id: 10,
        image: Clients4,
      },
      {
        id: 11,
        image: Clients5,
      },
      {
        id: 12,
        image: Clients6,
      },
  ];
  return (
    <div
      className={`[@media(min-width:1200px)]:w-[1160px] w-[98%] h-[100%] flex flex-col justify-center items-center pt-[2rem] relative z-[5] GeologicaFont [@media(min-width:815px)]:mb-[-2.5rem] mb-[-1.5rem] mx-auto`}
    >
          <p className="[@media(min-width:500px)]:text-[15px] text-[14px] text-center font-[500] uppercase text-[#3e3e3e] KarlaFont" >
          We Love Our Clients
          </p>
          <div className="bg-gradient-to-r from-white w-[70px] h-[100%] absolute left-0 bottom-0 z-30 [@media(min-width:815px)]:flex hidden"></div>
          <div className="bg-gradient-to-l from-white w-[70px] h-[100%] absolute right-0 bottom-0 z-30 [@media(min-width:815px)]:flex hidden"></div>
          <div className="w-full pt-[0.7rem]">
            <Marquee className="pt-[5px]">
              {allTeam.map((key) => {
                return (
                  <div
                    className={`[@media(min-width:530px)]:w-[130px] w-[90px] [@media(min-width:500px)]:mx-[15px] mx-[5px] opacity-[0.8]`}
                    key={key.id}
                  >
                    <img src={key.image} className="w-full" alt="" />
                  </div>
                );
              })}
            </Marquee>
        </div>
    </div>
  );
}

export default OurClients;
