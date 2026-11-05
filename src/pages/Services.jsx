import Container from "../components/Container";
import Flex from "../components/Flex";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import { FiCode, FiLayout, FiSmartphone, FiArrowRight } from "react-icons/fi";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Services = () => {
  const serviceList = [
    { 
      icon: <FiCode className="w-6 h-6 text-bgGreen" />, 
      title: "MERN Stack Development", 
      desc: "Building robust, scalable, and high-performance full-stack web applications using MongoDB, Express, React, and Node.js.", 
      link: "#" 
    },
    { 
      icon: <FiLayout className="w-6 h-6 text-bgGreen" />, 
      title: "UI/UX Design", 
      desc: "Crafting intuitive, user-centric interfaces and seamless user experiences with modern design systems and interactive prototypes.", 
      link: "#" 
    },
    { 
      icon: <FiSmartphone className="w-6 h-6 text-bgGreen" />, 
      title: "Frontend Development", 
      desc: "Developing responsive, modern, and pixel-perfect web interfaces using React, Tailwind CSS, and clean JavaScript architecture.", 
      link: "#" 
    },
  ];

  return (
    <>
    <Navbar />
      <section className="my-16 lg:mt-27.5 lg:mb-22.5 bg-white">
        <Container>
          {/* Section Heading */}
          <SubHeading
            text="Our Professional Services"
            className="flex justify-center items-center text-center mb-6"
          />
          
          {/* Section Subtitle / Description */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <PText 
              text="We provide top-notch digital solutions tailored to elevate your business, combining cutting-edge technology with stunning visual design."
              className="text-text16 lg:text-text18 text-lightBlackText leading-relaxed"
            />
          </div>

          {/* Services Grid */}
          <Flex className="flex-col md:flex-row flex-wrap justify-center lg:justify-between gap-6 lg:gap-7.5 w-full">
            {serviceList.map((item, index) => (
              <div key={index} className="w-full md:w-[31%] bg-sectionBg01 p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between transition-all hover:shadow-md">
                <div>
                  <div className="p-3 bg-bgGreen/10 rounded-2xl w-fit mb-4">
                    {item.icon}
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
                    Read More
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

export default Services;
