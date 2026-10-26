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
    <section className="bg-sectionBg01">
      <Container>
        <Subheading
          text="All product work with several devices."
          className="flex items-center justify-center mx-auto max-w-92 text-center pt-28 pb-7"
        ></Subheading>

        <PText
          text="A great SaaS UI/UX design can make your product addictive and uncomfortable to give up."
          className="flex items-center justify-center mx-auto max-w-120 text-center pb-9"
        ></PText>
        <Flex className="items-center justify-center gap-6 pb-14">
          <Image imageSrc={Apple} imageAlt="Apple Product" />
          <Image imageSrc={Windows} imageAlt="Windows Product" />
        </Flex>


        <Image imageSrc={ProductImg} imageAlt="Product Image" className="pb-17.5"/>
      </Container>
    </section>
  );
};

export default Product;
