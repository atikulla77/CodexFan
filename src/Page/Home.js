import React from "react";
import Banner from "../Components/Home/Banner";
import GetResult from "../Components/Home/GetResult";
import Footer from "../Components/Footer/Footer";
import WhatWeDo from "../Components/Home/WhatWeDo";
import DataBusinessExperiment from "../Components/Home/DataBusinessExperiment";
import TestAnything from "../Components/Home/TestAnything";
import OurClients from "../Components/Home/OurClients";
import Testimonials from "../Components/Home/Testimonials";

const Home = () => {
  return (
    <div className="w-full h-[100%]">
      <Banner />
      <GetResult />
      <WhatWeDo />
      <DataBusinessExperiment />
      <TestAnything />
      <Testimonials />
      <OurClients />
      <Footer />
    </div>
  );
};

export default Home;
