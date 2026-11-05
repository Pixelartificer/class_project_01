import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import Flex from "../components/Flex";
import IndustriesCard from "../components/IndustriesCard";
import Industries01 from "../../public/Image/Industries01.png";
import Industries02 from "../../public/Image/Industries02.png";
import Industries03 from "../../public/Image/Industries03.png";
import Industries04 from "../../public/Image/Industries04.png";
import Industries05 from "../../public/Image/Industries05.png";
import Industries06 from "../../public/Image/Industries06.png";

const IndustriesCardSection = () => {
  return (
    <>
      {/* 
        Responsive IndustriesCardSection Component:
        - Mobile & Tablet: Fluid vertical padding, centered heading, and wrapping flex cards.
        - Desktop (lg:): Full container spacing and grid alignment for all 6 industry cards.
      */}
      <section className="py-16 lg:pt-28 lg:pb-14.5">
        <Container>
          {/* Section Heading */}
          <SubHeading
            text="Industries in focus"
            className="flex justify-center items-center pb-10 lg:pb-14.5 text-center"
          />

          {/* Cards Grid / Flex Container */}
          <Flex className="flex-wrap gap-6 lg:gap-7.5 justify-center items-center">
            <IndustriesCard
              imageSrc={Industries01}
              title="FinTech"
              description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
              linkText="See More"
            />

            <IndustriesCard
              imageSrc={Industries02}
              title="Telecom"
              description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
              linkText="See More"
            />

            <IndustriesCard
              imageSrc={Industries03}
              title="Retail"
              description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
              linkText="See More"
            />

            <IndustriesCard
              imageSrc={Industries04}
              title="Transportation"
              description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
              linkText="See More"
            />

            <IndustriesCard
              imageSrc={Industries05}
              title="eLearning"
              description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
              linkText="See More"
            />

            <IndustriesCard
              imageSrc={Industries06}
              title="Artificial Intelligence"
              description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
              linkText="See More"
            />
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default IndustriesCardSection;