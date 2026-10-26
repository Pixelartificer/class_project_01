import Container from "../components/Container";
import Image from "../components/Image";
import ClintIcon from "../../public/Image/ClintIcon.png";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import ClientsCard from "../components/ClientsCard";
import ArtherImage01 from "../../public/Image/ArtherImage01.png";
import ArtherImage02 from "../../public/Image/ArtherImage02.png";
import Flex from "../components/Flex";

const Cients = () => {
  return (
    <section className="bg-sectionBg01 pt-35 pb-38">
      <Container className="flex">
        <div className="w-[40%]  mr-4">
          <Image imageSrc={ClintIcon} className="w-15 h-15" />
          <SubHeading
            text="What our clients say about us"
            className="pt-7 pb-7"
          />
          <PText
            text="Nunc tortor vel tincidunt id massa congue. Varius risus lorem vestibulum velit."
            className="text-left"
          />
        </div>

        <div className="w-[60%]">
          <Flex>
            <ClientsCard
              quote="Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi."
              authorName="Davis Lubin"
              authorRole="CEO of Fashionon"
              authorImg={ArtherImage01}
            />

            <ClientsCard
              quote="Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi."
              authorName="Davis Lubin"
              authorRole="Leslie Alexander"
              authorImg={ArtherImage02}
            />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Cients;
