
import Container from "../components/Container";
import Subheading from "../components/SubHeading";

const Product = () => {
  return (
    <section className="bg-sectionBg01">
      <Container>
        <Subheading
          text="All product work with several devices." className="flex items-center justify-center mx-auto max-w-92 text-center pt-28 pb-14.5"
        ></Subheading>
      </Container>
    </section>
  );
};

export default Product;
