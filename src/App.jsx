import React from "react";

import Navbar from "./layouts/Navbar";
import Banner from "./layouts/Banner";
import Review from "./layouts/Review";
import IndustriesCardSection from "./layouts/IndustriesCardSection";
import Product from "./layouts/Product";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Review />
      <IndustriesCardSection />
      <Product />
    </>
  );
};

export default App;
