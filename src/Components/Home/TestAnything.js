import React from "react";

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
findings to you. Then based on the results<br/>
we declare a winner or loser and look for <br/>
ways we can make it better.`,
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
    <main className={`w-full h-full relative GeologicaFont bg-[#F4F9FF]`}>
      <div className="[@media(min-width:1536px)]:w-[1536px] w-[100%] relative z-[1] flex flex-col justify-center items-center py-[3.5rem]">

        {/* tittle */}
        <div className="w-full text-center  relative z-10 pb-[30px]">
          <h1 className="text-[28px] font-[600] leading-[38px] text-[#000000d0]">
            Test Anything - Design, Copy, Layout,
            <br />
            Price, Offers, Menus, Search Function,
            <br />
            Images and More!
          </h1>
          <h2 className="text-[14px] font-[400] text-[#757575] pt-[8px]">
            We test a ton fo things, follow the data and iterate until we find
            you the winning elements, Elements that your visitors
            <br />
            care about most. This not only improves your conversion results, but
            also helps you adapt and scale and better
            <br />
            connect with your audience over time which equals exponential growth
            opportunities.
          </h2>
        </div>

        <div className="flex justify-center items-center Poppins relative"></div>
      </div>
    </main>
  );
};

export default DataBusinessExperiment;
