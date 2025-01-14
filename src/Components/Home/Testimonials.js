import React from "react";
import personLogo from "../../Image/Testimonials.jpg";

const Testimonials = () => {
  return (
    <div className="w-[100%] h-full flex justify-center">
        <main className={`[@media(min-width:1536px)]:w-[1536px] w-[100%] h-full relative GeologicaFont bg-white mx-auto`}>
                      {/* `````````````````` */}
          <div className="absolute left-0 top-[2rem] flex">
              <div className="w-[50px] h-[100px] relative overflow-hidden">
                <div className="w-[100px] h-[100px] rounded-[50%] bg-[#D4E4E7] absolute right-0 bottom-0"></div>
              </div>
            </div>
            <div className="absolute right-0 bottom-[1rem] flex">
              <div className="w-[50px] h-[100px] relative overflow-hidden">
                <div className="w-[100px] h-[100px] rounded-[50%] bg-[#D4E4E7] absolute left-0 bottom-0"></div>
              </div>
            </div>
      <div className="xl:w-[1230px] w-[100%] relative z-[1] flex flex-col justify-center items-center py-[4rem] mx-auto">
        <div className="w-full text-center  relative z-10 [@media(min-width:860px)]:pb-[30px] pb-[50px]">
          <h1 className="[@media(min-width:750px)]:text-[32px] text-[25px] font-[600] text-[#000000eb]">
            Testimonials
          </h1>
        </div>
        <div className="w-full flex [@media(min-width:860px)]:flex-row flex-col [@media(min-width:860px)]:text-left text-center justify-center items-center Poppins">
          <div className="[@media(min-width:560px)]:w-[270px] w-[200px] [@media(min-width:560px)]:h-[270px] h-[200px] flex justify-center items-center rounded-[50%] overflow-hidden shadow-[0px_0px_14px_0px_#c4c4c4]">
            <img
              src={personLogo}
              className="w-[93%] h-[93%] mx-auto rounded-[50%]"
            />
          </div>
          <div className="[@media(min-width:860px)]:pl-[3rem] pl-0 [@media(min-width:860px)]:w-[600px] w-full flex flex-col [@media(min-width:860px)]:text-left text-center [@media(min-width:860px)]:justify-start justify-center [@media(min-width:860px)]:pt-0 [@media(min-width:560px)]:pt-[2rem] pt-[1rem]">
            <p className=" italic [@media(min-width:560px)]:text-[15px] text-[13px] [@media(min-width:560px)]:leading-[26px] leading-[22px] font-[400] text-[#7a7a7a] [@media(min-width:560px)]:px-0 [@media(min-width:500px)]:px-[1.5rem] px-[1rem] [@media(min-width:560px)]:mx-0 mx-auto">
              `` I REALLY liked how the work got done with little to no
              <br className="[@media(min-width:560px)]:flex hidden"/>
              distractions. The team communicated really well. Regular updates i
              got
              <br className="[@media(min-width:560px)]:flex hidden"/>
              was all i needed to feel confident that good stuff was in
              progress. <br className="[@media(min-width:560px)]:flex hidden"/>
              Overall, a great experience. Within weeks we saw test data <br className="[@media(min-width:560px)]:flex hidden"/>
              coming back with higher AOVs and total sales. You guys really ``
            </p>
            <div className="flex items-center [@media(min-width:560px)]:pt-[1.8rem] pt-[1.3rem] [@media(min-width:860px)]:mx-0 mx-auto text-left">
              <img
                src={personLogo}
                className="[@media(min-width:560px)]:w-[40px] w-[35px] [@media(min-width:560px)]:h-[40px] h-[35px] rounded-[50%]"
              />
              <div className="pl-[10px] GeologicaFont">
                <p className="[@media(min-width:560px)]:text-[14px] text-[13px] font-[600] text-[#3e3e3e]">
                  Justin Lofton
                </p>
                <p className="[@media(min-width:560px)]:text-[11px] text-[10px] font-[500] text-[#7a7a7a]">
                  Founder-Syncsumo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Testimonials;
