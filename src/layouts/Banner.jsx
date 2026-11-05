import Container from "../components/Container";
import Flex from "../components/Flex";
import Imasge from "../components/Image";
import Button from "../components/Button";
import HeroImage from "../../public/Image/HeroImg.png";

const Banner = () => {
  return (
    <>
      {/* 
        Responsive Banner Component:
        - Mobile & Tablet: Vertical stacking (flex-col), padded spacing, and contained image scaling.
        - Desktop (lg:): Side-by-side layout with full custom absolute positioning and spacious padding.
      */}
      <div className="bg-heroBg  lg:pb-32 overflow-hidden">
        <Container>
          <Flex className="flex-col mt-20 lg:flex-row items-center justify-between gap-12 lg:gap-0">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[45%] text-left">
              <h3 className="text-text14 sm:text-text16 lg:text-text18 text-white font-inter">
                Business & Technologies
              </h3>
              
              <h1 className="text-text30 sm:text-text36 lg:text-text52 text-white font-bold leading-tight lg:leading-15.5 pt-2 lg:pt-3 pb-6 lg:pb-11 font-raleway">
                We help tech companies deliver great software
              </h1>
              
              <p className="text-white text-text14 sm:text-text16 leading-6 lg:leading-7 pb-6 lg:pb-11 font-roboto">
                Since 1999. For millions of users. We transform businesses with
                powerful and adaptable digital solutions that satisfy the needs of
                today and unlock the opportunities of tomorrow.
              </p>

              {/* Responsive Input and Button Group */}
              <div className="relative w-full sm:max-w-lg lg:w-140 flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input 
                  type="text" 
                  placeholder="Enter your email or requirement..."
                  className="h-12 sm:h-15 w-full py-3 sm:py-4 px-4 sm:px-5 sm:pr-48 bg-white outline-none rounded-xl sm:rounded-md text-black text-text14 sm:text-text16 shadow-sm" 
                />
                
                <Button
                  className="sm:absolute sm:top-0 sm:right-0 h-12 sm:h-full px-6 bg-[#2C83BB] text-white rounded-xl sm:rounded-r-md sm:rounded-none w-full sm:w-auto shadow-sm"
                  text="Request for Demo"
                />
              </div>
            </div>

            {/* Right Hero Image Area */}
            <div className="w-full lg:w-[50%] relative flex justify-center lg:block mt-8 lg:mt-0">
              <Imasge 
                imageSrc={HeroImage} 
                imageAlt="Hero Illustration"
                className="w-full max-w-md lg:max-w-none lg:absolute lg:w-172.5 lg:-right-35 lg:-top-57.5 object-contain" 
              />
            </div>

          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;