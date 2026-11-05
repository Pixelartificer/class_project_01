import Container from "../components/Container";
import Flex from "../components/Flex";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import { FiCheckCircle, FiAward, FiTarget } from "react-icons/fi";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const About = () => {
  return (
    <>
    <Navbar />
      <section className="my-16 lg:mt-27.5 lg:mb-22.5 bg-white">
        <Container>
          {/* Section Heading */}
          <SubHeading
            text="About Our Company"
            className="flex justify-center items-center text-center mb-6"
          />
          
          {/* Section Subtitle / Description */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <PText 
              text="We are dedicated to providing the best digital solutions and exceptional experiences to help your business grow and succeed in the modern world."
              className="text-text16 lg:text-text18 text-lightBlackText leading-relaxed"
            />
          </div>

          {/* Mission and Vision Grid */}
          <Flex className="flex-col md:flex-row justify-center items-center lg:justify-between gap-6 lg:gap-7.5 w-full mb-20">
            {/* Mission Box */}
            <div className="w-full md:w-[48%] bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-bgGreen/10 rounded-2xl text-bgGreen">
                  <FiTarget className="w-7 h-7 text-bgGreen" />
                </div>
                <h3 className="text-text18 lg:text-2xl font-bold text-blackText font-inter">Our Mission</h3>
              </div>
              <p className="text-lightBlackText text-sm lg:text-base leading-relaxed">
                To empower businesses and individuals with top-tier, intuitive, and modern web solutions that drive engagement, efficiency, and continuous growth.
              </p>
            </div>

            {/* Vision Box */}
            <div className="w-full md:w-[48%] bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-bgGreen/10 rounded-2xl text-bgGreen">
                  <FiAward className="w-7 h-7 text-bgGreen" />
                </div>
                <h3 className="text-text18 lg:text-2xl font-bold text-blackText font-inter">Our Vision</h3>
              </div>
              <p className="text-lightBlackText text-sm lg:text-base leading-relaxed">
                To become a globally recognized leader in innovative digital architecture, setting new standards for quality, user experience, and reliability.
              </p>
            </div>
          </Flex>

          {/* Why Choose Us Section */}
          <div className="bg-sectionBg01 p-8 lg:p-14 rounded-3xl border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-blackText text-center mb-10 font-inter">
              Why Choose Us?
            </h3>
            
            <Flex className="flex-col md:flex-row flex-wrap justify-center lg:justify-between gap-6 w-full">
              <div className="w-full md:w-[32%] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <FiCheckCircle className="w-6 h-6 text-bgGreen mb-3" />
                <h4 className="text-lg font-bold text-blackText mb-2 font-inter">Expert Team</h4>
                <p className="text-lightBlackText text-sm">Skilled professionals dedicated to crafting exceptional digital experiences.</p>
              </div>

              <div className="w-full md:w-[32%] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <FiCheckCircle className="w-6 h-6 text-bgGreen mb-3" />
                <h4 className="text-lg font-bold text-blackText mb-2 font-inter">Quality Solutions</h4>
                <p className="text-lightBlackText text-sm">Meticulously designed components and robust architectures for peak performance.</p>
              </div>

              <div className="w-full md:w-[32%] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <FiCheckCircle className="w-6 h-6 text-bgGreen mb-3" />
                <h4 className="text-lg font-bold text-blackText mb-2 font-inter">Dedicated Support</h4>
                <p className="text-lightBlackText text-sm">Always here to help you troubleshoot, scale, and optimize your platform.</p>
              </div>
            </Flex>
          </div>

        </Container>
      </section>

      <Footer />
    </>
  );
};

export default About;
