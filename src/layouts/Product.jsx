import Container from "../components/Container";
import Subheading from "../components/SubHeading";
import PText from "../components/PText";
import Image from "../components/Image";
import Flex from "../components/Flex";
import Apple from "../../public/Image/Apple.png";
import Windows from "../../public/Image/Windows.png";
import ProductImg from "../../public/Image/ProductImg.png";

const Product = () => {
  return (
    <>
      {/* 
        Responsive Product Section Component:
        - Mobile & Tablet: Fluid padding, responsive text constraints, and centered device badges.
        - Desktop (lg:): Custom max-widths, exact section padding, and full desktop layout alignment.
      */}
      <section className="bg-sectionBg01 py-16 lg:pt-28 lg:pb-17.5">
        <Container>
          {/* Section Heading */}
          <Subheading
            text="All product work with several devices."
            className="flex items-center justify-center mx-auto w-full max-w-xs sm:max-w-md lg:max-w-92 text-center pb-4 sm:pb-7"
          />

          {/* Description Paragraph */}
          <PText
            text="A great SaaS UI/UX design can make your product addictive and uncomfortable to give up."
            className="flex items-center justify-center mx-auto w-full max-w-sm sm:max-w-lg lg:max-w-120 text-center pb-6 sm:pb-9"
          />

          {/* Device Icons / Badges */}
          <Flex className="items-center justify-center gap-6 pb-8 sm:pb-14">
            <div className="h-8 sm:h-10 w-auto flex items-center">
              <Image
                imageSrc={Apple}
                imageAlt="Apple Product"
                className="max-h-full w-auto object-contain"
              />
            </div>
            <div className="h-8 sm:h-10 w-auto flex items-center">
              <Image
                imageSrc={Windows}
                imageAlt="Windows Product"
                className="max-h-full w-auto object-contain"
              />
            </div>
          </Flex>

          {/* Product Showcase Image */}
          <div className="flex justify-center w-full">
            <Image
              imageSrc={ProductImg}
              imageAlt="Product Image"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Product;
