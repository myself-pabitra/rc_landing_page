import React from "react";

import Poster from "./Poster";
import Quotation from "./Quotation";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
const Home = () => {
  return (
    <>
      <Poster />
      <Quotation/>
      <Services/>
      <Testimonials/>
      <Projects/>
    </>
  );
};

export default Home;
