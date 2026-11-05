import Container from "../components/Container";
import Image from "../components/Image";
import EngagingImg from "../../public/Image/EngagingImg.png";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import Button from "../components/Button";

const Engaging = () => {
  return (
    <>
      {/* 
        Responsive Engaging Component:
        - Mobile & Tablet: Vertical stacking (flex-col), centered alignment, and comfortable responsive padding.
        - Desktop (lg:): Side-by-side layout with custom spacing and left alignment.
      */}
      <section>
        <Container className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 py-16 lg:pt-27.5 lg:pb-17.5">
          
          {/* Image Area */}
          <div className="w-full lg:w-[50%] flex justify-center">
            <Image 
              imageSrc={EngagingImg} 
              imageAlt="Engaging Illustration" 
              className="w-full max-w-md lg:max-w-none object-contain"
            />
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-[50%] text-center lg:text-left">
            <SubHeading 
              text="Don’t just engage, make it engaging." 
              className="text-left"
            />
            
            <PText 
              text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions." 
              className="text-left pt-6 lg:pt-11 pb-4 lg:pb-8"
            />
            
            <PText 
              text="Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim." 
              className="text-left pb-6 lg:pb-11"
            />

            <div className="flex justify-start">
              <Button 
                text="Read More" 
                className="py-3 px-6 bg-blueText hover:bg-[#2060a0] text-white rounded-xl transition-colors font-raleway font-medium shadow-sm cursor-pointer text-text14 sm:text-text16"
              />
            </div>
          </div>

        </Container>
      </section>
    </>
  );
};

export default Engaging;