import React from "react";
import partical1 from "../../Image/DataBusinessExperiment_Particals_1.png";
import partical2 from "../../Image/DataBusinessExperiment_Particals_2.png";
import logo from "../../Image/DataBusinessExperiment_Logo.png";

const DataBusinessExperiment = () => {
  const DataBusinessExperimentData = [
    {
      id: 1,
      tittle: "Use Your Data Like Never Before .01",
      description: `We analyze both qualitative and quantitative<br/>
data to get an understanding of what areas<br/>
need the most attention. Then put together<br/>
an action plan.`,
      position: "leftTop",
    },
    {
      id: 2,
      tittle: "02. Pre-Launch Development Checklist",
      description: `Our expert developers then code the test<br/>
functionality and put it through a rigorous<br/>
QA process to make sure it works on <br/>
multiple browsers and devices.`,
      position: "rightTop",
    },
    {
      id: 3,
      tittle: "Launch, Get Results. Iterate. Repeat. 03",
      description: `Here is where it gets fun. The results! We<br/>
watch for trends in all the data, report key<br/>
findings to you. Then based on the results we<br/>
 declare a winner or loser and look for ways<br/>
 we can make it better.`,
      position: "leftBottom",
    },
    {
      id: 4,
      tittle: "04. Make Your Site Easier To Use",
      description: `Our creative team then flushes out the <br/>
designs of the changes we want to test,<br/>
often with multiple variations. Don't worry,<br/>
we are really good about designing to fit<br/>
your brand.`,
      position: "rightBottom",
    },
  ];

  return (
    <main className={`w-full h-full relative GeologicaFont bg-[white]`}>
        <div className="[@media(min-width:1536px)]:w-[1536px] w-[100%] relative z-[1] flex flex-col justify-center items-center py-[1rem]">
          <div className="absolute right-0 [@media(min-width:870px)]:!top-0 [@media(min-width:540px)]:top-[35%] top-[50%] [@media(min-width:870px)]:w-[250px] [@media(min-width:540px)]:w-[200px] w-[150px] justify-end flex items-center z-[-1]">
            <img src={partical1} className={`w-[100%] object-cover`} alt="" />
          </div>
          <div className="absolute left-0 [@media(min-width:870px)]:bottom-[-30%] [@media(min-width:540px)]:bottom-[-15%] bottom-[-7%] [@media(min-width:870px)]:!w-[180px] [@media(min-width:540px)]:w-[160px] w-[135px] justify-start flex items-center z-[-2]">
            <img src={partical2} className={`w-[100%] object-cover`} alt="" />
          </div>

          {/* tittle */}
          <div className="w-full text-center  relative z-10 pb-[30px]">
            <h1 className="[@media(min-width:870px)]:text-[30px] [@media(min-width:570px)]:text-[25px] text-[22px] font-[600] [@media(min-width:870px)]:leading-[45px] [@media(min-width:570px)]:leading-[37px] leading-[30px] text-[#000000d0]">
              Your DAta is Unique To <br className="[@media(min-width:570px)]:hidden flex" /> Your Business, Your
              <br className="" />
              Experiment Plan Should <br className="[@media(min-width:570px)]:hidden flex" /> Be Too
            </h1>
            <h2 className="[@media(min-width:870px)]:text-[15px] text-[13px] font-[400] text-[#202020ab] pt-[8px]">
              Stay miles ahead of the competition with a <br className="[@media(min-width:570px)]:hidden flex" /> customized optimization
              plan
            </h2>
          </div>

          <div className="[@media(min-width:870px)]:w-[850px] w-[275px] [@media(min-width:870px)]:h-[350px] h-[217px] flex justify-center items-center Poppins my-[3rem] relative">
            <div className="[@media(min-width:870px)]:w-[210px] w-[200px] [@media(min-width:870px)]:h-[190px] h-[175px] flex justify-center items-center mx-auto relative">
              <div className="bg-white w-[150px] h-[150px] flex justify-center items-center rounded-[50%] shadow-[0px_0px_10px_0px_#8a8a8a]">
                <img src={logo} className="w-[90%] h-[90%]" />
              </div>

              {/* --------Top-left-------- */}
              <div className="w-[20px] h-[2px] bg-[#aec6ca73] shadow-[0px_0px_1px_0px_#aec6ca73] absolute left-0 top-0 z-[-1]"></div>
              <div className="w-[80px] h-[2px] bg-[#aec6ca73] shadow-[0px_0px_1px_0px_#aec6ca73] rotate-45 absolute left-[9px] top-[28px] z-[-1]"></div>
              {/* --------Top-Right-------- */}
              <div className="w-[20px] h-[2px] bg-[#aec6ca73] shadow-[0px_0px_1px_0px_#aec6ca73] absolute right-0 top-0 z-[-1]"></div>
              <div className="w-[80px] h-[2px] bg-[#aec6ca73] shadow-[0px_0px_1px_0px_#aec6ca73] rotate-[135deg] absolute right-[9px] top-[28px] z-[-1]"></div>
              {/* --------Bottom-Left-------- */}
              <div className="w-[20px] h-[2px] bg-[#aec6ca73] shadow-[0px_0px_1px_0px_#aec6ca73] absolute left-0 bottom-0 z-[-1]"></div>
              <div className="w-[80px] h-[2px] bg-[#aec6ca73] shadow-[0px_0px_1px_0px_#aec6ca73] rotate-[135deg] absolute left-[9px] bottom-[28px] z-[-1]"></div>
              {/* --------Bottom-Right-------- */}
              <div className="w-[20px] h-[2px] bg-[#aec6ca73] shadow-[0px_0px_1px_0px_#aec6ca73] absolute right-0 bottom-0 z-[-1]"></div>
              <div className="w-[80px] h-[2px] bg-[#aec6ca73] shadow-[0px_0px_1px_0px_#aec6ca73] rotate-[45deg] absolute right-[9px] bottom-[28px] z-[-1]"></div>
            </div>
            {DataBusinessExperimentData.map((key) => {
              return (
                <div key={key.id}>
                  <div
                    className={`[@media(min-width:870px)]:hidden block absolute ${
                      key.position === "leftTop" ? "left-0 top-0" : ""
                    }
                                        ${
                                          key.position === "leftBottom"
                                            ? "left-0 bottom-0"
                                            : ""
                                        }
                ${key.position === "rightBottom" ? "right-0 bottom-0" : ""}
                ${
                  key.position === "rightTop" ? "right-0 top-0" : ""
                } shadow-[0px_0px_8px_3px_#8a8a8a3d] text-[#2a2a2a] bg-white w-[45px] h-[45px] rounded-[50%] font-[600] flex justify-center items-center text-center`}
                  >
                    0{key.id}
                  </div>
                  <div
                    className={`[@media(min-width:870px)]:block hidden absolute w-[320px] py-[23px] rounded-[5px] bg-white ${
                      key.position === "leftTop"
                        ? "text-right left-0 top-0 pr-[23px]"
                        : ""
                    }
                                        ${
                                          key.position === "leftBottom"
                                            ? "text-right left-0 bottom-0 pr-[23px]"
                                            : ""
                                        }
                ${
                  key.position === "rightBottom"
                    ? "text-left right-0 bottom-0 pl-[23px]"
                    : ""
                }
                ${
                  key.position === "rightTop"
                    ? "text-left right-0 top-0 pl-[23px]"
                    : ""
                } shadow-[0px_0px_8px_3px_#8a8a8a3d]`}
                  >
                    <h1 className="font-[600] text-[14px] pb-[5px] text-[#4a4a4a]">
                      {key.tittle}
                    </h1>
                    <p
                      className="text-[12px] font-[500] text-[#646464]"
                      dangerouslySetInnerHTML={{ __html: `${key.description}` }}
                    ></p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full [@media(min-width:870px)]:hidden flex flex-col justify-center">
              {DataBusinessExperimentData.map((key) => {
                return (
                  <div
                    key={key.id}
                    className={`[@media(min-width:400px)]:w-[320px] w-[290px] py-[23px] pl-[23px] rounded-[5px] bg-white shadow-[0px_0px_8px_3px_#8a8a8a3d] [@media(min-width:400px)]:my-[1rem] my-[0.7rem] mx-auto`}
                  >
                    <h1 className="font-[600] [@media(min-width:400px)]:text-[14px] text-[13px] pb-[5px] text-[#4a4a4a]">
                      {key.tittle}
                    </h1>
                    <p
                      className="[@media(min-width:400px)]:text-[12px] text-[11px] font-[500] text-[#646464]"
                      dangerouslySetInnerHTML={{ __html: `${key.description}` }}
                    ></p>
                  </div>
                );
              })}
            </div>
        </div>
    </main>
  );
};

export default DataBusinessExperiment;
