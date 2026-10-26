import Container from "../components/Container";
import SubHeading from "../components/SubHeading";
import ProductCard from "../components/ProductCard";
import Flex from "../components/Flex";
import ProductImg01 from "../../public/Image/ProductImg01.png";
import ProductImg02 from "../../public/Image/ProductImg02.png";
import ProductImg03 from "../../public/Image/ProductImg03.png";

const WeWorkWith = () => {
  return (
    <section className="bg-sectionBg01 pt-28 pb-36">
      <Container>
        <SubHeading
          text="The Product we work with."
          className="flex justify-center items-center pb-14.5"
        ></SubHeading>

        <Flex>
          <ProductCard
            imageSrc={ProductImg01}
            imageAlt="Consulting"
            title="Consulting"
            description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
            linkText="See More"
            className=""
          />

          <ProductCard
            imageSrc={ProductImg02}
            imageAlt="Security"
            title="Security"
            description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
            linkText="See More"
            className=""
          />

          <ProductCard
            imageSrc={ProductImg03}
            imageAlt="Management & support"
            title="Management & support"
            description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
            linkText="See More"
            className=""
          />
        </Flex>
      </Container>
    </section>
  );
};

export default WeWorkWith;
