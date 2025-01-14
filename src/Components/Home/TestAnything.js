import React from "react";
import bottomImg from "../../Image/DataBusinessExperiment_BottomImg.jpg";
import bottomImg2 from "../../Image/DataBusinessExperiment_BottomImg2.jpg";

import testAnything1 from "../../Image/Test_Anything/pixelcut-1.png";
import testAnything2 from "../../Image/Test_Anything/pixelcut-2.png";
import testAnything3 from "../../Image/Test_Anything/pixelcut-3.png";
import testAnything4 from "../../Image/Test_Anything/pixelcut-4.png";
import testAnything5 from "../../Image/Test_Anything/pixelcut-5.png";
import testAnything6 from "../../Image/Test_Anything/pixelcut-6.png";

const DataBusinessExperiment = () => {
  const DataBusinessExperiment = [
    { id: 1, img: testAnything1, borderLine: "flex", borderRotate: false },
    { id: 2, img: testAnything2, borderLine: "flex", borderRotate: true },
    { id: 3, img: testAnything3, borderLine: "[@media(min-width:815px)]:flex hidden", borderRotate: false },
    { id: 4, img: testAnything4, borderLine: "flex", borderRotate: true },
    { id: 5, img: testAnything5, borderLine: "flex", borderRotate: false },
    { id: 6, img: testAnything6, borderLine: "hidden", },
  ];

  return (
    <main className={`w-full h-full GeologicaFont bg-[#F4F9FF] relative`}>
      <div className="absolute left-0 bottom-0 right-0 w-full">
        <img
          src={bottomImg}
          className="w-full object-cover object-center [@media(min-width:530px)]:flex hidden"
        />
        <img
          src={bottomImg2}
          className="w-full object-cover object-center [@media(min-width:530px)]:hidden flex"
        />
      </div>
      <div className="[@media(min-width:1536px)]:w-[1536px] w-[100%] relative z-[1] flex flex-col justify-center items-center pt-[3.5rem] [@media(min-width:530px)]:pb-[7rem] pb-[6rem]">
      <div className="absolute right-0 top-[-3rem] z-[-1]">
          <div className="w-[50px] h-[100px] relative overflow-hidden">
            <div className="w-[100px] h-[100px] rounded-[50%] bg-[#D4E4E7] absolute left-0 bottom-0"></div>
          </div>
        </div>
        {/* tittle */}
        <div className="w-full text-center  relative z-10 [@media(min-width:560px)]:pb-[30px]  pb-[15px]">
          <h1 className="[@media(min-width:730px)]:!text-[28px] [@media(min-width:530px)]:text-[24px] text-[19px] font-[600] [@media(min-width:730px)]:!leading-[38px] [@media(min-width:530px)]:leading-[33px] leading-[26px] text-[#000000d0]">
            Test Anything - Design,
            <br className="[@media(min-width:410px)]:hidden flex" /> Copy,
            Layout,
            <br className="[@media(min-width:410px)]:flex hidden" />
            Price, Offers,
            <br className="[@media(min-width:410px)]:hidden flex" /> Menus,
            Search Function,
            <br className="[@media(min-width:410px)]:hidden flex" />
            <br className="[@media(min-width:410px)]:flex hidden" />
            Images and More!
          </h1>
          <h2 className="[@media(min-width:730px)]:text-[14px] [@media(min-width:530px)]:text-[13px] text-[12px] font-[400] text-[#757575] pt-[8px] [@media(min-width:850px)]:px-0 [@media(min-width:440px)]:px-[1.5rem] px-[1rem]">
            We test a ton fo things, follow the data and iterate until we find
            you the winning elements, Elements that your visitors
            <br className="[@media(min-width:850px)]:flex hidden" />
            care about most. This not only improves your conversion results, but
            also helps you adapt and scale and better
            <br className="[@media(min-width:850px)]:flex hidden" />
            connect with your audience over time which equals exponential growth
            opportunities.
          </h2>
        </div>

        <div className="[@media(min-width:815px)]:flex hidden justify-center items-center Poppins relative">
          {DataBusinessExperiment.map((key) => {
            return (
              <div key={key.id} className={`${key.borderLine === "hidden"? "w-[86px]":"w-[140px]"} flex items-center justify-between`}>
                <div className="w-[70px] h-[70px] flex justify-center items-center bg-white shadow-[0px_0px_8px_3px_#8a8a8a3d] rounded-[50%] overflow-hidden mx-[0.5rem]">
                  <img src={key.img} className="w-[75%] mx-auto" />
                </div>
                <div className={`w-[60px] h-[11px] rounded-[50%] ${key.borderRotate? "rotate-180":"rotate-0 "} ${key.borderLine} items-baseline justify-center relative overflow-hidden`}>
                  <div className="w-[60px] h-[28px] rounded-[46%] border-dashed border-[2px] border-[#767676]"></div>{" "}
                </div>
              </div>
            );
          })}
        </div>
        <div className="[@media(min-width:370px)]:w-[330px] w-[310px] [@media(min-width:815px)]:hidden flex flex-wrap justify-center items-center Poppins relative">
          {DataBusinessExperiment.map((key) => {
            return (
              <div key={key.id} className={`${key.borderLine === "hidden" || key.borderLine === "[@media(min-width:815px)]:flex hidden" ? "[@media(min-width:370px)]:w-[75px] w-[66px]":"[@media(min-width:370px)]:w-[125px] w-[116px]"} flex items-center justify-between`}>
                <div className="w-[60px] h-[60px] flex justify-center items-center bg-white shadow-[0px_0px_8px_3px_#8a8a8a3d] rounded-[50%] overflow-hidden [@media(min-width:370px)]:mx-[0.5rem] mx-[0.2rem] my-[1rem]">
                  <img src={key.img} className="w-[75%] mx-auto" />
                </div>
                <div className={`w-[48px] h-[9px] rounded-[50%] ${key.borderRotate? "rotate-180":"rotate-0 "} ${key.borderLine} items-baseline justify-center relative overflow-hidden`}>
                  <div className="w-[50px] h-[28px] rounded-[46%] border-dashed border-[2px] border-[#767676]"></div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default DataBusinessExperiment;
