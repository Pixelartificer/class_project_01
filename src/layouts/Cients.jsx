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
    <>
      {/* 
        Responsive Cients Component:
        - Mobile & Tablet: Vertical stacking with fixed small icon sizing so it doesn't stretch.
        - Desktop (lg:): Side-by-side flex layout with structured section padding.
      */}
      <section className="bg-sectionBg01 py-16 lg:pt-35 lg:pb-38">
        <Container>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
            
            {/* Left Content Area (Heading & Intro) */}
            <div className="w-full lg:w-[40%] lg:mr-4 text-center lg:text-left">
              {/* Fixed Icon Wrapper to prevent full-width stretching on mobile */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-12 h-12 lg:w-15 lg:h-15 flex items-center justify-center shrink-0">
                  <Image 
                    imageSrc={ClintIcon} 
                    imageAlt="Client Icon" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>

              <SubHeading
                text="What our clients say about us"
                className="pt-5 lg:pt-7 pb-4 lg:pb-7"
              />
              <PText
                text="Nunc tortor vel tincidunt id massa congue. Varius risus lorem vestibulum velit."
                className="text-center lg:text-left"
              />
            </div>

            {/* Right Cards Area */}
            <div className="w-full lg:w-[60%]">
              <Flex className="flex-col sm:flex-row justify-center lg:justify-end gap-6">
                <ClientsCard
                  quote="Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi."
                  authorName="Davis Lubin"
                  authorRole="CEO of Fashionon"
                  authorImg={ArtherImage01}
                />

                <ClientsCard
                  quote="Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi."
                  authorName="Leslie Alexander"
                  authorRole="UI/UX Designer"
                  authorImg={ArtherImage02}
                />
              </Flex>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

export default Cients;