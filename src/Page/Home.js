import React from "react";
import Banner from "../Components/Home/Banner";
import GetResult from "../Components/Home/GetResult";
import Footer from "../Components/Footer/Footer";
import WhatWeDo from "../Components/Home/WhatWeDo";

const Home = () => {
  return (
    <div className="w-full h-[100%]">
      <Banner />
      <GetResult />
      <WhatWeDo />
      <Footer />
    </div>
  );
};

export default Home;
