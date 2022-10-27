import React from "react";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Trusted from "./component/Trusted";

const Home = () => {
  const data = {
    name: "shop store",
  };
  return (
    <>
      <Hero data={data} />
      <Services/>
      <Trusted/>
    </>
  );
};

export default Home;
