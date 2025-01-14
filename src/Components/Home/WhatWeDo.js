import React from "react";
import { FaArrowRight } from "react-icons/fa6";

import whatwedoImg1 from "../../Image/What_We_Do/pixelcut-export-1.png";
import whatwedoImg2 from "../../Image/What_We_Do/pixelcut-export-2.png";
import whatwedoImg3 from "../../Image/What_We_Do/pixelcut-export-3.png";
import whatwedoImg4 from "../../Image/What_We_Do/pixelcut-export-4.png";
import whatwedoImg5 from "../../Image/What_We_Do/pixelcut-export-5.png";
import whatwedoImg6 from "../../Image/What_We_Do/pixelcut-export-6.png";

const WhatWeDo = () => {
  const WhatWeDoData = [
    {
      id: 1,
      img: whatwedoImg1,
      tittle: "Steal From Our Vault",
      description:
        "Imagine getting access to proven test ideas to improve your most importantmetries and speed up the process of testing",
      borderClass:
        "border-r-[1px] border-b-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px]",
    },
    {
      id: 2,
      img: whatwedoImg2,
      tittle: "Your Very Own A/B Testing Think Tank",
      description:
        "Optimization is more than a one person job. A complete team of expert optimizers to brainstorm ideas,...",
      borderClass:
        "[@media(min-width:1141px)]:!border-r-[1px] [@media(min-width:761px)]:!border-r-[0px] border-r-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px] border-b-[1px]",
    },
    {
      id: 3,
      img: whatwedoImg3,
      tittle: "Push The Growth Button",
      description:
        "There is more to marketing and conversion optimization than a single landing page. There are many moving parts, we know what ...",
      borderClass:
        "border-b-[1px] [@media(min-width:1141px)]:border-r-[0px] border-r-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px]",
    },
    {
      id: 4,
      img: whatwedoImg4,
      tittle: "Quickly Gather Valuable Behavior Data",
      description:
        "Other companies will limit the number of tests per month. Not us! We test as fast as the data lets us.",
      borderClass:
        "[@media(min-width:1141px)]:!border-r-[1px] [@media(min-width:761px)]:!border-r-[0px] border-r-[1px] [@media(min-width:1141px)]:border-b-[0px] border-b-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px]",
    },
    {
      id: 5,
      img: whatwedoImg5,
      tittle: "Point And Convert",
      description:
        "We aren't going to just tell you what to do, we will actually do it. From analysis, design, development, strategy and implementation.",
      borderClass:
        "border-r-[1px] [@media(min-width:761px)]:border-b-[0px] border-b-[1px] [@media(min-width:761px)]:border-l-[0px] border-l-[1px]",
    },
    {
      id: 6,
      img: whatwedoImg6,
      tittle: "Make Decisions Based On Facts Not Feelings",
      description:
        "We Will tell it like it is. We care about your business as much as you do and will help you make better educated...",
      borderClass:
        "[@media(min-width:761px)]:border-l-[0px] border-l-[1px] [@media(min-width:761px)]:border-r-[0px] border-r-[1px]",
    },
  ];

  return (
    <main className={`w-full h-full relative GeologicaFont bg-white`}>
      <div className="w-full desktop3:pt-[1rem] pt-0 [@media(min-width:420px)]:pb-[2rem] pb-[1rem]">
        <main className={`[@media(min-width:1536px)]:w-[1536px] w-[100%]  flex justify-center items-center mx-auto`}>
          {/* `````````````````` */}
          <div className="absolute left-0 bottom-0 flex">
              <div className="w-[50px] h-[100px] relative overflow-hidden">
                <div className="w-[100px] h-[100px] rounded-[50%] bg-[#D4E4E7] absolute right-0 bottom-0"></div>
              </div>
            </div>
          <div className="xl:w-[1230px] w-[92%] relative z-[1] flex flex-col justify-center items-center py-[2.5rem]">

            <div className="w-full text-center  relative z-10 pb-[30px]">
              <h1 className="[@media(min-width:750px)]:text-[32px] text-[25px] font-[600] text-[#000000eb]">
                What We Do
              </h1>
            </div>

            <div className="w-full flex flex-wrap justify-center Poppins">
              {WhatWeDoData.map((key) => {
                return (
                  <div
                    key={key.id}
                    className={`[@media(min-width:360px)]:w-[350px] w-[98%] text-black text-center [@media(min-width:400px)]:px-[30px] px-[20px] [@media(min-width:400px)]:py-[30px] py-[20px] ${key.borderClass} border-dashed relative WhatWeDo_HoverEffectCard hover:shadow-[0px_10px_20px_0px_#c6c6c6b3] transition-[0.3s]`}
                  >
                    <div className="[@media(min-width:500px)]:w-[150px] w-[130px] h-[100px] flex justify-center items-center mb-[10px] overflow-hidden mx-auto relative">
                      <img src={key.img} className="w-[100%] mx-auto" />
                      <div className="w-[60px] h-[60px] absolute left-0 top-0 rounded-[50%] bg-[#d5eff3ba] z-[-1]"></div>
                    </div>
                    <h1 className="[@media(min-width:500px)]:text-[17px] text-[16px] font-[600] tracking-[-.5px] text-[#1d1d1d] pb-[10px] ">
                      {key.tittle}
                    </h1>
                    <p className="[@media(min-width:500px)]:text-[14px] text-[13px] font-[400] leading-[1.85] text-[#3a3a3a]">
                      {key.description}
                    </p>
                    <div className="[@media(min-width:500px)]:text-[14px] text-[13px] font-[600] text-[#3a3a3a] flex justify-center items-center pt-[5px] cursor-pointer WhatWeDo_HoverEffectCardReadMore transition-[0.3s]">
                      <p>READ MORE</p>{" "}
                      <FaArrowRight className="[@media(min-width:500px)]:text-[14px] text-[12px] ml-[3px]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default WhatWeDo;
