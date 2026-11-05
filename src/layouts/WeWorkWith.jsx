import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import ProductCard from "../components/ProductCard";
import Flex from "../components/Flex";
import ProductImg01 from "../../public/Image/ProductImg01.png";
import ProductImg02 from "../../public/Image/ProductImg02.png";
import ProductImg03 from "../../public/Image/ProductImg03.png";

const WeWorkWith = () => {
  return (
    <>
      {/* 
        Responsive WeWorkWith Section Component:
        - Mobile & Tablet: Stacks or wraps neatly depending on screen width.
        - Desktop (lg:): All three product cards stay perfectly in a single row.
      */}
      <section className="bg-sectionBg01 py-16 lg:pt-28 lg:pb-36">
        <Container>
          {/* Section Heading */}
          <SubHeading
            text="The Product we work with."
            className="flex justify-center items-center pb-10 lg:pb-14.5 text-center"
          />

          {/* Product Cards Container - Forced 3 in a row on desktop */}
          <Flex className="flex-col md:flex-row justify-center items-center lg:justify-between gap-6 lg:gap-7.5 w-full">
            <div className="w-full md:w-[32%] flex justify-center">
              <ProductCard
                imageSrc={ProductImg01}
                imageAlt="Consulting"
                title="Consulting"
                description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
                linkText="See More"
                className="w-full"
              />
            </div>

            <div className="w-full md:w-[32%] flex justify-center">
              <ProductCard
                imageSrc={ProductImg02}
                imageAlt="Security"
                title="Security"
                description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
                linkText="See More"
                className="w-full"
              />
            </div>

            <div className="w-full md:w-[32%] flex justify-center">
              <ProductCard
                imageSrc={ProductImg03}
                imageAlt="Management & support"
                title="Management & support"
                description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
                linkText="See More"
                className="w-full"
              />
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default WeWorkWith;