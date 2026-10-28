

import Navbar from "./layouts/Navbar";
import Banner from "./layouts/Banner";
import Review from "./layouts/Review";
import IndustriesCardSection from "./layouts/IndustriesCardSection";
import Product from "./layouts/Product";
import Engaging from "./layouts/Engaging";
import WeWorkWith from "./layouts/WeWorkWith";
import Pricing from "./layouts/Pricing";
import Cients from "./layouts/Cients";
import UpToDate from "./layouts/UpToDate";
import News from "./layouts/News";
import Footer from "./layouts/Footer";

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
      <UpToDate/>
      <News/>
      <Footer/>
    </>
  );
};

export default App;
