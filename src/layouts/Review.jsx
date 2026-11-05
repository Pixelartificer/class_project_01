import Container from "../components/Container";
import Flex from "../components/Flex";
import SubSubHeading from "../components/SubSubHeading";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import { GoStarFill } from "react-icons/go";
import CounteerCard from "../components/CounterCard";
import counter01 from "../../public/Image/counter01.png";
import counter02 from "../../public/Image/counter02.png";
import counter03 from "../../public/Image/counter03.png";

const Review = () => {
  return (
    <>
      {/* 
        Responsive Review Section Component:
        - Mobile & Tablet: Fluid background slice, scaled container padding, and stacked flex layout.
        - Desktop (lg:): Side-by-side header content with precise card grid alignment.
      */}
      <section className="relative pt-12 lg:pt-0">
        {/* Background Shape */}
        <div className="bg-heroBg absolute -top-0.5 left-0 -z-10 w-full h-[350px] lg:h-112.5 [clip-path:polygon(0%_0%,100%_0%,100%_100%)]"></div>
        
        <Container className="shadow-[0px_-1px_49px_2px_rgba(0,0,0,0.69)] p-6 sm:p-8 lg:p-12.5 rounded-2xl bg-[#F5F5F5] mx-4 sm:mx-auto">
          <div>
            <div>
              <Flex className="flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-6">
                
                {/* Heading Area */}
                <div className="w-full lg:w-auto">
                  <SubSubHeading text="Who we are?" />
                  <SubHeading
                    className="w-full lg:w-[650px] pt-2"
                    text="More than 5,000 users around the world are already using STDEV actively"
                  />
                </div>

                {/* Rating Box */}
                <div className="w-full sm:w-auto bg-sectionBg rounded-md px-6 lg:px-9 py-6 lg:py-7.5 flex flex-col justify-center items-center text-center shadow-sm">
                  <h1 className="text-[48px] lg:text-[60px] font-bold text-darkBlueText leading-none">
                    4.8
                  </h1>

                  <Flex className="items-center justify-center gap-2 my-2 text-sm lg:text-base">
                    {[...Array(5)].map((_, i) => (
                      <GoStarFill key={i} className="text-[#FF7282]" />
                    ))}
                  </Flex>

                  <PText text="35 Reviews" className="pt-2 text-text14 lg:text-text16" />
                </div>
              </Flex>
            </div>

            <div></div>
          </div>

          {/* Counter Cards Grid */}
          <div className="pt-10 lg:pt-12.5">
            <Flex className="flex-col sm:flex-row flex-wrap justify-center lg:justify-between items-center gap-6">
              <CounteerCard
                imageSrc={counter01}
                number="70+"
                label="Professionals"
              />
              <CounteerCard
                imageSrc={counter02}
                number="22 Years"
                label="Year of experience"
              />
              <CounteerCard
                imageSrc={counter03}
                number="$40+M"
                label="Fundraised by customers"
              />
            </Flex>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Review;