

import Navbar from "./layouts/Navbar";
import Banner from "./layouts/Banner";
import Review from "./layouts/Review";
import IndustriesCardSection from "./layouts/IndustriesCardSection";
import Product from "./layouts/Product";
import Engaging from "./layouts/Engaging";
import WeWorkWith from "./layouts/WeWorkWith";
import Pricing from "./layouts/Pricing";
import Cients from "./layouts/Cients";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Review />
      <IndustriesCardSection />
      <Product />
      <Engaging />
      <WeWorkWith/>
      <Pricing/>
      <Cients/>
    </>
  );
};

export default App;
