import Container from "../components/Container";
import Flex from "../components/Flex";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import { FiFileText, FiArrowRight } from "react-icons/fi";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Pages = () => {
  const pageList = [
    { title: "Home Page", desc: "Welcome to our platform with hero section, features, and latest highlights.", link: "#" },
    { title: "About Us", desc: "Learn more about our mission, vision, and the team behind our success.", link: "#" },
    { title: "Services", desc: "Explore the wide range of professional digital solutions we offer.", link: "#" },
    { title: "Pricing Plans", desc: "Check out our affordable monthly and annual subscription plans.", link: "#" },
    { title: "Blog & News", desc: "Read the latest articles, insights, and updates from our experts.", link: "#" },
    { title: "Contact Us", desc: "Get in touch with us for inquiries, support, or collaboration.", link: "#" },
  ];

  return (
    <>

    <Navbar />
      <section className="my-16 lg:mt-27.5 lg:mb-22.5 bg-white">
        <Container>
          {/* Section Heading */}
          <SubHeading
            text="Explore All Pages"
            className="flex justify-center items-center text-center mb-6"
          />
          
          {/* Section Subtitle / Description */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <PText 
              text="Quickly navigate through all the essential sections and pages of our platform to find what you are looking for."
              className="text-text16 lg:text-text18 text-lightBlackText leading-relaxed"
            />
          </div>

          {/* Pages Grid */}
          <Flex className="flex-col md:flex-row flex-wrap justify-center lg:justify-between gap-6 lg:gap-7.5 w-full">
            {pageList.map((item, index) => (
              <div key={index} className="w-full md:w-[31%] bg-sectionBg01 p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between transition-all hover:shadow-md">
                <div>
                  <div className="p-3 bg-bgGreen/10 rounded-2xl text-bgGreen w-fit mb-4">
                    <FiFileText className="w-6 h-6 text-bgGreen" />
                  </div>
                  <h3 className="text-text18 lg:text-xl font-bold text-blackText font-inter mb-3">{item.title}</h3>
                  <p className="text-lightBlackText text-sm lg:text-base leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1 text-bgGreen hover:text-[#1d5b98] font-medium text-base cursor-pointer transition-colors"
                  >
                    View Page
                    <FiArrowRight className="w-4 h-4 mt-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </Flex>

        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Pages;