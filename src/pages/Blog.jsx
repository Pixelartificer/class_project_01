import Container from "../components/Container";
import Flex from "../components/Flex";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import { HiOutlineCalendar } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Blog = () => {
  const blogList = [
    { 
      title: "Where Should I Buy Next?", 
      date: "24/08/2021", 
      desc: "From romantic getaways to adventurous hikes, find your next favorite destination with our expert guides...", 
      link: "#" 
    },
    { 
      title: "Malesuada Fermentum Tortor", 
      date: "25/08/2021", 
      desc: "Discover essential tips and strategies to scale your digital presence and improve user engagement effectively...", 
      link: "#" 
    },
    { 
      title: "Magna Malesuada", 
      date: "26/08/2021", 
      desc: "Learn about the latest trends in modern web design, React architecture, and clean user interfaces...", 
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
            text="Recent News & Articles"
            className="flex justify-center items-center text-center mb-6"
          />
          
          {/* Section Subtitle / Description */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <PText 
              text="Read our latest insights, professional tips, and updates on technology, design, and business growth."
              className="text-text16 lg:text-text18 text-lightBlackText leading-relaxed"
            />
          </div>

          {/* Blog Cards Grid */}
          <Flex className="flex-col md:flex-row flex-wrap justify-center lg:justify-between gap-6 lg:gap-7.5 w-full">
            {blogList.map((item, index) => (
              <div key={index} className="w-full md:w-[31%] bg-sectionBg01 p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between transition-all hover:shadow-md">
                <div>
                  {/* Date Meta Info */}
                  <div className="flex items-center gap-1.5 text-lightBlackText font-medium text-sm mb-4">
                    <HiOutlineCalendar className="w-4 h-4 text-bgGreen" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-text18 lg:text-xl font-bold text-blackText font-inter mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-lightBlackText text-sm lg:text-base leading-relaxed mb-6 line-clamp-3">
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

export default Blog;