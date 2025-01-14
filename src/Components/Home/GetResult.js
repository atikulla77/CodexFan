import React from "react";
import image from "../../Image/Result.jpg";

function GetResult() {
  return (
    <div
      className={`w-[100%] h-[100%] bg-white flex justify-center items-center pt-[1rem] pb-[3rem] mx-auto relative z-[5] GeologicaFont`}
    >
      <div className="[@media(min-width:1536px)]:w-[1536px] w-[100%] z-[1] flex flex-col justify-center items-center relative">
        <div className="absolute right-0 bottom-[10%] [@media(min-width:980px)]:flex hidden">
          <div className="w-[50px] h-[100px] relative overflow-hidden">
            <div className="w-[100px] h-[100px] rounded-[50%] bg-[#D4E4E7] absolute left-0 bottom-0"></div>
          </div>
        </div>

        <div className="w-full flex [@media(min-width:920px)]:flex-row flex-col justify-start items-center text-black z-10">
          {/* image */}
          <div className="w-[45%] justify-start [@media(min-width:920px)]:flex hidden items-center">
            <img
              src={image}
              className={`w-[95%] h-[95%] object-cover`}
              alt=""
            />
          </div>
          {/* Content */}
          <div className="[@media(min-width:920px)]:w-[55%] w-full h-full grid items-center [@media(min-width:920px)]:text-left text-center relative mt-[1.5rem] [@media(min-width:920px)]:pl-[2rem] pl-0">
            <h1 className="[@media(min-width:920px)]:text-[32px] text-[22px] text-[#000000de] font-[700] tracking-[1px] GeologicaFont">
              Get Results Four <br />
              Times Faster
            </h1>

            <p className="[@media(min-width:920px)]:text-[14px] [@media(min-width:500px)]:text-[13px] text-[12px] font-[400] text-[#212121c7] [@media(min-width:500px)]:leading-[25px] leading-[18px] z-10 relative pt-[10px] [@media(min-width:500px)]:pb-[20px] pb-[10px] [@media(min-width:650px)]:px-0 [@media(min-width:500px)]:px-[2rem] px-[1rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              porta
              <br className="[@media(min-width:650px)]:flex hidden" />
              viverra tempor. Integer consequat, sem at blandit commodo, nisi
              <br className="[@media(min-width:650px)]:flex hidden" />
              lectus tempor sapien, ac interdum neque nisl vel nunc. Quisque
              quis
              <br className="[@media(min-width:650px)]:flex hidden" />
              purus interdum, maximus dui in, dapibus leo. Suspendisse vel dui
              <br className="[@media(min-width:650px)]:flex hidden" />
              facilisis purus maximus tristique. Integer ac pharetra nisl.
              Interdum
              <br className="[@media(min-width:650px)]:flex hidden" />
              et malesuada fames ac ante ipsum primis in faucibus. Donec nibh
              <br className="[@media(min-width:650px)]:flex hidden" />
              lacus, dictum vel consectetur ac, egestas ac felis. Curabitur
              mattis
              <br className="[@media(min-width:650px)]:flex hidden" />
              iaculis tortor, in dictum lectus viverra laoreet. Quisque.
            </p>
            <button className="[@media(min-width:500px)]:px-[30px] px-[25px] py-[10px] [@media(min-width:920px)]:text-[13px] [@media(min-width:500px)]:text-[12px] text-[10px] font-[500] cursor-pointer text-[#fff] bg-[#1fb5f0] rounded-[50px] uppercase Poppins w-fit shadow-[0px_0px_3px_0px_#1fb5f0] [@media(min-width:920px)]:mx-0 mx-auto">
              Get My Free Proposal
            </button>
          </div>
          {/* image */}
          <div className="w-[100%] justify-start [@media(min-width:920px)]:hidden flex items-center">
            <img
              src={image}
              className={`w-[95%] h-[95%] object-cover`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetResult;
